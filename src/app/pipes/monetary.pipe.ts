import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monetary'
})
export class MonetaryPipe implements PipeTransform {
  transform(value: number | string, currency: string = 'BRL', locale: string = 'pt-BR'): string {
    if (value === null || value === undefined) {
      return '-'; // Retorna um traço caso o valor seja nulo ou indefinido
    }

    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numericValue)) {
      return '-'; // Retorna um traço caso não seja um número válido
    }

    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(numericValue);
  }
}
