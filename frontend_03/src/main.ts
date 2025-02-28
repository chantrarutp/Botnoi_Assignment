import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ResumeComponent } from './app/resume/resume.component';

bootstrapApplication(ResumeComponent, appConfig)
  .catch((err) => console.error(err));
