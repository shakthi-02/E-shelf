import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BooksService} from "../../service/books.service";

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  addBookForm : FormGroup;
  selectedFile: File | null = null;

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
    if (this.addBookForm.valid) {
      const formData = new FormData();

      const bookData = JSON.stringify(this.addBookForm.value);
      formData.append('book', bookData);

      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
      }

      this.bookService.addBook(formData).subscribe({
        next: (response: any) => {
          console.log('Book added successfully:', response);
          this.addBookForm.reset();
          this.selectedFile = null; // Reset the file input
        },
        error: (error: any) => {
          console.error('Error uploading book or image:', error);
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }



  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }

  }
}
