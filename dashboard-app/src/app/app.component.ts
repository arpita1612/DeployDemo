import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor() {}

  
// Query data from Cube.js Backend
public ChartQuery = {

  measures: ["TSData.IntEquivalent"],
  dimensions: ["TSData.projectname","TSData.monthyear"],
  // filters: [
  //   {
  //     member: "TSData.monthyear",
  //     operator: "equals",
  //     values: ["2021-1","2021-2","2021-3", "2020-7", "2020-8", "2020-9","2020-10","2020-11","2020-9=12"]
  //   }
  // ],
  timeDimensions: [],
  order : {}
};

ngOnInit() {}

}
