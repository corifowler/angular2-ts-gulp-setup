import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SummaryComponent} from './summary.component';
import {AnalyticsComponent} from './analytics.component';
import {DemographicProfileComponent} from './demographic-profile.component';
import {DispositionProfileComponent} from './disposition-profile.component';
import {PerformanceSummaryComponent} from './performance-summary.component';
import {SurveyProjectsComponent} from './survey-projects.component';

// skeleton setup

@Component({
  selector: 'my-app',
  template: `
    <h1>angular2 app</h1>
    <nav>
      <a [routerLink]="['Summary']">Summary</a>
      <a [routerLink]="['Analytics']">Analytics</a>
      <a [routerLink]="['DispositionProfile']">Disposition Profile</a>
      <a [routerLink]="['DemographicProfile']">Demographic Profile</a>
      <a [routerLink]="['PerformanceSummary']">Performance Summary</a>
      <a [routerLink]="['SurveyProjects']">Survey Projects</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

// different routes for app

@RouteConfig([
    { path: '/summary',             name: 'Summary',            component: SummaryComponent },
    { path: '/analytics',           name: 'Analytics',          component: AnalyticsComponent },
    { path: '/disposition-profile', name: 'DispositionProfile', component: DispositionProfileComponent },
    { path: '/demographic-profile', name: 'DemographicProfile', component: DemographicProfileComponent },
    { path: '/performance-summary', name: 'PerformanceSummary', component: PerformanceSummaryComponent },
    { path: '/survey-projects',     name: 'SurveyProjects',     component: SurveyProjectsComponent }
])

export class AppComponent { }