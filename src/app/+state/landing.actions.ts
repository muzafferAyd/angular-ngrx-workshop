import { createAction, props } from '@ngrx/store';
import { Book } from './landing.state';

export enum BookActionsNames {
  Init = '[Book] Init',
  LoadBooks = '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books Success',
  LoadBooksFailure = '[Book] Load Books Failure',
  GetRandomBook = '[Book] Get Random Book',
  GetRandomBookSuccess = '[Book] Get Random Book Success',
  GetRandomBookFailure = '[Book] Get Random Book Failure',
  AddBook = '[Book] Get Random Book',
  AddBookSuccess = '[Book] Get Random Book Success',
  AddBookFailure = '[Book] Get Random Book Failure',
}

export const Init = createAction(BookActionsNames.Init);

export const LoadBooks = createAction(BookActionsNames.LoadBooks);

export const LoadBooksSuccess = createAction(
  BookActionsNames.LoadBooksSuccess,
  props<{ data: Book[] }>()
);

export const LoadBooksFailure = createAction(
  BookActionsNames.LoadBooksFailure,
  props<{ error: string | null }>()
);

export const GetRandomBook = createAction(BookActionsNames.GetRandomBook);

export const GetRandomBookSuccess = createAction(
  BookActionsNames.GetRandomBookSuccess,
  props<{ data: Book[] }>()
);

export const GetRandomBookFailure = createAction(
  BookActionsNames.GetRandomBookFailure,
  props<{ error: string | null }>()
);

export const AddBook = createAction(
  BookActionsNames.AddBook,
  props<{ data: Book }>()
);

export const AddBookSuccess = createAction(
  BookActionsNames.AddBookSuccess,
  props<{ data: Book }>()
);

export const AddBookFailure = createAction(
  BookActionsNames.AddBookFailure,
  props<{ error: string | null }>()
);
