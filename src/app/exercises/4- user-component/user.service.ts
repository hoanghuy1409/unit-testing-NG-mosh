import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  private _url = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get(this._url).pipe(map((res: any) => res.json()));
  }

  getUser(userId) {
    return this._http
      .get(this.getUserUrl(userId))
      .pipe(map((res: any) => res.json()));
  }

  addUser(user) {
    return this._http
      .post(this._url, JSON.stringify(user))
      .pipe(map((res: any) => res.json()));
  }

  updateUser(user) {
    return this._http
      .put(this.getUserUrl(user.id), JSON.stringify(user))
      .pipe(map((res: any) => res.json()));
  }

  deleteUser(userId) {
    return this._http
      .delete(this.getUserUrl(userId))
      .pipe(map((res: any) => res.json()));
  }

  private getUserUrl(userId) {
    return this._url + "/" + userId;
  }
}
