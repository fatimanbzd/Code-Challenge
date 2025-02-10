import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGalleryResponseModel} from './gallary-response.model';

@Injectable({
  providedIn: 'root'
})
export class GallaryService {

  constructor(private http: HttpClient) {
  }

  galleries(): Observable<IGalleryResponseModel[]> {
    return this.http.get<IGalleryResponseModel[]>('https://cdn.boghrat.com/api/codeChallenge/angular');
  }

}
