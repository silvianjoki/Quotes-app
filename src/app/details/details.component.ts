import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
      
  }

  title = 'Review Amazing Quotes';
  quotes:Quotes[] = [
    new Quotes ( 'Hillary',  'Technology is best when it brings people together.', 'Matt Mullenweg'),
    new Quotes ( 'Aimee', 'It has become appallingly obvious that our technology has exceeded our humanity.', 'Albert Einstein'),
    new Quotes ( 'Sam', 'The purpose of our lives is to be happy.', 'Dalai Lama'),
    new Quotes ( 'Grace', 'Get busy living or get busy dying.', 'Stephen King'),
  ];
  
  
  // get dates posted
  get sortQuotes(){
    return this.quotes.sort((a, b) => {
      return <any > new Date(b.datePosted) - <any> new Date(a.datePosted);
    });
  }
  // add new quote


    addedQuote(quote:any){
      let arraysize = this.quotes.length;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
  
    // delete quote 
  quoteDelete (isRead:any, index:any){
    if (isRead) {
      let toDelete = confirm("You really wanna let go?")
      if(toDelete){
        this.quotes.splice (index,1);
      }
    }
  }
    displayInfo(index:any){
      this.quotes[index].showInfo = !this.quotes [index].showInfo;
    }
  }

