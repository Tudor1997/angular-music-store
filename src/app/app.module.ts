import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'environments/environment';
import { CustomFormsModule } from 'ng2-validation';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),

    CustomFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
