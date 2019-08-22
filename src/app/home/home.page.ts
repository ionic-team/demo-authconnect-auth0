import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private router: Router;
  private user: any;

  constructor(private authService : AuthenticationService, router: Router) {
    this.router = router;
  }

  async ngOnInit() {
    this.user = await this.authService.getUserInfo();
  }

  async logout() {
    this.authService.logout();
    //this.router.navigate(['login']);
  }

}