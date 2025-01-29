import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from './education/education.component';
import { CertsComponent } from "./certs/certs.component";
import { ProjectsComponent } from './projects/projects.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, HeaderComponent, ProfileComponent, FooterComponent, SkillsComponent, ExperienceComponent, EducationComponent, CertsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
