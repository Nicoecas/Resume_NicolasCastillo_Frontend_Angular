import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GroupedTechnology } from '../../models/interfaces/technology-model';
import { TecnologiesService } from '../../services/tecnologies.service';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent implements OnInit {
  groupedTechnologies: GroupedTechnology[] = [];
  expandedCategories: { [key: string]: boolean } = {};

  constructor(private readonly _tecnologiesService: TecnologiesService) {}

  ngOnInit(): void {
    this._tecnologiesService.getTechnologies(1).subscribe((data) => {
      this.groupedTechnologies = data;
    });
  }

  toggleCategory(title: string): void {
    this.expandedCategories[title] = !this.expandedCategories[title];
  }
}
