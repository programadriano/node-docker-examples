import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stream-header',
  templateUrl: './stream-header.component.html',
  styleUrls: ['./stream-header.component.sass'],

})
export class StreamHeaderComponent implements OnInit {


  public msgErro: string;
  user: any;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.user = localStorage['user']
  }


  logout() {
    localStorage.clear();

    delete localStorage['user'];
    delete localStorage['role'];
    delete localStorage['token'];


    this.router.navigate(['/login']);
  }

}
