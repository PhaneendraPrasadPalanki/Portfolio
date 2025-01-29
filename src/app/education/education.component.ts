import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList = [
    {
      university: 'University of North Texas',
      degree: "Master's in Computer Science",
      major: 'Computer Science',
      gpa: '3.97',
      years: 'Jan 2023 - Dec 2024',
      logo: 'assets/logos/unt-logo.png',
      courses: [
        'Advanced Algorithms',
        'Machine Learning',
        'Distributed Systems',
        'Database Management'
      ]
    },
    {
      university: 'CMR Institute of Technology',
      degree: "Bachelor's in Computer Science and Engineering",
      major: 'Computer Science and Engineering',
      gpa: '3.5',
      years: 'July 2016 - June 2020',
      logo: 'assets/logos/cmritlogo.png',
      courses: [
        'Data Structures',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering'
      ]
    }
  ];
}
