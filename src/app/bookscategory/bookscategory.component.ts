import { Category } from './../category';
import { BookService } from './../books.service';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bookscategory',
  templateUrl: './bookscategory.component.html',
  styleUrls: ['./bookscategory.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookscategoryComponent implements OnInit {

  categories : Category[];

  @Output() selectedCategory: EventEmitter<string> = new EventEmitter()

  constructor(private bookService:BookService,) { }

  ngOnInit() {
    this.bookService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }
  selectCategory(event){
      this.selectedCategory.emit(event.target.id);
  }

}

