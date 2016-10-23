import { Component } from '@angular/core';
import { CourseService } from './course.service'


@Component({
    selector: 'courses',
    template: `
    <h1>This is from courses component</h1>
    {{title}}
    <input type="text" autogrow/>
    <ul>
        <li class="myli" [class.Active]="isActive" *ngFor="let course of courses">{{course}}</li>
    </ul>
    `,
    providers: [CourseService]
})
export class CourseComponent {
    isActive = true;
    title: string = "this is Courses title";
    // courses = new CourseService().getCources();
    // courses = ["Course01", "Course02", "Course03"];//fragile
    courses;
    constructor(courseService: CourseService) {
        this.courses = courseService.getCources();
    }
}