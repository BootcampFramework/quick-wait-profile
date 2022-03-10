import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthServiceLoginResponse, IAuthServiceRegisterResponse, ICreateUserInfos, IEnvironmentAuthType, IOptionsPathType, IUserCredentials } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _optionsPath:IOptionsPathType = {
    login: "signin",
    create: "signup"
  };

  constructor(private http: HttpClient, @Inject('AUTH_ENVIRONMENT') private authEnvironment: IEnvironmentAuthType) { }

  private _getOpitionsPath(path:string): string {
    if(path in this._optionsPath) return this._optionsPath[path];
    return "";
  }

  loginWithUserCredentials(user: IUserCredentials): Observable<IAuthServiceLoginResponse> | undefined {
    if(!user.password || !user.username) return;

    return this.http.post<IAuthServiceLoginResponse>(`${this.authEnvironment.baseURL}${this._getOpitionsPath("login")}`, user);
  }

  createUser(newUserInfos: ICreateUserInfos): Observable<IAuthServiceRegisterResponse> {
    return this.http.post<IAuthServiceRegisterResponse>(`${this.authEnvironment.baseURL}${this._getOpitionsPath("create")}`, newUserInfos);
  }
}
