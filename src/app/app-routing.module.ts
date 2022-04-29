import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DetailsBookComponent } from './details-book/details-book.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'detail/:bookId', component: DetailsBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
