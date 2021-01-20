import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class CourseComponent extends ItemComponent {

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
      link: [null, Validators.required],
      type: [null, Validators.required],
    })
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name],
      description: [item.description],
      link: [item.link],
      type: [item.type],
    })
  }

}
