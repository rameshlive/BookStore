import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loggingUser : boolean;
  constructor(private authService:AuthService,private router:Router){
    //console.log(this.authService.isUserLoggedIn());
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.authService.isUserLoggedIn());
  }
  logout() {
      this.authService.logoutUser();
      this.loggingUser = this.authService.isUserLoggedIn();
      this.router.navigate(['home']);
  }
}
