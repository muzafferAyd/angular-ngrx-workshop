import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { BookActionsNames } from './landing.actions';
import fakeResponse from '../data/data.json';
import { Book } from './landing.state';
import * as bookActions from './landing.actions';

@Injectable()
export class BookEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) {
    console.log('fakeResponse', fakeResponse);
  }

  public readonly loadBooks$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActionsNames.LoadBooks),
      switchMap(() => of(fakeResponse)),
      map((data: Book[]) => bookActions.LoadBooksSuccess({ data })),
      catchError((error: string | null) =>
        of(bookActions.AddBookFailure({ error }))
      )
    );
  });

  public readonly addBook$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActionsNames.AddBook),
      map((data: any) => {
        const book: Book = data.data;
        return bookActions.AddBookSuccess({ data: book });
      }),
      catchError((error: string | null) =>
        of(bookActions.AddBookFailure({ error }))
      )
    );
  });
}
