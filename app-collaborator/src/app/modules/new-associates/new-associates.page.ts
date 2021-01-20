import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-associates',
  templateUrl: './new-associates.page.html',
  styleUrls: ['./new-associates.page.scss'],
})
export class NewAssociatesPage implements OnInit {


  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToMap() {
    this.router.navigate(["/map"])
  }

}
