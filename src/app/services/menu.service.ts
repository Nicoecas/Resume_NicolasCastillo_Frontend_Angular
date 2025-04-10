import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isCollapsedSubject = new BehaviorSubject<boolean>(true);
  isCollapsed$ = this.isCollapsedSubject.asObservable();

  toggleCollapse() {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }
}