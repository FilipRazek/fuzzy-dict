import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
