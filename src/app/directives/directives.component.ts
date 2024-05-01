import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  paragraphVisible = false;
  logs = [];

  onClick() {
    this.paragraphVisible = !this.paragraphVisible;
    this.logs.push(new Date());
  }

  calculateButtonText(): string {
    return this.paragraphVisible ? 'Hide password' : 'Show password'
  }
}
