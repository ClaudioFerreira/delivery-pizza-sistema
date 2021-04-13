import { MenuPizzaComponent } from './pages/menu/menu-pizza/menu-pizza.component';
import { PanelComponent } from './pages/panel/panel.component';
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
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: PanelComponent },
      { path: 'pedidos', component: DashboardComponent },
      { path: 'contatos', component: DashboardComponent },
      { path: 'cardapio/pizzas', component: MenuPizzaComponent },
      // {
      //   path: 'cardapio',
      //   children: [
      //     { path: 'cardapio', redirectTo: 'cardapio/pizzas' },
      //   ],
      // },
    ],
    canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   children: [
  //     { path: '', redirectTo: 'entrar' },
  //     { path: 'entrar', component: LoginComponent },
  //   ],
  // },
  { path: 'entrar', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
