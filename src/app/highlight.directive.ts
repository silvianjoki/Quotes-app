import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

@HostListener('click') onClick() {
  this.voteColor("rgb(93, 228, 255)")
}

private voteColor(action:string) {
  this.elem.nativeElement.style.color = action;
}

}
