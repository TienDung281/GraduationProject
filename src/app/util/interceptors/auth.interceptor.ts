import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private allowed = ['/assets', '/api/token'];
  constructor(
    private storage: LocalStorageService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    // if (this.allowed.some((url) => req.url.includes(url))) {
    //   return next.handle(req);
    // }
    this.spinner.show();
    let token = this.storage.get('access_token');
    let header = req.headers.get('Content-Type')?.split('/') || [];
    if (
      header[0] == 'image' ||
      header[1] == 'x-zip-compressed' ||
      header[1] == 'zip' ||
      header[1] == 'pdf' ||
      header[1] == 'mp4'
    ) {
      req = req;
    } else if (req.method == 'PUT') {
      req = req;
    } else if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
    }
    if (!token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'NO_AUTHENTICATION_V1',
        },
      });
    }

    return next.handle(req).pipe(
      finalize(() => this.spinner.hide()),
      tap(
        () => {},
        (err: any) => {
          this.spinner.hide();
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // this.noti.showError(err.message);
            } else if (err.status === 500) {
              localStorage.clear();
            }
            // console.log(err);
          }
        }
      )
    );
  }
}
