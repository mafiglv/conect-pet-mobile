import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderFooterComponent } from '../components/header-footer/header-footer.component';
import { MonetaryPipe } from '../pipes/monetary.pipe';
import { ExpandableTextDirective } from '../directives/expandable-text.directive';
import { FiltroPetsPipe } from '../pipes/filtro-pets.pipe';
import { AlternarExibicaoDirective } from '../directives/alternar-exibicao.directive';

@NgModule({
  declarations: [
    HeaderFooterComponent,
    MonetaryPipe,
    ExpandableTextDirective,
    FiltroPetsPipe,
    AlternarExibicaoDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderFooterComponent,
    MonetaryPipe,
    ExpandableTextDirective,
    FiltroPetsPipe,
    AlternarExibicaoDirective
  ]
})
export class SharedModule {}
