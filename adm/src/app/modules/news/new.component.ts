import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class NewComponent extends ItemComponent {

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      subtitle: [null, Validators.required],
      text: [null, Validators.required],
      image: [null, Validators.required],
    })
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      title: [item.title],
      subtitle: [item.subtitle],
      text: [item.text],
      image: [item.image],
    })
  }

}
