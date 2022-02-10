import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  quots = new Quotes('','','','', new Date (), 0, 0);
  @Output() deleteQuote = new EventEmitter <Quotes> ()
  quoteDelete (){
    this.deleteQuote.emit(this.quots)
  }
  
  
  upvote(){
    this.quots.likes+=1;
  }
  downvote(){
    this.quots.dislikes+=1;

  }


  constructor() { }

  ngOnInit(): void {
  }

}
