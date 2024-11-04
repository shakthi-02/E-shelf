import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

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
}

