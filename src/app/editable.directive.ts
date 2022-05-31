import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEditable]'
})
export class EditableDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.editable = false;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.editable = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.editable = false;
  }

}
