import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';
import { appRoutes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/booklist.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { NavComponent } from './nav/nav.component';
import { BooklistnavComponent } from './booklistnav/booklistnav.component';
import { FooterComponent } from './footer/footer.component';
import { BookscategoryComponent } from './bookscategory/bookscategory.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    NavComponent,
    BooklistnavComponent,
    FooterComponent,
    BookscategoryComponent,
    CreatebookComponent,
    UpdatebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
