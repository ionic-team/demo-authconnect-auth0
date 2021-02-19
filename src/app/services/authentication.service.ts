import { Injectable } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { auth0NativeConfig, auth0WebConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {
  private router: Router;

  constructor(router: Router) {
    // Determine whether to run on mobile or the web
    const selectedConfig = Capacitor.isNativePlatform() ? auth0NativeConfig : auth0WebConfig;
    super(selectedConfig);
    this.router = router;
  }

  async getUserInfo() {
    return await super.getIdToken();
  }

  onLoginSuccess() {
    this.router.navigate(['home']);
  }

  onLogout() {
    this.router.navigate(['login']);
  }
}
