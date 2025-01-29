import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.skill-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class SkillsComponent {
  technicalSkills = [
    {
      name: 'Programming Languages',
      skills: ['Java', 'Python', 'SQL', 'C'],
      icon: 'assets/icons/programming.png',
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        'Spring Suite',
        'Hibernate',
        'Node.js',
        'ReactJS',
        'Angular',
        'D3.js',
      ],
      icon: 'assets/icons/framework.png',
    },
    {
      name: 'API Development',
      skills: ['RESTful API', 'JSON', 'SOAP', 'Postman'],
      icon: 'assets/icons/API.png',
    },
    {
      name: 'Database Management',
      skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'ORM Tools'],
      icon: 'assets/icons/database.png',
    },
    {
      name: 'Big Data & Analytics',
      skills: ['Hadoop', 'Spark', 'PySpark', 'Tableau'],
      icon: 'assets/icons/Bigdata&Analytics.png',
    },
    {
      name: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'GCP'],
      icon: 'assets/icons/cloud.png',
    },
    {
      name: 'DevOps & Tools',
      skills: ['Jenkins', 'Docker', 'Kubernetes', 'Git'],
      icon: 'assets/icons/devop.png',
    },
  ];

  softSkills = [
    {
      skills: [
        'Team Collaboration',
        'Agile Methodologies',
        'Communication',
        'Time Management',
        'Problem Solving',
      ],
    },
  ];
}