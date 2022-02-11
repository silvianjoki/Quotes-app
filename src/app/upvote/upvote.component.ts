import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  
  quoted= new Quotes('','','','', new Date (), 0, 0);

  @Input()
  quote!: Quotes;

  upvote(){
    this.quoted.likes+=1;
  }
  downvote(){
    this.quoted.dislikes+=1;

  }
  @Output () isRead = new EventEmitter <boolean> ();
    deleteQuote (read:boolean) {
      this.isRead.emit (read)
    }
  


  constructor() { }

  ngOnInit(): void {
  }

}
