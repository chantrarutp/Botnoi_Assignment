import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'botnoi_assignment';
  inputNumber: number = 0;
  star: string[] = [];

  generatePattern() {
    this.star = [];
    for (let i = 1; i <= this.inputNumber; i++) {
      this.star.push('*'.repeat(i));
    }
    for (let i = this.inputNumber - 1; i >= 1; i--) {
      this.star.push('*'.repeat(i));
    }
  }
}
