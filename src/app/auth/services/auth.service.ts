import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users/save'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  login(username: string, email:string,password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username,email, password });
  }

}
