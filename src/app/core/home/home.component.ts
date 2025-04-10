import { Component, OnInit } from '@angular/core';
import { profileMain } from '../../models/interfaces/profile-model';
import { ProfileService } from '../../services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  logoUrl = 'assets/images/profile_image.jpg';
  paragraphs: string[] = [];
  profileMain: profileMain = {
    title: '',
    name: '',
    surname: '',
    descriptionCard: '',
  };

  constructor(private readonly _profileService_: ProfileService) {}

  ngOnInit(): void {
    this._profileService_.getProfileMain(1).subscribe((data) => {
      this.profileMain = data;
      this.paragraphs = data.descriptionCard
        .split(/\r?\n/)
        .filter((paragraph) => paragraph.trim() !== '');
    });
  }
}
