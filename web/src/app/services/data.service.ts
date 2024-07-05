import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getMyBlogs(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post(this.apiUrl, blog);
  }

  updateBlog(id: number, blog: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, blog);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  likeBlog(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/like`, {});
  }
}
