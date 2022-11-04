import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class ViewProfileService {

  constructor(private http: HttpClient) {}

  viewProfile(data: any) {
    return this.http.post(`${environment.VIEW_PROFILE}/profile-view-my-profile`,data);
  }
}

