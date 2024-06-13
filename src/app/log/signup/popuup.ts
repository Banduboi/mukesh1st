import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[click]',
  standalone: true
})
export class TogglePopupDirective {
  private isVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  clickHandler() {
    this.el.nativeElement.style.color = 'red';
    this.togglePopup();
  }

  private togglePopup() {
    const popup = this.el.nativeElement.nextElementSibling;
    if (popup) {
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        this.renderer.setStyle(popup, 'display', 'block');
      } else {
        this.renderer.setStyle(popup, 'display', 'none');
      }
    }
  }
}
