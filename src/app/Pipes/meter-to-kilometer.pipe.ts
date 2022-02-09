import { Pipe, PipeTransform } from '@angular/core';
import { HospitalListItem } from '../Components/models';

@Pipe({
  name: 'meterToKilometer'
})
export class MeterToKilometerPipe implements PipeTransform {

  transform(meter: number, ...args: unknown[]): number {
    let meterToKm = 1000;
    return meter / meterToKm;
  }

}


@Pipe({
  name: 'convertTime'
})
export class ConvertTimePtBr implements PipeTransform {

  transform(hr: string, ...args: unknown[]): string {
    let timezone = 3;
    // debugger
    const val = hr.split(':');
    const hrModified = (+val[0] - timezone) + ':' + val[1];
    return hrModified;
  }

}


@Pipe({
  name: "sortListItem"
})
export class ArraySortPipe implements PipeTransform {
  transform(array: HospitalListItem[], field: string): HospitalListItem[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
