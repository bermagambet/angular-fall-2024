import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight = ''

  // HostListener - function which triggers on given event
  // event - first agument - mouseenter
  // @HostListener('mouseenter') onEnter = () => {
  //   this.el.nativeElement.style.color = 'yellow'
  // }

  @HostListener('mouseleave') onLeave = () => {
    this.el.nativeElement.style.color = 'green'
  }

  @HostListener('click') onClick = () => {
    this.el.nativeElement.style.color = this.appHighlight
  }

  // class constructor -> el -> element reference -> element in DOM itself
  constructor(private el: ElementRef) { 
    // can change attributes
    // can use methods
    this.el.nativeElement.style.color = 'red'
  }

}
