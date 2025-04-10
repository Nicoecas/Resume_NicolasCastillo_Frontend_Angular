import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/interfaces/education-model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiUrl = environment.apiUrl;
  private module = 'Education';
  constructor(private http: HttpClient) {}

  getEducations(personId: number): Observable<Education[]> {
    return this.http.get<Education[]>(
      `${this.apiUrl}/${this.module}/${personId}`
    );
  }
}
