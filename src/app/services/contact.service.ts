import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SendMail } from '../models/interfaces/contact-model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = environment.apiUrl;
  private module = 'Contact';
  constructor(private http: HttpClient) {}

  sendMail(mail: SendMail): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${this.module}`, mail).pipe(
      catchError((error) => {
        console.error('Error al enviar el correo:', error);
        return throwError(() => new Error('Error al enviar el correo'));
      })
    );
  }
}
