import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  projectsList = [
    {
      name: 'Car Pooling Application',
      description: 'Insider Full Stack Web Application for Car Pooling Requests at Virtusa.',
      year: '2020',
      techStack: 'Angular, Spring Boot, MySQL, REST API',
      contribution: 'Developed backend REST APIs, optimized database queries, and integrated authentication system.',
      github: ''
    },
    {
      name: 'Dump Master',
      description: 'AI-powered application for unlimited question generation for assessments.',
      year: '2021',
      techStack: 'React, Node.js, PostgreSQL, AI Tools',
      contribution: 'Built machine learning models for question generation and implemented the frontend UI.',
      github: ''
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio showcasing professional experience and projects.',
      year: '2025',
      techStack: 'Angular, Spring Boot, Bootstrap',
      contribution: 'Built a Single Page Application based on Angular 17 that displays my professional portfolio.',
      github: ''
    },
    {
      name: 'QuickHealz',
      description: ' A Web application that establishes online communication between pharmacy, patient and doctor.',
      year: '2023',
      techStack: 'Python, React, SQLite',
      contribution: 'Developed the patient dashboard, integrated authentication system and backend REST APIs',
      githubUrl: 'https://github.com/sairamsreejith0/QuickHealz'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.projectsList.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.projectsList.length) % this.projectsList.length;
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }
}