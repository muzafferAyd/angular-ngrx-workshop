import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BOOKS_FEATURE_KEY } from './+state/landing.state';
import { reducer } from './+state/landing.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './+state/landing.effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookFacade } from './+state/landing.facades';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(BOOKS_FEATURE_KEY, reducer),
    EffectsModule.forRoot([BookEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [BookFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
