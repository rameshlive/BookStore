import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { AuthService } from './../auth.service';
import { BookService } from './../books.service';
import { Book } from '../book';
import { Category } from './../category';
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css'],
  providers:[BookService]
})
export class UpdatebookComponent implements OnInit {

  book: Book[];
  newCategory : Category = new Category();
  submitted = false;
  categories : Category[];
  selectedCategory: "";

  bookid;
  constructor(
    private bookService:BookService,
    private authService : AuthService,
    private _activate_route : ActivatedRoute,
    private _route:Router) { }

  ngOnInit() {

    this.bookid = this._activate_route.snapshot.params['id'];
   
    this.bookService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });

    this.bookService.getBooksById(this.bookid).subscribe((data : Book[]) => {
        this.book = data;
        this.selectedCategory = this.book['categoryid']
        console.log(this.book)
    });

  }
  updateBook() {
    this.bookService.updateBook(this.bookid,this.book).subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateBook();
  }

  /*addCategory(){
    this.bookService.createCategory(this.newCategory).subscribe(data => console.log(data), error => console.log(error));
    this.newCategory = new Category();
  }*/

}
