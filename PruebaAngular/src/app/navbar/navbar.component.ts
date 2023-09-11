import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  goToPlans(){
    window.scroll({
      top: 1050,
      behavior: "smooth"
    });
  }
}
