import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../+state/landing.state';
import { BookFacade } from '../../+state/landing.facades';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public books: Book[] = [];
  @ViewChild('title', { static: true }) titleElement!: ElementRef;
  @ViewChild('author', { static: true }) authorElement!: ElementRef;
  @ViewChild('year', { static: true }) yearElement!: ElementRef;
  public constructor(private readonly bookFacade: BookFacade) {}

  public ngOnInit(): void {
    this.bookFacade.loadBooks();
    this.bookFacade.loaded$
      .pipe(
        filter((isLoaded: boolean) => isLoaded === true),
        switchMap(() => this.bookFacade.allBooks$)
      )
      .subscribe((books: Book[]) => {
        this.books = books;
        console.log(books);
      });
  }

  public addBook(): void {
    const newBook: Book = {
      title: this.titleElement.nativeElement.value,
      author: this.authorElement.nativeElement.value,
      publicationDate: this.yearElement.nativeElement.value,
    };
    this.bookFacade.addBook(newBook);
  }
}
