import { Component, Input } from '@angular/core';
import { AnimalInterface } from '../../interfaces/animal.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AnimalFilterComponent } from '../animal-filter/animal-filter.component';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, AnimalFilterComponent, MatTableModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss',
})
export class AnimalListComponent {
  @Input()
  set animals(animals: AnimalInterface[]) {
    this.dataSource = animals;
  }

  dataSource!: AnimalInterface[];

  columns = [
    {
      columnDef: 'name',
      header: 'name',
      cell: (element: AnimalInterface) => `${element.name}`,
    },
    {
      columnDef: 'age',
      header: 'age',
      cell: (element: AnimalInterface) => `${element.age}`,
    },
    {
      columnDef: 'breed',
      header: 'breed',
      cell: (element: AnimalInterface) => `${element.breed}`,
    },
  ];

  displayedColumns: string[] = this.columns.map((column) => column.columnDef);

  applyFilter(filter: { name: string; breed: string }) {
    this.dataSource = this.dataSource.filter((animal) => {
      return animal.name === filter.name || animal.breed === filter.breed;
    });
  }
}
