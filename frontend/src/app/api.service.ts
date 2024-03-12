import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  fetchLevenshtein() {
    type Response = {
      value: number;
    }
    return this.http.get<Response>("https://fuzzy-dict-backend.onrender.com/levenshtein?a=hell&b=hello")
  }
}

