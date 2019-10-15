import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../model/repository';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  url = 'https://github-trending-api.now.sh';

  constructor(private http: HttpClient) {
  }

  getTrendingRepos(language: string, since: string): Observable<Repository> {
    return this.http.get<Repository>(`${this.url}/repositories?language=${language}&since=${since}`);
  }

  getLanguages(): Observable<Language> {
    return this.http.get<Language>(`${this.url}/languages`);
  }
}
