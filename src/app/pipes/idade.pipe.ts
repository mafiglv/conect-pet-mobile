import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade',
})
export class IdadePipe implements PipeTransform {
  transform(dataNascimento: string): string {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return `${idade} anos`;
  }
}
