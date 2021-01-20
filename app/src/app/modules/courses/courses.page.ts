import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BasePage } from '../../core/base.page';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage extends BasePage {

  courses: any = [];
  menu: any;
  filesUrl = environment.filesUrl + '/';

  ionViewWillEnter() {
    this.menu = 'presenciales';
    this.getCourses();
  }

  getCourses() {
    this.pageService.httpGetAll(this.settings.endPoints.courses).then(res => {
      this.courses = res.data;
    })
    .catch(error => {
      this.pageService.showError(error);
    });
  }

  goToCourse(courseId) {
    this.pageService.navigateRoute('course/' + courseId);
  }

  goToUser() {
    this.pageService.navigateRoute('user');
  }
}
