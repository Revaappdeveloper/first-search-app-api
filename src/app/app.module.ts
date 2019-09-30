import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'search', component: SearchPageComponent},
  {path:'logout', component: LogoutComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchPageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
