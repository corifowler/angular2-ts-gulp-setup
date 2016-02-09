System.register(['angular2/core', 'angular2/router', './summary.component', './analytics.component', './demographic-profile.component', './disposition-profile.component', './performance-summary.component', './survey-projects.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, summary_component_1, analytics_component_1, demographic_profile_component_1, disposition_profile_component_1, performance_summary_component_1, survey_projects_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (summary_component_1_1) {
                summary_component_1 = summary_component_1_1;
            },
            function (analytics_component_1_1) {
                analytics_component_1 = analytics_component_1_1;
            },
            function (demographic_profile_component_1_1) {
                demographic_profile_component_1 = demographic_profile_component_1_1;
            },
            function (disposition_profile_component_1_1) {
                disposition_profile_component_1 = disposition_profile_component_1_1;
            },
            function (performance_summary_component_1_1) {
                performance_summary_component_1 = performance_summary_component_1_1;
            },
            function (survey_projects_component_1_1) {
                survey_projects_component_1 = survey_projects_component_1_1;
            }],
        execute: function() {
            // skeleton setup
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>angular2 app</h1>\n    <nav>\n      <a [routerLink]=\"['Summary']\">Summary</a>\n      <a [routerLink]=\"['Analytics']\">Analytics</a>\n      <a [routerLink]=\"['DispositionProfile']\">Disposition Profile</a>\n      <a [routerLink]=\"['DemographicProfile']\">Demographic Profile</a>\n      <a [routerLink]=\"['PerformanceSummary']\">Performance Summary</a>\n      <a [routerLink]=\"['SurveyProjects']\">Survey Projects</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/summary', name: 'Summary', component: summary_component_1.SummaryComponent },
                        { path: '/analytics', name: 'Analytics', component: analytics_component_1.AnalyticsComponent },
                        { path: '/disposition-profile', name: 'DispositionProfile', component: disposition_profile_component_1.DispositionProfileComponent },
                        { path: '/demographic-profile', name: 'DemographicProfile', component: demographic_profile_component_1.DemographicProfileComponent },
                        { path: '/performance-summary', name: 'PerformanceSummary', component: performance_summary_component_1.PerformanceSummaryComponent },
                        { path: '/survey-projects', name: 'SurveyProjects', component: survey_projects_component_1.SurveyProjectsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
