import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have username input', () => {
    fixture.detectChanges();
    const username = fixture.nativeElement.querySelector('#usuario');
    expect(username).toBeTruthy();
    expect(username.getAttribute('type')).toEqual('text');
  });
  it('Should have password input', () => {
    fixture.detectChanges();
    const password = fixture.nativeElement.querySelector('#senha');
    expect(password).toBeTruthy();
    expect(password.type).toEqual('password');
  });

  it('Form should be invalid with none filled in', () => {
    component.formulario = new FormBuilder().group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
    expect(component.formulario.valid).toBeFalsy();
  });

  it('Form should be invalid with only username filled', () => {
    component.formulario = new FormBuilder().group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
    component.formulario.controls.usuario.setValue('test');
    expect(component.formulario.valid).toBeFalsy();
  });

  it('Form should be invalid with only password filled', () => {
    component.formulario = new FormBuilder().group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
    component.formulario.controls.senha.setValue('test');
    expect(component.formulario.valid).toBeFalsy();
  });

  it('Form should be valid with both filled in', () => {
    component.formulario = new FormBuilder().group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
    component.formulario.controls.usuario.setValue('test');
    component.formulario.controls.senha.setValue('test');
    expect(component.formulario.valid).toBeTruthy();
  });

  it('Should input be filled but not touched', () => {
    component.formulario = new FormBuilder().group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
    component.formulario.controls.usuario.setValue('test');

    expect(component.verificaValidTouched('usuario')).toBeFalsy();
  });

  it('Should Check user', () => {
    component.formulario = new FormBuilder().group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required],
    });
    component.formulario.controls.usuario.setValue('framework');
    component.formulario.controls.senha.setValue('frame');
    expect(component.checkUser()).toBeTruthy();

    component.formulario.controls.usuario.setValue('test');
    component.formulario.controls.senha.setValue('test');
    expect(component.checkUser()).toBeFalsy();
  });
});
