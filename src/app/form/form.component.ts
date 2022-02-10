import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  quoted= new Quotes ('Silvia','Rest','Take some rest', 'Silvie', new Date(), 0, 0);
  @Output() add = new EventEmitter < Quotes > ();
  name !:string;
  title !:string;
  quote !:string;
  author !: string;

  addQuote(){
    this.name ='';
    this.title = '';
    this.quote = '';
    this.author = '';
    this.add.emit(this.quoted);
    // this.quoted = new Quote('','','','', new Date(),0,0);
  }

//   newQuote = new Quotes ('','','',);
// @Output() addQuote = new EventEmitter < Quotes > ();
//   name !:string;
//   title !:string;
//   quote !:string;
//   author !: string;

//   submitQuote(){
//     this.add.emit(this.newQuote)
//   // }

  constructor() { }

  ngOnInit(): void {
  }

}
