import { Pipe, PipeTransform } from '@angular/core';
import * as jalaali from 'jalaali-js';

@Pipe({
  name: 'persianDate',
  standalone: true,
  pure:true
})
export class PersianDatePipe implements PipeTransform {
  transform(value: string | Date, format: 'full' | 'short' = 'full'): string {
    if (!value) return '';

    const date = new Date(value);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const jDate = jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());


    const persianMonths = [
      'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
      'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];

    if (format === 'short') {
      return `${jDate.jy}/${jDate.jm}/${jDate.jd}`;
    } else {
      return `${jDate.jd} ${persianMonths[jDate.jm - 1]} ${jDate.jy}`;
    }
  }

}

