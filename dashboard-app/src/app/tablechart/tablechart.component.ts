import { Component, Input, OnInit } from '@angular/core';
import { CubejsClient } from "@cubejs-client/ngx";
import { Subject } from "rxjs";
import * as moment from "moment";
import {
  isQueryPresent,
  PivotConfig as TPivotConfig,
  Query,
  ResultSet,
} from '@cubejs-client/core';
import { NgxChartsModule } from '@swimlane/ngx-charts'

@Component({
  selector: 'app-tablechart',
  templateUrl: './tablechart.component.html',
  styles: [
  ]
})
export class TablechartComponent implements OnInit {

  UserData = [{
    Name: "Arpita",
    Age: 21,
    Contact: 9822360555
  },
  {
    Name: "Anuja",
    Age: 20,
    Contact: 9146885987
  },
  {
    Name: "Saurabh",
    Age: 22,
    Contact: 8087889404
  }, {
    Name: "Tanvi",
    Age: 21,
    Contact: 78941258633
  }, {
    Name: "Nikhil",
    Age: 20,
    Contact: 9871236664
  }, {
    Name: "Yash",
    Age: 23,
    Contact: 9635744489
  },
  ];
  columnDefs = [
    { field: 'TSData.projectname', sortable: true, filter: true},
    { field: 'TSData.monthyear', sortable: true, filter: true },
    { field: 'TSData.IntEquivalent', sortable: true, filter: true}
  ];

  MonthYear: any;
  @Input() chartType;
  @Input() query;
  @Input() title;

  constructor(private cubejs: CubejsClient) { }

  public chartData;
  public chartLabels;
  public chartOptions: any = {
    legend: {
      position: "top",
      align: "start"
    }
  };
  Details: any;
  defaultColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };
  public chartColors: any = [
    {
      borderColor: "#feebe2",
      backgroundColor: "#feebe2"
    },
    {
      borderColor: "#fbb4b9",
      backgroundColor: "#fbb4b9"
    },
    {
      borderColor: "#f768a1",
      backgroundColor: "#f768a1"
    },
    {
      borderColor: "#ae017e",
      backgroundColor: "#ae017e"
    }
  ];

  private querySubject;
  ready = false;
  total: any;
  count: any;
  page: number = 1;
  ArrayData: any;

  //Transform data for visualization
  commonSetup(resultSet) {
    debugger;
    // this.chartLabels = resultSet.chartPivot().map();
    // this.chartData =resultSet.tablePivot({
    //   x: ['TSData.monthyear'],
    //   y: ['TSData.IntEquivalent', 'measures']
    // });

    // this.chartData = resultSet.series({
    //   x: ['TSData.projectname'],
    //   y: ['TSData.count', 'measures']
    // }).map((item) => {
    //   return {
    //     label: item.title,
    //     data: item.series.map(({ value }) => value),
    //     stack: 'a',
    //   };
    // });


    this.chartData = resultSet.seriesNames().map(({ key, title }) => ({
      data: resultSet.backwardCompatibleData[0],//resultSet.chartPivot().map((element) => element[key]),
      label: title

    }));
    if (resultSet.backwardCompatibleData.length > 0)
      this.chartLabels = resultSet.backwardCompatibleData["TSData.projectname"]//[1]//resultSet.chartPivot().map()chartPivot().map(this.dateFormatter);
    this.Details = this.chartData[0].data;
    console.log("chartdata.data : ", this.Details, "this.chartLabels", this.chartLabels)
    console.log("chartdata : ", this.chartData, "query : ", this.query)
    console.log("this.resultChanged = ", this.resultChanged)
    this.total = this.Details.reduce((sum, item) => sum + item["TSData.IntEquivalent"], 0);
    this.count = Object.keys(this.Details).length
    this.ArrayData = JSON.stringify(this.Details);
    console.log(`ArrayData : ${this.ArrayData}`)
  }
  resultChanged(resultSet) {
    this.commonSetup(resultSet);
    this.ready = true;
  }
  ngOnInit(): void {

    console.log("oninit query : ", this.query)
    this.querySubject = new Subject();

    this.resultChanged = this.resultChanged.bind(this);
    this.cubejs
      .watch(this.querySubject)
      .subscribe(this.resultChanged, (err) => console.log("HTTP Error", err));

    this.querySubject.next(this.query);
    
  }

  Search() {

    if (this.MonthYear == "") {
      this.ngOnInit();
    }
    else {
      {

        this.Details = this.Details.filter((res: any) => {
          console.log(`res.MonthYear ${res["TSData.monthyear"]}`)
          return res["TSData.monthyear"].toLocaleLowerCase().match(this.MonthYear.toLocaleLowerCase());
        })
        this.total = this.Details.reduce((sum, item) => sum + item["TSData.IntEquivalent"], 0);
        this.count = Object.keys(this.Details).length
      }
    }
  }

  key: string = 'TSData.monthyear';
  reverse: boolean = false;
  sortTable(key: string) {
    this.key = key;
    console.log(`Key ${this.key}`)
    this.reverse = !this.reverse;
    console.log(`reverse ${this.reverse}`)
  }

  roundoff(val: any) {
    return Math.round(val * 100) / 100;
  }
}
