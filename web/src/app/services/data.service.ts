import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = `${environment.apiUrl}blogs/`;

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBlog(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}`);
  }

  getMyBlogs(id: number): Observable<any> {
    return this.http.get(this.apiUrl + 'all/' + id);
  }

  createBlog(blog: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.apiUrl, blog, { headers });
  }

  updateBlog(id: number, blog: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(`${this.apiUrl}/${id}`, blog, { headers });
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  likeBlog(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/like`, {});
  }
}
