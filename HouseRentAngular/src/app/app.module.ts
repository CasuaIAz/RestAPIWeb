import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RentAdvertisementsComponent } from './rent-advertisements/rent-advertisements.component';
import { SellAdvertisementsComponent } from './sell-advertisements/sell-advertisements.component';

import { Routes, RouterModule } from '@angular/router';
import { OKTA_CONFIG, OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

const oktaConfig = {
    issuer: 'https://dev-1309482.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/login',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    clientId: '0oa3mugx92OL0O42r5d6'
}

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'RentAdvertisements', component: RentAdvertisementsComponent, pathMatch: 'full'},
    { path: 'SellAdvertisements', component: SellAdvertisementsComponent, pathMatch: 'full'},
    { path: 'login', component: OktaCallbackComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RentAdvertisementsComponent,
    SellAdvertisementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
