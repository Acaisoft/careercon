import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
  name: 'sortByBool',
  pure: false
})
@Injectable()
export class SortByBool implements PipeTransform{
  transform(items: any[], arg: string): any {
    return items.sort((item1, item2): number => this.compareByBool(item1, item2, arg));
  };

  compareByBool(item1, item2, fieldName){
    return (item1[fieldName] === item2[fieldName] ? 0 : (item1[fieldName] ? -1 : 1));
  }
}
