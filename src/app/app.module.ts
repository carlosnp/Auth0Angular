import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment } from './../environments/environment';
import { HeaderComponent } from './components/commons/header/header.component';
import { AuthButtonComponent } from './components/auth/auth-button/auth-button.component';
import { FooterComponent } from './components/commons/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth_domain,
      clientId: environment.auth_client_id
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
