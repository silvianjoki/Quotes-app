import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.background = '';
    
  }

  // private textDeco(action:string){
  //   this.elem.nativeElement.style.color=action;
  // }
  
}
