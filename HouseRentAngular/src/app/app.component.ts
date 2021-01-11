import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'HouseRentAngular';

  	isAuthenticated: boolean;

    constructor(public oktaAuth: OktaAuthService) {
        this.oktaAuth.$authenticationState.subscribe(
            (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
        );
    }

    async ngOnInit() {
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    }

    login() {
        this.oktaAuth.signInWithRedirect({ originalUri: '/' });
    }

    logout() {
        this.oktaAuth.tokenManager.clear();
    	  this.oktaAuth.signOut('/');
    }
}
