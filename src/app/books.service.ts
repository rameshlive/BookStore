import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class BookService {
    catid : string;
    API_URL = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }
    getBooks() {
        return this.httpClient.get(`${this.API_URL}/books`);
    }
    getBooksById(boodID) {
        return this.httpClient.get(this.API_URL + '/books/' + boodID);
    }
    getCategories(){
        return this.httpClient.get(`${this.API_URL}/categories`)
    }
    updateBook(bookid: number, value: any){
        console.log(value);
        return this.httpClient.put(this.API_URL + '/books/' + bookid, value);
    }
    deleteBook(boodID) {  
        return this.httpClient.delete(this.API_URL + '/books/' + boodID);  
    } 
    createCategory(category:Object){
        return this.httpClient.post(`${this.API_URL}/categories`, category);
    }
    createBook(book: Object) {
        return this.httpClient.post(`${this.API_URL}/books`, book);
    }
}