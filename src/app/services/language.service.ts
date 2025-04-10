import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../models/interfaces/language-model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private apiUrl = environment.apiUrl;
  private module = 'Language';
  constructor(private http: HttpClient) {}

  getLanguages(personId: number): Observable<Language[]> {
    return this.http.get<Language[]>(
      `${this.apiUrl}/${this.module}/${personId}`
    );
  }
}
