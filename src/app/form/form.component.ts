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
  quoted= new Quotes ('','','', '', new Date(), 0, 0);
  @Output() add = new EventEmitter <Quotes>();
  
  

  addedQuote(){
    this.add.emit(this.quoted);
    this.quoted = new Quotes ('','','','',new Date(), 0,0);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
