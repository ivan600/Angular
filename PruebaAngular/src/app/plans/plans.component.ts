import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  public planBasic: Array<string> = [
    'Basic web application creation',
    'Access to predefined templates and components',
    'Hosting of applications on your custom domain',
    'Email support during business hours',
    'Limit of 5 active applications',
    '1 GB of data storage'
  ]
}
