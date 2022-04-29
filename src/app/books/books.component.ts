import { Component, OnInit } from '@angular/core';
import { Books } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  private textSearch: string = '';
  books: Books[] = [];
  filterBooks: Books[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any) =>{
      this.books = data;
      this.filterBooks = this.books;
    });

  }

  checkObjectChanged(event: Event){
    const value = (event.target as HTMLInputElement).value;
    if(value == null || value == ''){
      this.filterBooks  = this.books;
      this.textSearch = '';
    } else {
      this.filterBooks  = this.books.filter(a => a.title.toLowerCase().includes(value.toLowerCase()));
      this.textSearch = value;
    }
  }

  checkOrderTitle(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    switch (value) {
      case "asc-titulo":
        this.filterBooks  = this.filterBooks.sort((one, two) => (one.title > two.title ? 1 : -1));
      break;
      case "desc-titulo":
        this.filterBooks  = this.filterBooks.sort((one, two) => (one.title > two.title ? -1 : 1));

      break;
      case "asc-editorial":
        this.filterBooks  = this.filterBooks.sort((one, two) => (one.editorial > two.editorial ? 1 : -1));
      break;
      case "desc-editorial":
        this.filterBooks  = this.filterBooks.sort((one, two) => (one.editorial > two.editorial ? -1 : 1));
      break;
      default:
        this.filterBooks = this.books;
        break;
    }
    if(this.textSearch !== ''){
      this.filterBooks  = this.filterBooks.filter(a => a.title.toLowerCase().includes(this.textSearch.toLowerCase()));
    }
  }
}
