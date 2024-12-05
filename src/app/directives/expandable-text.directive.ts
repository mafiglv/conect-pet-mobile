import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appExpandableText]'
})
export class ExpandableTextDirective implements OnInit {
  @Input('appExpandableText') maxLength: number = 100; // Tamanho máximo inicial para o texto exibido
  private originalText: string = '';
  private isExpanded: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.originalText = this.el.nativeElement.innerText;
    this.updateText();
  }

  @HostListener('click')
  onClick(): void {
    this.toggleText();
  }

  private updateText(): void {
    if (this.isExpanded || this.originalText.length <= this.maxLength) {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.originalText);
    } else {
      const truncatedText = this.originalText.substring(0, this.maxLength) + '...';
      this.renderer.setProperty(this.el.nativeElement, 'innerText', truncatedText);
    }

    this.addToggleLink();
  }

  private toggleText(): void {
    this.isExpanded = !this.isExpanded;
    this.updateText();
  }

  private addToggleLink(): void {
    let toggleLink = this.el.nativeElement.querySelector('.toggle-link');
    if (!toggleLink) {
      toggleLink = this.renderer.createElement('span');
      this.renderer.addClass(toggleLink, 'toggle-link');
      this.renderer.listen(toggleLink, 'click', (event: Event) => {
        event.stopPropagation();
        this.toggleText();
      });
      this.renderer.appendChild(this.el.nativeElement, toggleLink);
    }
    toggleLink.innerText = this.isExpanded ? ' Leia menos' : ' Leia mais';
  }
}
