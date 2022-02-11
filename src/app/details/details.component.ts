import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { HighlightQuoteDirective } from '../highlight-quote.directive';
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
    new Quotes ( 'Hillary','Technology',  'Technology is best when it brings people together.', 'Matt Mullenweg', new Date ('2022, 2, 10'), 0, 0),
    new Quotes ( 'Aimee','Tech', 'It has become appallingly obvious that our technology has exceeded our humanity.', 'Albert Einstein', new Date ('2022, 2, 9'), 0, 0),
    new Quotes ( 'Sam', 'Life', 'The purpose of our lives is to be happy.', 'Dalai Lama', new Date ('2022, 2, 9'), 0, 0),
    new Quotes ( 'Grace','Purpose', 'Get busy living or get busy dying.', 'Stephen King', new Date('2022, 2, 10'), 0, 0),
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
  quoteDelete (isRead:any){
    let quoteDelete = confirm ('You really wanna let go?')
    if (quoteDelete) {
      this.quotes.splice (index, 1)
    }
  }

  // display info
    displayInfo(index:any){
      this.quotes[index].showInfo = !this.quotes [index].showInfo;
    }
  }

  // highlightHighest() {
  //   let quotesLikes = []
  //   let hightestLikes: number 
  //   for (let j = 0; j < this.quotes.length; j++) {
  //     quotesLikes.push ( this.quotes[j].likes)
  //   }
    

  // highlightHighest (); void {
  //   let likes: number = Math.max.apply(Maths, this, getQuotes())
  // }

  // get sortQuotes(){
  //   return this.quotes;
  // }


  //   quotesLikes.sort (function (a,b){
  //     return b - a
  //   })
  //   hightestLikes = quotesLikes [0]
  //   return hightestLikes;
  // }

  // get sortQuotes () {
  //   return this.quotes.sort ((a, b) => {
  //     return <any> new Date (b.datePosted) - <any> new Date (a.datePosted);
  //   });
  // }

function highlightHighest() {
  throw new Error('Function not implemented.');
}

function sortQuotes() {
  throw new Error('Function not implemented.');
}

function $index($index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

