import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-phcp',
  templateUrl: './phcp.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class PHCPComponent extends ItemComponent {

  phcs:string =''

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      phc: [null, Validators.required],
    })
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name],
      phc: [item.phc.id],

    })
  }

  getPopulates() {
    return ['phc']
  }

  initializePre() {
    this.getPhcs()
  }

  async getPhcs() {
    const res = await this.pageService.httpSimpleGetAll(this.pageService.global.settings.endPoints.phcs)
    if (res && res.data) this.phcs = res.data;    
    
  }

}
