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

    const splittedHourFromThePeriodsOfTheDay = hr.split(' ');
    const splittedHourFromMinute = splittedHourFromThePeriodsOfTheDay[0].split(':');
    const dateTimezonePTBR: Date = new Date(`2022-01-01T${splittedHourFromThePeriodsOfTheDay[0]}:00`);
    const returnFormattedTimeString = new Date(dateTimezonePTBR.setUTCHours(+splittedHourFromMinute[0])).toTimeString().split(' ')[0];
    return `${returnFormattedTimeString} ${splittedHourFromThePeriodsOfTheDay[1]}`

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
