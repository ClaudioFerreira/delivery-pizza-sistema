import { AuthGuard } from './shared/guard/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'pedidos', component: DashboardComponent },
      { path: 'contatos', component: DashboardComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
    // redirectTo: 'entrar',
    // children: [
    //   { path: 'entrar', component: LoginComponent, pathMatch: 'full' },
    // ],
  },
  { path: 'entrar', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
