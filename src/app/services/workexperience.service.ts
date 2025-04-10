import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkExperience } from '../models/interfaces/workexperience-model';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  private apiUrl = environment.apiUrl;
  private module = 'WorkExperience';
  constructor(private http: HttpClient) {}

  getWorkExperiences(personId: number): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(
      `${this.apiUrl}/${this.module}/${personId}`
    );
  }
}
