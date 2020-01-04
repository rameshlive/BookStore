import { UpdatebookComponent } from './updatebook/updatebook.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { AuthGuardService } from './auth-guard.service';
import { Routes } from '@angular/router';

import { BookListComponent } from './book-list/booklist.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


export const appRoutes :Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component:LoginComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'booklist', component: BookListComponent, canActivate: [AuthGuardService] },
    { path: 'addbook' , component : CreatebookComponent, canActivate: [AuthGuardService]},
    { path: 'updatebook/:id' , component : UpdatebookComponent, canActivate: [AuthGuardService]},
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];