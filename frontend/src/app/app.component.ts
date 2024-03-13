import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    const data = await this.apiService.fetchLevenshtein("kitten", "sitting");
    console.log(data);
  }
}
