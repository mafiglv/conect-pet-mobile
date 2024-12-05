import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appExpandableText]'
})
export class ExpandableTextDirective implements AfterViewInit {
  @Input() maxLength: number = 100; // Número máximo de caracteres visíveis inicialmente
  private originalText: string = ''; // Inicializa com string vazia
  private expanded: boolean = false;
  private toggleLink!: HTMLElement; // Usando `!` para garantir que será inicializado depois

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.originalText = this.el.nativeElement.textContent.trim();

    if (this.originalText.length > this.maxLength) {
      this.createToggleLink();
      this.updateText();
    }
  }

  private createToggleLink() {
    this.toggleLink = this.renderer.createElement('a');
    this.renderer.setStyle(this.toggleLink, 'color', '#0078d4');
    this.renderer.setStyle(this.toggleLink, 'cursor', 'pointer');
    this.renderer.listen(this.toggleLink, 'click', () => this.toggleText());

    this.el.nativeElement.appendChild(this.toggleLink);
  }

  private updateText() {
    const displayText = this.expanded ? this.originalText : this.originalText.substring(0, this.maxLength) + '...';
    this.renderer.setProperty(this.el.nativeElement, 'textContent', displayText);
    this.renderer.appendChild(this.el.nativeElement, this.toggleLink);

    const linkText = this.expanded ? ' Leia Menos' : ' Leia Mais';
    this.renderer.setProperty(this.toggleLink, 'textContent', linkText);
  }

  private toggleText() {
    this.expanded = !this.expanded;
    this.updateText();
  }
}
