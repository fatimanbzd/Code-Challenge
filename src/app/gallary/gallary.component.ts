import {Component, DestroyRef, OnInit} from '@angular/core';
import {GallaryService} from '../gallary.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {IGalleryResponseModel} from '../gallary-response.model';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    ItemComponent
  ],
  providers: [GallaryService],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.scss'
})
export class GallaryComponent implements OnInit {

  galleries: IGalleryResponseModel[] = [];

  constructor(private gallaryService: GallaryService,
              private destroyRef: DestroyRef) {
  }

  ngOnInit() {
    this.gallaryService.galleries()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data =>
        this.galleries = data);

    this.googleAd(121000000);
  }

  googleAd(value: number) {
    let newValue = value / 1000000;
    let karmozd = 0;
    if (newValue >= 50) {
      karmozd += 1.5;
      newValue = newValue - 50;
    }
    if (newValue >= 40) {
        karmozd += 1;
      newValue -= 40;
    }
    else {
      karmozd += newValue *0.5;
    }

    if (newValue >= 30) {
      let count =  Math.round(newValue / 30);
      newValue -= (count * 30);
      karmozd += count * 0.2;
      if (newValue > 0)
        karmozd += 0.05
    }

    console.log(`karmozd is ${karmozd * 1000000}`);
  }
}
