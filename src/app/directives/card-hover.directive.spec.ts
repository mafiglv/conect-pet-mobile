import { CardHoverDirective } from './card-hover.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('CardHoverDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useValue: new ElementRef(document.createElement('div')) },
        Renderer2
      ]
    }).createComponent(CardHoverDirective);

    elementRef = fixture.injector.get(ElementRef);
    renderer = fixture.injector.get(Renderer2);
  });

  it('should create an instance', () => {
    const directive = new CardHoverDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
