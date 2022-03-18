import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }
    
    router(url: string, id?: number) {
        let route = url;
        if (id) {
          route = `${url}/${id}`;
        }
        return route;
    }

    get<T>(url: string, id?: number): Observable<T> {
        const _url = this.router(url, id);
        return this.http.get<T>(_url);
    }

    put<T>(url: string, body: object, id?: number): Observable<T> {
        const _url = this.router(url, id);
        return this.http.put<T>(_url, JSON.stringify(body));
    }

    post<T>(url: string, body: object): Observable<T> {
        const _url = this.router(url);
        return this.http.post<T>(_url, JSON.stringify(body));
    }

    delete<T>(url: string, id: number): Observable<T> {
        const _url = this.router(url, id);
        return this.http.delete<T>(_url);
    }
}
