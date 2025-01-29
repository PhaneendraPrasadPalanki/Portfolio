import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  greeting = '';

  ngOnInit() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good Morning! 🌞';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon! ☀️';
    } else {
      this.greeting = 'Good Evening! 🌙';
    }
  }
}
