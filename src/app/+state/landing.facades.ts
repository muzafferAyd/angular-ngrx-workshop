import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as bookSelectors from './landing.selectors';
import { Book, BookState } from './landing.state';
import * as bookActions from './landing.actions';

@Injectable()
export class BookFacade {
  constructor(private readonly store: Store<BookState>) {}
  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(bookSelectors.getBooksLoaded)
  );
  public readonly allBooks$: Observable<Book[]> = this.store.pipe(
    select(bookSelectors.getAllBooks)
  );

  public init(): void {
    this.store.dispatch(bookActions.Init());
  }

  public loadBooks(): void {
    this.store.dispatch(bookActions.LoadBooks());
  }

  public addBook(book: Book): void {
    this.store.dispatch(bookActions.AddBook({ data: book }));
  }
}
