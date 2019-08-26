import { Injectable } from '@angular/core';
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {

  private router: Router;

  constructor(router: Router, plt: Platform) {
      const auth0Config : IonicAuthOptions = {
        // the auth provider
        authConfig: 'auth0',
        // The platform which we are running on
        platform: 'cordova',
        // client or application id for provider
        clientID: '',
        // the discovery url for the provider
        discoveryUrl: '',
        // the URI to redirect to after log in
        redirectUri: 'myapp://callback',
        // requested scopes from provider
        scope: 'openid offline_access email picture profile',
        // the audience, if applicable
        audience: 'https://api.myapp.com',
        // the URL to redirect to after log out
        logoutUrl: 'myapp://callback?logout=true',
        // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
        // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
        // to confirm they want to share site data with the app. 'private' uses a webview which will not
        // prompt the user but will not be able to share session/cookie data either for true SSO across
        // multiple apps.
        iosWebView: 'private',
        clientSecret: ''
      };

      super(auth0Config);

      this.router = router;
    }

    async login() {
      await super.login();
    }

    async onLoginSuccess(response: any) {
      console.log("log-in success");
      this.router.navigate(['home']);
    }

    async logout() {
      super.logout();
    }

    async isAuthenticated() {
      return await super.isAuthenticated();
    }

    async getUserInfo() {
      return await super.getIdToken();
    }
}
