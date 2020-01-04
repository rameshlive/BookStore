import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    invalidCredentialMsg: string;
    retUrl:string="home";
    submitted = false;
 
    constructor(private authService: AuthService, 
                private router: Router, 
                private activatedRoute:ActivatedRoute) {
    }
    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
    }
 
    onFormSubmit(loginForm) {
       //this.submitted = true;
       console.log(loginForm);
       this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
          
           if (this.retUrl!=null) {
                this.router.navigate( [this.retUrl]);
           } else {
                this.router.navigate( ['home']);
           }
       });
    }

}
