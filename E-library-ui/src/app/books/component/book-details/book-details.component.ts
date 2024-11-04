import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  bookId: any;
  book: any;

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
}
