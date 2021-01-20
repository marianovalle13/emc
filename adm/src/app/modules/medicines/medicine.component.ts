import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class MedicineComponent extends ItemComponent {

  categories: [] = [];
  currentCategory: string = ''

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      category:[null, Validators.required]
    })
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name],
      category:[item.category.id]

    })
  }

  getPopulates() {
    return ['category']
  }

  initializePre() {
    this.getCategories()
  }

  async getCategories() {
    const res = await this.pageService.httpSimpleGetAll(this.pageService.global.settings.endPoints.categories)
    if (res && res.data) this.categories = res.data;    
  }
}
