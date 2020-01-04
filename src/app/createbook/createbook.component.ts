import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { BookService } from './../books.service';
import { Book } from '../book';
import { Category } from './../category';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css'],
  providers: [BookService]
})
export class CreatebookComponent implements OnInit {
  book: Book = new Book();
  newCategory : Category = new Category();
  submitted = false;
  categories : Category[];
  selectedCategory = "1";
  
  constructor(private bookService:BookService,private authService : AuthService, private _route:Router) { }

  ngOnInit() {
    this.bookService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  onChange(newValue) {
    this.selectedCategory = newValue;
    this.book['categoryid'] = parseInt(this.selectedCategory);
    // ... do other stuff here ...
  }

  save() {
    this.bookService.createBook(this.book).subscribe(data => console.log(data), error => console.log(error));
    this.book = new Book();
  }

  
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
