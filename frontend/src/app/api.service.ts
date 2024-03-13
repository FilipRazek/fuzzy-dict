import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BACKEND_URL = "https://fuzzy-dict-backend.onrender.com";

  constructor(private http: HttpClient) { }

  fetchLevenshtein() {
    type LevenshteinResponse = {
      value: number;
    }
    return new Promise<LevenshteinResponse>((resolve, reject) => {
      this.http.get<LevenshteinResponse>(`${this.BACKEND_URL}/levenshtein?a=hell&b=hello`)
        .subscribe({ next: resolve, error: reject });
    });
  }
}

