import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;

  constructor(private authService: AuthenticationService) { }

  async ngOnInit() {
    this.user = await this.authService.getUserInfo();
  }

  async logout() {
    await this.authService.logout();
  }
}
