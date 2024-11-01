import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {BooksComponent} from "./books/books.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: "E-Library"},
  {path: 'about', component: AboutComponent, title: "About"},
  {path: 'books', component: BooksComponent, title: "Books"}
];
