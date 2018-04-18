import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';

@Injectable()
export class HackerNewsService {
    constructor(private http: HttpClient) {}

    private apiRoot: String = 'https://node-hnapi.herokuapp.com';

    getNews(page: Number): Observable<any> {
          return this.http
            .get(`${this.apiRoot}/news?page=${page}`);
    }

    getFeed(type: string, page: Number): Observable<any> {
        return this.http
          .get(`${this.apiRoot}/${type}?page=${page}`);
  }
}
