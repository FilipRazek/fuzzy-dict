import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatInputModule, MatProgressSpinnerModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  firstWord = "";
  secondWord = "";
  computedDistance = 0;
  loading = false;

  constructor(private apiService: ApiService) { }

  recomputeDistance() {
    this.loading = true;
    this.apiService.fetchLevenshtein(this.firstWord, this.secondWord).then(({ distance }) => {
      this.computedDistance = distance;
      this.loading = false;
    });
  }
}
