import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'patient/profile', component: LoginComponent },
  { path: '**', component: TestComponent }
]


// const routes: Routes = [
//   {
//     path: '**',
//     children: [
//       { path: 'teste', component: TestComponent },],
//     component: LoginComponent
//   },
//   { path: 'login', component: LoginComponent },
// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule { }
