import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {

  bookId: any;
  book: any;
  updateBookForm: FormGroup;

  constructor(private bookService: BooksService, private route: ActivatedRoute) {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.updateBookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      genre: new FormControl(''),
      description: new FormControl('')
    });
  }
  
  ngOnInit(): void {
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (response: any) => {
          this.book = response;
          this.updateBookForm.patchValue({
            id: this.book.id,
            title: this.book.title,
            author: this.book.author,
            genre: this.book.genre,
            description: this.book.description
          });
        },
        error: (error) => {
          console.error('Error fetching book:', error);
        }
      });
    }
  }
  handleUpdateBook() {
    console.log(this.updateBookForm);
    try {
      this.bookService.updateBook(this.bookId, this.updateBookForm.value)
        .subscribe((response: any) => {
          console.log(response);
 
        })
    } catch (error) {
        console.log(error);
      
    }
    }
  
 

}
