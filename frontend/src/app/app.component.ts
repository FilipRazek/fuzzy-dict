import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firstWord = "";
  secondWord = "";
  computedDistance = 0;

  constructor(private apiService: ApiService) { }

  recomputeDistance() {
    this.apiService.fetchLevenshtein(this.firstWord, this.secondWord).then(({ distance }) => {
      this.computedDistance = distance;
    });
  }
}
