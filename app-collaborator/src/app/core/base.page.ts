import { OnInit, Directive } from '@angular/core';
import { PageService } from './page.service';

@Directive({selector: '[basePage]'})
export class BasePage implements OnInit {

  global: any;
  settings: any;

  constructor(
    public pageService: PageService
  ) {
    this.global = this.pageService.global;
    this.settings = this.pageService.global.settings;
  }
 
  ngOnInit() {
  }

  goToHome() {
  }


}
