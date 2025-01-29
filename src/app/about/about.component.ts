import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isVisible = false;
  ngOnInit(): void {
    const hash = window.location.hash;
    if (hash === '#/about') {
      this.isVisible = true; // Direct navigation shows the section immediately
    }
  }  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = document.querySelector('.about-container');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isInView) {
        this.isVisible = true;
      }
    }
  }
}
