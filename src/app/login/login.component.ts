import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { navigateToUrl } from 'single-spa';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  formulario: FormGroup;
  hasError: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.hasError = false;
    this.formulario = this.formBuilder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  //validação de erros

  verificaValidTouched(campo: any) {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }
  onSubmit() {
    this.hasError = this.checkUser();
    if (!this.hasError) {
      localStorage.setItem('auth', JSON.stringify(this.formulario.value));
      location.assign('/patient');
    }
  }

  checkUser(): boolean {
    const { usuario, senha } = this.formulario.value;
    if (usuario === 'framework' && senha === 'frame') {
      return true;
    } else {
      return false;
    }
  }
}
