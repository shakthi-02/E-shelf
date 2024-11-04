import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = "http://localhost:8082/api/books";
  private postUrl = "http://localhost:8082/api/books/add";

  constructor(private http: HttpClient) { }

  getBooks(): any {
    return this.http.get(this.apiUrl);
  }

  addBook(formData: FormData): any {
    return this.http.post(this.postUrl, formData)
  }
}
