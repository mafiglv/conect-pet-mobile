import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderFooterComponent } from '../components/header-footer/header-footer.component';

@NgModule({
  declarations: [HeaderFooterComponent],
  imports: [
    CommonModule,
    IonicModule   ],
  exports: [HeaderFooterComponent] // Exporta o componente para ser reutilizado
})
export class SharedModule {}
