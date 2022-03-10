import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { IAuthServiceLoginResponse, IErrorHandlerMessage, IUserInfos } from '../interfaces/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [AuthService]
})

export class LoginComponent {

  formulario: FormGroup;
  hasError: boolean = false;
  userInfos: IUserInfos | undefined = undefined;
  stringButtonLogin: string = "Entrar";
  showModalSubscription: boolean = false;
  httpError = {
    error: false,
    message: ""
  }

  private errorHandlersMessage: IErrorHandlerMessage = {
    "Error: The username informed does not exist!": "Esse usuário informado não existe.",
    "401": "A senha informada está incorreta"
  }

  constructor(

    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _toastService: ToastService,

  ) {
    this.formulario = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  //validação de erros

  verificaValidTouched(campo: any) {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }


  private generateErrorMessage(key:string): string {
    if(key in this.errorHandlersMessage) return this.errorHandlersMessage[key];
    return "Algo de errado aconteceu";
  }

  private removeItemLocalStorage(keys: string | Array<string>): boolean | Array<boolean> {
    function removeItem(key: string): boolean {
      if(localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
        return true;
      }

      return false;
    }

    if(typeof keys === "string") return removeItem(keys);

    let resultRemoveArray: Array<boolean> = [];

    keys.forEach((key: string) => {
      resultRemoveArray.push(removeItem(key));
    })

    return resultRemoveArray;
  }

  redirect(route: string) {
    location.assign(route);
  }

  private _loginWithUser() {
    const { username, password } = this.formulario.value;
    this.stringButtonLogin = "Entrando...";

    this.authService.loginWithUserCredentials({ password , username })?.
      subscribe((response: IAuthServiceLoginResponse) => {

        if(response.status === 200) {

          this.userInfos = {...response};

          localStorage.setItem("auth", JSON.stringify({usuario: response.username, token: response.token}));
          localStorage.setItem("userInfos", JSON.stringify(response));

          this.redirect('/patient');
          return;

        }

      }, (error: HttpErrorResponse) => {

        if(error.status === 400 || error.status === 401) {

          if(this.removeItemLocalStorage("auth")) {
            this._toastService.info("Usúario deslogado do sistema, por favor efetue login novamente.");
            this.removeItemLocalStorage("userInfos");
            this.redirect('/user/login');
            return;
          }

          this._toastService.error(
            this.generateErrorMessage(
              error.status === 400 ? error.error.message : "401"
            )
          );

          this.userInfos = undefined;
          this.formulario.reset();
          this.stringButtonLogin = "Entrar";
          return;
        }

      });
  }

  onSubmit() {
    if(!this.checkUser()) return;

    this._loginWithUser();
  }

  checkUser(): boolean {
    if(!this.formulario.valid) {
      this.hasError = true;
      return false;
    }

    return true;
  }
}
