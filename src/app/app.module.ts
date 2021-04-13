import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavHeaderComponent } from './components/nav/nav-header/nav-header.component';
import { NavFooterComponent } from './components/nav/nav-footer/nav-footer.component';
import { NavSideMenuComponent } from './components/nav/nav-side-menu/nav-side-menu.component';
import { PanelComponent } from './pages/panel/panel.component';
import { MenuPizzaComponent } from './pages/menu/menu-pizza/menu-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavHeaderComponent,
    NavFooterComponent,
    NavSideMenuComponent,
    PanelComponent,
    MenuPizzaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
