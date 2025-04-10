import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certification } from '../models/interfaces/certification-model';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private apiUrl = environment.apiUrl;
  private module = 'Certification';
  constructor(private http: HttpClient) {}

  getCertifications(personId: number): Observable<Certification[]> {
    return this.http.get<Certification[]>(
      `${this.apiUrl}/${this.module}/${personId}`
    );
  }
}
