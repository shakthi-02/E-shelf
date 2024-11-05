import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../service/books.service";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import { IBook } from '../../models/ibook';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent implements OnInit{
  books: IBook[] =[];

  constructor(private booksService: BooksService) {

  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response: any) =>{
      console.log(response);
      this.books = response;
    })
  }
}
