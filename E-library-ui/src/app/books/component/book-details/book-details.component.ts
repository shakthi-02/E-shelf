import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {DialogModule} from "primeng/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterModule, DialogModule, ReactiveFormsModule, Button, CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  bookId: any;
  book: any;
  displayDialog: boolean = false;

  constructor(private bookService: BooksService,private route:ActivatedRoute){
    this.bookId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.bookService.getBookById(this.bookId).subscribe((response:any)=>{
      console.log(response);
      this.book = response;
    });
  }

  handleDeleteBook() {
    this.bookService.deleteBookById(this.bookId).subscribe((response:any)=>{
      console.log(response);
      alert("Book Deleted Successfully");
    })
  }

  hideDialog() {
    this.displayDialog = false;
  }

  showDialog() {
    this.displayDialog = true;
  }
}
