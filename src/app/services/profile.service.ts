import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profileMain } from '../models/interfaces/profile-model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = environment.apiUrl;
  private module = 'Person';
  constructor(private http: HttpClient) {}

  getProfileMain(personId: number): Observable<profileMain> {
    return this.http.get<profileMain>(
      `${this.apiUrl}/${this.module}/${personId}`
    );
  }
}
