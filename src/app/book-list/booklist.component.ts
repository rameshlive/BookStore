import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';


@Component({
  selector: 'app-book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  books : Book[];
  userRole : boolean;
  results : boolean;

  viewMode : string = "grid";

  constructor(private bookService:BookService,private authService : AuthService, private _route:Router){
    this.userRole = this.authService.isAdminUser();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userRole = this.authService.isAdminUser();
   
    this.bookService.getBooks().subscribe((data: Book[]) => {
       this.books = data;
       this.results = data.length  > 0 ? true : false
    });
  
  }

  filterCategories(catid: any) {
     if(catid == "all"){
        this.bookService.getBooks().subscribe((data: Book[]) => {
          this.books = data;
          this.results = data.length  > 0 ? true : false
      });
     }
     else{
      this.bookService.getBooks().subscribe((data: Book[]) => {
        this.books = data.filter((book) => book.categoryid == catid);
        this.results = this.books.length > 0 ? true : false
      });
     }
  }

  deleteBook(bookid) {  
    this.bookService.deleteBook(bookid)  
      .subscribe(response => {  
        let index = this.books.indexOf(bookid);  
        this.books.splice(index, 1); 
    }); 
  }  

  addBook(){
    this._route.navigate(['addbook']);
  }

  updateBook(bookid){
    this._route.navigate(['updatebook',bookid]);
  }
}
