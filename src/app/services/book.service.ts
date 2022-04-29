import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _jsonURL = 'assets/books_source.json';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]>{
    return this.http.get<Books[]>(this._jsonURL);
  }
}
