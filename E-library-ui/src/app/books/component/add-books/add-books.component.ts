import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BooksService} from "../../service/books.service";
import {response} from "express";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  addBookForm : FormGroup;
  isError: boolean = false;

  constructor(private bookService: BooksService) {
    this.addBookForm = new FormGroup({
      id: new FormControl('',Validators.required),
      title: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      genre: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
    });

  }

  handleAddBook() {
    console.log(this.addBookForm);
    try{
      this.bookService.addBook(this.addBookForm.value)
        .subscribe((response: any) => {
        console.log(response);
      })
    }
    catch (error){
      console.log(error);
      this.isError = true;
    }
  }
}
