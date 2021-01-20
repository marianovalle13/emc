import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualify',
  templateUrl: './qualify.page.html',
  styleUrls: ['./qualify.page.scss'],
})
export class QualifyPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {

  }

  goToHome() {
    this.router.navigate(["/home"])
  }
}
