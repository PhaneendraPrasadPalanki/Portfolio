import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      title: 'Full Stack Developer',
      company: 'EZ Trainings and Technologies Pvt. Ltd.',
      location: 'Hyderabad, Telangana',
      LinkedIn: 'https://www.linkedin.com/company/ezts/about/',
      period: 'August 2021 – December 2022',
      responsibilities: [
        'Designed and maintained full-stack web applications with Java, Spring Boot, Angular, and ReactJS, improving performance by 40%.',
        'Boosted user engagement by 25% through the development of CLOUDLABS by REINPREP.',
        'Enhanced data exchange speed by 30% with optimized RESTful APIs.',
        'Mentored 15+ junior developers, enhancing team productivity by 20%.',
        'Automated workflows using Jenkins, Maven, and Git, increasing deployment efficiency.',
      ],
      isVisible: false,
    },
    {
      title: 'Associate Engineer – Technology (Java)',
      company: 'Virtusa Consulting Services Pvt. Ltd.',
      location: 'Hyderabad, Telangana',
      LinkedIn: 'https://www.linkedin.com/company/virtusa/posts/?feedView=all',
      period: 'October 2020 – August 2021',
      responsibilities: [
        'Delivered enterprise-level Java full-stack applications using Spring Boot and Angular, enhancing scalability and performance by 40%.',
        'Designed and developed RESTful APIs, speeding up integration by 50%.',
        'Built core application modules, increasing development efficiency by 30%.',
        'Implemented CI/CD pipelines with Jenkins, Docker, and Git, cutting deployment times by 60%.',
        'Improved application security with Spring Security, preventing unauthorized access.',
      ],
      isVisible: false,
    },
  ];

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkVisibility();
  }

  checkVisibility(): void {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isInView) {
        this.experiences[index].isVisible = true;
      }
    });
  }
}
