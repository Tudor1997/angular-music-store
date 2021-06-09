import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { CustomFormsModule } from 'ng2-validation';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './components/spinner/spinner.component';




@NgModule({
  declarations: [
    ProductCardComponent,
    SpinnerComponent
  ],
  exports:[
    ProductCardComponent,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    SpinnerComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ]
})
export class SharedModule { }
