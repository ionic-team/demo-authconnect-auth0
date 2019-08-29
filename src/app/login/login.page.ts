import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, public loadingController: LoadingController) { }

  ngOnInit() { }

  async login() {
    // Display loading indicator while Auth Connect login window is open
    const loadingIndicator = await this.loadingController.create({
       message: 'Opening login window...' 
     });
    await loadingIndicator.present();

    await this.authService.login(loadingIndicator);
  }

}
