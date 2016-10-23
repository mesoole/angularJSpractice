import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component'
import { AuthorComponent } from './author.component'
import { AutoGrowDirective } from './auto-grow.directive'
import { FavoriteComponent } from './favorite.component'
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CourseComponent, AuthorComponent, AutoGrowDirective,FavoriteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }