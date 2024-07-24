import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './animal-filter.component.html',
  styleUrl: './animal-filter.component.scss',
})
export class AnimalFilterComponent {
  @Output() filterValues = new EventEmitter<{
    name: string;
    breed: string;
  }>();

  test = 'animal filter';
  name = '';
  breed = '';

  submitFilter() {
    this.filterValues.emit({ name: this.name, breed: this.breed });
  }
}
