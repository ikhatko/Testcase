import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PageResponse} from 'src/app/core/models/interfaces/PageResponse';
import {UserResponse} from 'src/app/core/models/interfaces/UserResponse';
import {apiEndpoints} from 'src/app/core/services/api.endpoints';
import {StoreService} from 'src/app/core/services/store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private storeService: StoreService) {
  }

  public getUsersPage(page: number = 1): Observable<PageResponse> {
    return this.storeService.getPage(page, () => this.getUsersPageApi(page));
  }

  private getUsersPageApi(page: number): Observable<PageResponse> {
    return this.http.get<PageResponse>(`${apiEndpoints.data}${page}.json`);
  }
}
