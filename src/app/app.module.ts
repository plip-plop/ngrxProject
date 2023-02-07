import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './components/my-comp/my-comp.component';
import { counterReducer } from './components/my-comp/store/counter.reducer';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { scoreboardReducer } from './components/scoreboard/store/scoreboard.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forRoot({ game: scoreboardReducer }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
