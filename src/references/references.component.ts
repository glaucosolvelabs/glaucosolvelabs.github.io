import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})

export class ReferencesComponent {
  showAllReferences = false;

  toggleReferences() {
    this.showAllReferences = !this.showAllReferences;
  }
}