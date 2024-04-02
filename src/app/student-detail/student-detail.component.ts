import { Component } from '@angular/core';
import { StudentTitlePipe } from '../student-title.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [StudentTitlePipe,CommonModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  students: { name: string, gender: string }[] = [
    { name: 'John', gender: 'Male' },
    { name: 'Emily', gender: 'Female' },
    { name: 'Michael', gender: 'Male' },
    { name: 'Sophia', gender: 'Female' },
    { name: 'David', gender: 'Male' },
    { name: 'Emma', gender: 'Female' },
    { name: 'Daniel', gender: 'Male' },
    { name: 'Olivia', gender: 'Female' }
  ];
}
