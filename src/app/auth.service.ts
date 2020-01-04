import { Book } from './book';
import { Injectable } from '@angular/core';
import { of , observable} from 'rxjs';
 
@Injectable()
export class AuthService { 
 
    private isloggedIn: boolean;
    private userName:string;
    private role: boolean;
    private user:boolean;

    users = [
        {
            'username' : "ramesh",
            'password' : "ramesh",
            'role':'user'
        },
        {
            'username' : "prenetics",
            'password' : "prenetics",
            'role':'user'
        },
        {
            'username' : "admin",
            'password' : "admin",
            'role':'admin'
        },
    ]
 
    constructor() {
        this.isloggedIn=false;
        this.role = false;
    }
    authendicateuser(username,password):any{
        var result : any;
        
        result = this.users.filter( person => person.username === username && person.password === password)

        return result;
      
    }
    login(username: string, password:string) {
        //Assuming users are provided the correct credentials.
        //I1n real app you will query the database to verify.

         //this.authendicateuser(username,password)
        var userExist = this.authendicateuser(username,password);
        
        if(userExist.find( user => user.role == "admin")){
            this.isloggedIn=true;
            this.userName=username;
            this.role = true;
            return of(this.isloggedIn); 
        }else{
            this.isloggedIn=true;
            this.userName=username;
            this.role = false;
            return of(this.isloggedIn); 
        }  
    }
 
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
 
    isAdminUser():boolean {
        return this.role;
    }
    
    logoutUser(): void{
        this.isloggedIn = false;
    }
 
} 