import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

   constructor(private http: HttpClient) {}

   getApiData() {
    let url = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';
    return this.http.get(url);
   }

}