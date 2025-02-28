import { bootstrapApplication } from '@angular/platform-browser';
import { ResumeComponent } from './app/resume/resume.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(ResumeComponent, config);

export default bootstrap;
