import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:8082/api/books';

  constructor(private http: HttpClient) { }

  addBook(formData: any) {
    return this.http.post(`${this.apiUrl}/add`, formData);
  }


  getBooks() {
    return this.http.get(this.apiUrl);
  }

  getBookById(id : any){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateBook(id : any, book : any):Observable<any>{
    console.log(book);
    console.log(book.value);
    return this.http.put(`${this.apiUrl}/${id}`,book,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  deleteBookById(bookId: any) {
    return this.http.delete(`${this.apiUrl}/${bookId}`);
  }
}

