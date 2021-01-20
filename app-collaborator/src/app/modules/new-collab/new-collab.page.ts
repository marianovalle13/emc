import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-collab',
  templateUrl: './new-collab.page.html',
  styleUrls: ['./new-collab.page.scss'],
})
export class NewCollabPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToNewAssociates() {
    this.router.navigate(["/new-associates"])
  }

}
