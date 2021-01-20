import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from '../../core/page.service';
import { BasePage } from '../../core/base.page';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
  providers: [InAppBrowser]
})
export class CoursePage extends BasePage implements OnInit {

  course: any;
  filesUrl = environment.filesUrl + '/';

  constructor(
    public pageService: PageService,
    public activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    public iab: InAppBrowser
  ) {
    super(pageService);
  }

  ngOnInit() {
   this.activatedRoute.params.subscribe( (params: Params) => {
      if (params && params.id) {
        this.getCourse(params.id);
      }
    });
  }

  getCourse(courseId) {
    this.pageService.httpGetById(this.settings.endPoints.courses,courseId).then(res => {
      this.course = res.data;
    })
  }

  getVideo(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goToPage(link) {
    const browser = this.iab.create(link, "_blank");
    browser.on('exit').subscribe(event => {
      console.log('event', event);
    });
    browser.show();
  }

}
