import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appListaVazia]',
})
export class ListaVaziaDirective {
  @Input() set appListaVazia(lista: any[]) {
    if (!lista || lista.length === 0) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}
