import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BasePage } from '../../core/base.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage extends BasePage {

  news: any = [];
  filesUrl = environment.filesUrl + '/';

  ionViewWillEnter() {
    this.getNews();
  }

  goToUser() {
    this.pageService.navigateRoute('user');
  }

  goToNewsDetail(newId) {
    this.pageService.navigateRoute('news-detail/' + newId);
  }

  async getNews() {
    this.pageService.httpGetAll(this.settings.endPoints.news).then(res => {
      this.news = res.data;
    })
    .catch(error => {
      this.pageService.showError(error);
    });
  }
}
