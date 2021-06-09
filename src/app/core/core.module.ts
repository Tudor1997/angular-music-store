import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/navbar/search/search.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';






@NgModule({
  declarations: [
    MainContentComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFountComponent,
    SearchComponent,
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,

  ]
})
export class CoreModule { }
