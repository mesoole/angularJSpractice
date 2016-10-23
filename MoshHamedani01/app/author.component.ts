import { Component } from '@angular/core'
import { AuthorService } from './author.service'

@Component({
    selector: "author-selector",
    template: `
    <h2>{{title}}</h2>
    <ul>
    <li *ngFor="let author of authors">{{author}}</li>
    </ul>`,
    providers: [ AuthorService]
})

export class AuthorComponent {
    title = "this is from author Component";
    // authors = ["author1","author2","author1"];
    authors;
    constructor(authorService:AuthorService){
        this.authors = authorService.getAuthor();
    }
}