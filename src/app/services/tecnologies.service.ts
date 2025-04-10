import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GroupedTechnology } from '../models/interfaces/technology-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TecnologiesService {
  private apiUrl = environment.apiUrl;
  private module = 'Technology';
  constructor(private http: HttpClient) {}

  getTechnologies(personId: number): Observable<GroupedTechnology[]> {
    return this.http.get<GroupedTechnology[]>(
      `${this.apiUrl}/${this.module}/${personId}`
    );
  }
}
