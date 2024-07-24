import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalComponent } from './features/animal/pages/animal/animal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'exemple-app';
}
