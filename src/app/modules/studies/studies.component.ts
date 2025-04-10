import { Component } from '@angular/core';
import { Education } from '../../models/interfaces/education-model';
import { EducationService } from '../../services/education.service';
import { Certification } from '../../models/interfaces/certification-model';
import { CertificationService } from '../../services/certification.service';
import { CommonModule } from '@angular/common';
import { Language } from '../../models/interfaces/language-model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-studies',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css',
})
export class StudiesComponent {
  educations: Education[] = [];
  certifications: Certification[] = [];
  languages: Language[] = [];

  constructor(
    private readonly _educationService: EducationService,
    private readonly _certificationService: CertificationService,
    private readonly _languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this._educationService.getEducations(1).subscribe((data) => {
      this.educations = data;
    });
    this._certificationService.getCertifications(1).subscribe((data) => {
      this.certifications = data;
    });
    this._languageService.getLanguages(1).subscribe((data) => {
      this.languages = data;
    });
  }

  endData(finalized: boolean, endDate?: number | null): string {
    if (!finalized && endDate == null) {
      return 'Abandonado';
    } else if (!finalized && endDate != null) {
      return 'En Curso';
    }
    return endDate!.toString();
  }
}
