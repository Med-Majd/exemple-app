import { Component } from '@angular/core';
import { AnimalInterface } from '../../interfaces/animal.interface';
import { AnimalListComponent } from '../../components/animal-list/animal-list.component';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [AnimalListComponent],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss',
})
export class AnimalComponent {
  animaux: AnimalInterface[] = [
    {
      age: 10,
      name: 'aaa',
      breed: '111',
    },
    {
      age: 20,
      name: 'bbb',
      breed: '222',
    },
    {
      age: 30,
      name: 'ccc',
      breed: '333',
    },
  ];
}
