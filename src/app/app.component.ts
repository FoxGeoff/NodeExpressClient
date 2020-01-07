import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { Cat } from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NodeExpressClient';
  cats: Cat[] = [] ;

  constructor(private service: CatService) { }

  ngOnInit() {
    this.getCats();
    console.log('Number of cats: ' + this.cats.values.length);
    }

  getCats(): void {
    this.service.getAllCats()
    .subscribe(cats => this.cats = cats);
  }
}
