import { OnInit, Directive } from '@angular/core';
import { PageService } from './page.service';
import { environment } from 'src/environments/environment';

@Directive({selector: '[basePage]'})
export class BasePage implements OnInit {

  global: any;
  settings: any;
  filesUrl = environment.filesUrl + '/';

  constructor(
    public pageService: PageService
  ) {
    this.global = this.pageService.global;
    this.settings = this.pageService.global.settings;
  }

  ngOnInit() {
  }

}
