import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.background = 'rgb (139, 231, 250)'
  }
  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }
  
}
