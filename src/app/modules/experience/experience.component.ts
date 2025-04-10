import { Component } from '@angular/core';
import { WorkExperience } from '../../models/interfaces/workexperience-model';
import { WorkExperienceService } from '../../services/workexperience.service';
import { CommonModule } from '@angular/common';
import { FormatDateToDDMMYYYY } from '../../shared/formatDate';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  workExperiences: WorkExperience[] = [];
  expandedCategories: { [key: string]: boolean } = {};

  constructor(private readonly _workExperienceService: WorkExperienceService) {}

  ngOnInit(): void {
    this._workExperienceService.getWorkExperiences(1).subscribe((data) => {
      this.workExperiences = data;
    });
  }

  toggleCategory(id: number): void {
    this.expandedCategories[id] = !this.expandedCategories[id];
  }

  formatDate(date?: Date | string | null): string {
    return FormatDateToDDMMYYYY(date);
  }
}
