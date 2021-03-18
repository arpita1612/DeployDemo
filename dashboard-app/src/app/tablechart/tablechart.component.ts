import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CubejsClient } from "@cubejs-client/ngx";
import { Subject } from "rxjs";
import * as moment from "moment";
import {
  isQueryPresent,
  PivotConfig as TPivotConfig,
  Query,
  ResultSet,
} from '@cubejs-client/core';
import { TableComponent } from 'smart-webcomponents-angular/table';

@Component({
  selector: 'app-tablechart',
  templateUrl: './tablechart.component.html',
  styles: [
  ]
})
export class TablechartComponent implements OnInit {

  @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
  sorting = {
		enabled: true,
		mode: 'one'
	}
	
	filtering: {
		enabled: true,
		filterRow: {
			visible: true
		}
	}
  // columnDefs = [
  //   { field: 'TSData.projectname', sortable: true, filter: true},
  //   { field: 'TSData.monthyear', sortable: true, filter: true },
  //   { field: 'TSData.IntEquivalent', sortable: true, filter: true}
  // ];

  columns = [
		{
			label: 'Project Name', dataField: 'TSData.projectname'
		},
		{
			label: 'Hours', dataField: 'TSData.IntEquivalent'
		},
		{ label: 'Month Year', dataField: 'TSData.monthyear' },
		// { label: 'Product', dataField: 'productName' },
		// { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
		// { label: 'Delivery Date', dataField: 'date', align: 'right', cellsAlign: 'right', cellsFormat: 'd' },
		// { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
		// { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
	]

  MonthYear: any;
  @Input() chartType;
  @Input() query;
  @Input() title;
  chartLabels1: any;

  constructor(private cubejs: CubejsClient) { }

  public chartData;
  chartData1;
  public chartLabels = [];
  public chartOptions: any = {
    legend: {
      position: "top",
      align: "start",
    },
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  Details: any;
  defaultColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };
  public chartColors: any = [
    {
      borderColor: "#4D5360",
      backgroundColor: "#949FB1"
    }
  ];
  public chartColors1: any = [
    {
      borderColor: "white",
      backgroundColor: "#949FB1"
    }
  ];

  private querySubject;
  ready = false;
  total: any;
  count: any;
  page: number = 1;
  ArrayData: any;
  chartType1 = 'line'
  chartType2 = 'pie'
  MonthYear1 : any
  private dateFormatter = ({ y }) => moment(y);

  //Transform data for visualization
  commonSetup(resultSet) {
    debugger;
      this.chartData = resultSet.seriesNames().map(({ key, title }) => ({
      data: resultSet.backwardCompatibleData[0],//resultSet.chartPivot().map((element) => element[key]),
      label: title

    }));
    // if (resultSet.backwardCompatibleData.length > 0)
    //   this.chartLabels = resultSet.chartPivot().map(this.dateFormatter) //resultSet.backwardCompatibleData["TSData.projectname"]//[1]//resultSet.chartPivot().map()chartPivot().map(this.dateFormatter);
    this.chartLabels.length = 0;
    for (let i = resultSet.backwardCompatibleData[0].length - 1; i >= 0; i--) {
      this.chartLabels.push(resultSet.backwardCompatibleData[0][i]["TSData.projectname"]);
    }
    this.Details = this.chartData[0].data;
    console.log("chartdata.data : ", this.Details, "this.chartLabels", this.chartLabels)
    console.log("chartdata : ", this.chartData, "query : ", this.query)
    console.log("this.resultChanged = ", this.resultChanged)
    this.total = this.Details.reduce((sum: any, item: { [x: string]: any; }) => sum + item["TSData.IntEquivalent"], 0);
    this.count = Object.keys(this.Details).length
    // this.ArrayData = JSON.stringify(this.Details);
    // console.log(`ArrayData : ${this.ArrayData}`)

    this.chartData1 = resultSet.series().map((item) => {
      return {
        label: item.title,
        data: item.series.map(({ value }) => value),
        stack: 'a',
      };
    });
    this.chartLabels1 = resultSet.chartPivot().map((row) => row.x);

    // this.chartLabels1 = this.chartLabels//resultSet.chartPivot().map(this.dateFormatter);
    // this.chartData1 = resultSet.seriesNames().map(({ key, title }) => ({
    //   data: resultSet.chartPivot().map((element) => element[key]),
    //   label: title
    // }));
    console.log("chartdata1 : ", this.chartData1, "\n this.chartLabels1", this.chartLabels1[0] )//,  
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

  Search(){

    if (this.MonthYear == "") {
      this.ngOnInit();
    }
    else {
      {

        this.Details = this.Details.filter((res: any) => {
          console.log(` res.MonthYear ${res["TSData.monthyear"]}`)
          return res["TSData.monthyear"].toLocaleLowerCase().match(this.MonthYear.toLocaleLowerCase());
        })
        this.total = this.Details.reduce((sum, item) => sum + item["TSData.IntEquivalent"], 0);
        this.count = Object.keys(this.Details).length
      }
    }
  }

  Search1(){

    if (this.MonthYear1 == "") {
      this.ngOnInit();
    }
    else {
      {
        this.chartLabels1 = this.chartLabels1.filter((res: any) => {
          //console.log(`this.chartData1 ${this.chartData1} \n res.MonthYear ${res["TSData.monthyear"]}`)
          return res.toLocaleLowerCase().match(this.MonthYear1.toLocaleLowerCase());
        })
        console.log(`this.chartLabels1 ${this.chartLabels1} `)
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
