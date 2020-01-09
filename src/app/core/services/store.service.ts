import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PageResponse} from 'src/app/core/models/interfaces/PageResponse';
import {UserResponse} from 'src/app/core/models/interfaces/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private pagesStore: Map<number, PageResponse> = new Map<number, PageResponse>();
  private userStore: Map<number, UserResponse> = new Map<number, UserResponse>();

  constructor() {
  }

  public getPage(page: number, getObservableFn: (page) => Observable<PageResponse>): Observable<PageResponse> {
    const storeValue = this.pagesStore.get(page);
    if (storeValue) {
      return of(storeValue);
    }
    return getObservableFn(page).pipe(tap(value => this.pagesStore.set(page, value)));
  }

  public getUser(userId: number, getObservableFn: (userId) => Observable<UserResponse>): Observable<UserResponse> {
    const storeValue = this.userStore.get(userId);
    if (storeValue) {
      return of(storeValue);
    }
    return getObservableFn(userId).pipe(tap(value => this.userStore.set(userId, value)));
  }
}
