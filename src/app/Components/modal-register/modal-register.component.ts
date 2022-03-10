import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { IAuthServiceRegisterResponse, IErrorHandlerMessage, IFormRegisterInputs } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.sass']
})
export class ModalRegisterComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter();

  RegistrationForm: FormGroup;

  private formKeys: IFormRegisterInputs = {
    "username": "usuário",
    "email": "e-mail",
    "cpf": "CPF",
    "password": "Senha",
    "confirmPassword": "de confirmação de senha"
  }

  private errorHandlersMessage: IErrorHandlerMessage = {
    "This username is already being used.": "Esse nome de usúario ja está sendo usado.",
    "The email was not informed.": "O campo e-mail não foi enviado.",
    "The username was not informed.": "O campo usuário não foi enviado."
  }

  constructor(

    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _toastService: ToastService,

  ) {

    this.RegistrationForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, Validators.email],
      cpf: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
    });

  }

  private generateErrorMessage(key:string): string {
    if(key in this.errorHandlersMessage) return this.errorHandlersMessage[key];
    return "Algo de errado aconteceu";
  }

  private handlerErrorMessage(): void {
    let formState = {
      keys: Object.keys(this.RegistrationForm.value),
      value: this.RegistrationForm.value
    };

    for(let i = 0; i < formState.keys.length; i++) {
      if(formState.value[formState.keys[i]] === null)
        return this._toastService.error(`O campo ${this.formKeys[formState.keys[i]]} não foi preenchido.`);
    }
  }

  ngOnInit(): void {}

  redirect(path: string): void {
    location.assign(path);
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  onSubmit(): void {

    const newUser = this.RegistrationForm.value;

    if(!this.RegistrationForm.valid) {
      this.handlerErrorMessage();
      return;
    }

    if(newUser.password !== newUser.confirmPassword)
      return this._toastService.error("As senhas não conferem.");

    delete newUser["confirmPassword"];

    this.authService.createUser({...newUser}).subscribe((response: IAuthServiceRegisterResponse) => {
      if(response.status === 200) {

        this._toastService.success("Cadastro realizado com sucesso, efetue o login.");
        this.closeModal();
        return;

      }
    }, (error: HttpErrorResponse) => {

      if(error.status === 400) {
        this._toastService.error(this.generateErrorMessage(error.error.message));
        return;
      }

      this._toastService.error("Algo de errado aconteceu, tente novamente mais tarde.");
      this.RegistrationForm.reset();
      this.closeModal();
      return;
    });

  }

}
