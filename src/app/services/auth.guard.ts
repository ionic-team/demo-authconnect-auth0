import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private authentication: AuthenticationService,
    private navCtrl: NavController) { }

  async canActivate(): Promise<boolean> {
    const authed = await this.authentication.isAuthenticated();
    if (authed) {
      return true;
    } else {
      this.navCtrl.navigateRoot('/login');
      return false;
    }
  }
}