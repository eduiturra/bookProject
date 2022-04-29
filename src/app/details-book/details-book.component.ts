import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss']
})
export class DetailsBookComponent implements OnInit {
  private bookId: any;
  book!: Books;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.getBook();
  }

  private getBook() {
    this.bookService.getBooks().subscribe((data: Books[]) =>{
      this.book = data.filter(a => a.bookId == this.bookId)[0];
    });
  }

}
