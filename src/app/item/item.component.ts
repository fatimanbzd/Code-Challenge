import {Component, Input, OnChanges} from '@angular/core';
import {IGalleryResponseModel} from '../gallary-response.model';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {PersianDatePipe} from '../persian-date.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe,
    PersianDatePipe
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnChanges {
  @Input() item!: IGalleryResponseModel;

  constructor() {

  }

  ngOnChanges() {

  }
}
