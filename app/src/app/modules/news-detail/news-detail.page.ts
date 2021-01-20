import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BasePage } from 'src/app/core/base.page';
import { PageService } from 'src/app/core/page.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage extends BasePage implements OnInit {

  new: any = [];

  constructor(
    public pageService: PageService,
    public activatedRoute: ActivatedRoute
  ) {
    super(pageService);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
       if (params && params.id) {
         this.getNew(params.id);
       }
     });
   }

   getNew(newId) {
     this.pageService.httpGetById(this.settings.endPoints.news, newId).then(res => {
       this.new = res.data;
     })
   }

}
