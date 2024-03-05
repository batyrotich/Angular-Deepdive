import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course: Course;
  @Input({required:true})
  index:number;
  @Input()
    cardIndex:number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {
  }
  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){
    console.log("card component - button clicked...");
    this.courseEmitter.emit(this.course);
    }
    cardClasses(){
      if(this.course.category == 'BEGINNER'){
      return 'beginner';
      };
    }
}
