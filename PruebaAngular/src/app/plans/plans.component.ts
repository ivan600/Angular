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
  ];

  public planMedium: Array<string> = [
    'Advanced web application creation with additional features',
    'Access to a wide variety of templates and components',
    'Hosting of applications on your custom domain',
    'Email and live chat support during business hours',
    'No limit on the number of active applications',
    '10 GB of data storage',
    'Integration with third-party services (e.g., external databases)'
  ];

  public planPremium: Array<string> = [
    'Enterprise-level web application creation with advanced capabilities',
    'Access to all premium templates and components',
    'Hosting of applications on your custom domain',
    '24/7 priority support via email, chat, and phone',
    'No limit on the number of active applications',
    '50 GB of data storage',
    'Team collaboration features',
    'Integration with custom APIs and advanced analytics tools',
    'Access to exclusive updates and features'
  ];
}
