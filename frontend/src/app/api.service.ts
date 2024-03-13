import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BACKEND_URL = "https://levenshtein-comparator-backend.onrender.com";

  constructor(private http: HttpClient) { }

  fetchLevenshtein(a: string, b: string) {
    type LevenshteinResponse = {
      distance: number;
    };

    return new Promise<LevenshteinResponse>((resolve, reject) => {
      this.http.get<LevenshteinResponse>(`${this.BACKEND_URL}/levenshtein?a=${a}&b=${b}`)
        .subscribe({ next: resolve, error: reject });
    });
  }
}

