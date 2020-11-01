import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    const val = value.split(' ');
    return val.map(item => {
      return item[0].toUpperCase() + item.slice(1).toLowerCase();
    }).join(' ');
  }
}
