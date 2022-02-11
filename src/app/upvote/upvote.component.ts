import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  
  quotes= new Quotes('','','','', new Date (), 0, 0);

  @Output() deleteQuote = new EventEmitter <Quotes> ()
  @Input()
  quote!: Quotes;

  upvote(){
    this.quotes.likes+=1;
  }
  downvote(){
    this.quotes.dislikes+=1;

  }
  Delete (deleteQuote: boolean) {
    this.deleteQuote.emit (deleteQuote);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
