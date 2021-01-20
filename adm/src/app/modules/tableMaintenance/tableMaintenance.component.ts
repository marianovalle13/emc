import { Component, OnInit } from '@angular/core';
import { PageService } from '../../core/page.service';

@Component({
  selector: 'app-tableMaintenance',
  templateUrl: './tableMaintenance.component.html',
  styleUrls: ['../../core/items.component.scss']
})
export class TableMaintenanceComponent implements OnInit {

  constructor(
    public pageService: PageService
  ) {
  }

  ngOnInit() {
  }

}
