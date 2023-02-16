import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(duration: number, args?: any): string {
    let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60),
        hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

  return `${hours}:${minutes} hour${hours >= 2 ? 's' : ''}`;
  }
}