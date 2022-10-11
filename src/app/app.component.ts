import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookFacade } from './+state/landing.facades';
import { filter, switchMap } from 'rxjs';
import { Book } from './+state/landing.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
