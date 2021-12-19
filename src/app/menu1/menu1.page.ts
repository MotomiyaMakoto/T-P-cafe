import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class Menu1Page implements OnInit {

  constructor(private authser: AuthService) { }

  ngOnInit() {
    // this.name = this.authser.user.name
  }
  // name:string;

  logout(){
    this.authser.logout()
  }

}
