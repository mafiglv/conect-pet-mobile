import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appExpandableText]'
})
export class ExpandableTextDirective implements OnInit {
  @Input('appExpandableText') maxHeight: number = 100; // Altura máxima antes de se tornar expansível

  private expanded: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Configura o estilo inicial
    this.renderer.setStyle(this.el.nativeElement, 'max-height', `${this.maxHeight}px`);
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click') onClick() {
    if (this.expanded) {
      // Contrai o texto
      this.renderer.setStyle(this.el.nativeElement, 'max-height', `${this.maxHeight}px`);
    } else {
      // Expande o texto
      this.renderer.setStyle(this.el.nativeElement, 'max-height', 'none');
    }
    this.expanded = !this.expanded;
  }
}
