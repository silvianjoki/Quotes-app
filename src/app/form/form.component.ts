import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quotes ('','','',new Date(),0,0);
@Output() addQuote = new EventEmitter < Quotes > ();
  name !:string;
  title !:string;
  quote !:string;
  author !: string;

  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
