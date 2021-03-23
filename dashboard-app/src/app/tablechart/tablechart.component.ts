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
  columnDefs = [
    { field: 'TSData.projectname', sortable: true, filter: true },
    { field: 'TSData.monthyear', sortable: true, filter: true },
    { field: 'TSData.IntEquivalent', sortable: true, filter: true}
  ];
  columnDefs1 = [
    { field: 'Name', sortable: true, filter: true },
    { field: 'Age', sortable: true, filter: true },
    { field: 'Contact', sortable: true, filter: true}
  ];
  User = [
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 879.6700000000004
    },
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2020-12",
      "TSData.IntEquivalent": 792.3600000000001
    },
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2021-1",
      "TSData.IntEquivalent": 788.7500000000002
    },
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 723.2799999999999
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2021-1",
      "TSData.IntEquivalent": 661.2500000000001
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2020-12",
      "TSData.IntEquivalent": 628.04
    },
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 625.45
    },
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 611.14
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 607.7600000000001
    },
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 600.3299999999999
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 530.22
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 504.06999999999994
    },
    {
      "TSData.projectname": "SA Taxi - Business Critical Applications",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 483.36999999999995
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 481.67
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2021-1",
      "TSData.IntEquivalent": 427.56
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 423.25
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 409.87999999999994
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2020-12",
      "TSData.IntEquivalent": 386.25
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 367.99
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 357.45000000000016
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 292.51
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2020-12",
      "TSData.IntEquivalent": 289.12000000000006
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 274.5400000000001
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 273.11
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 272.67
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 257.63
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 255.09999999999997
    },
    {
      "TSData.projectname": "SA Taxi - Optima New Dev",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 250.26000000000002
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2021-1",
      "TSData.IntEquivalent": 245.46999999999994
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2021-1",
      "TSData.IntEquivalent": 207.74
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 191
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 167
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2020-12",
      "TSData.IntEquivalent": 157
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 144
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2021-1",
      "TSData.IntEquivalent": 140.75
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 137.5
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 136.07
    },
    {
      "TSData.projectname": "SA Taxi - CollectSmart",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 131.92000000000002
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 114.24
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 114.23
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 110.13999999999999
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 109
    },
    {
      "TSData.projectname": "SA Taxi - Project Coordinator",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 107
    },
    {
      "TSData.projectname": "SA Taxi - CollectSmart",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 105.5
    },
    {
      "TSData.projectname": "SA Taxi - QuanTaMax",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 102
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 90.59
    },
    {
      "TSData.projectname": "SA Taxi - Hive New Dev",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 87.25
    },
    {
      "TSData.projectname": "SA Taxi - Telematics LMS",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 81.58
    },
    {
      "TSData.projectname": "SA Taxi - CollectSmart",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 77.57
    },
    {
      "TSData.projectname": "SA Taxi - CollectSmart",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 64.99
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 47.23
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 45.5
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2020-12",
      "TSData.IntEquivalent": 45.5
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 43.989999999999995
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 32.669999999999995
    },
    {
      "TSData.projectname": "SA Taxi - General",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 30.75
    },
    {
      "TSData.projectname": "SA Taxi - Optima Support",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 30.18
    },
    {
      "TSData.projectname": "SA Taxi - CollectSmart",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 29.5
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2020-9",
      "TSData.IntEquivalent": 25.68
    },
    {
      "TSData.projectname": "SA Taxi - General",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 24.41
    },
    {
      "TSData.projectname": "SA Taxi - General",
      "TSData.monthyear": "2020-8",
      "TSData.IntEquivalent": 20.08
    },
    {
      "TSData.projectname": "SA Taxi - QuanTaMax",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 15
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2021-1",
      "TSData.IntEquivalent": 14.5
    },
    {
      "TSData.projectname": "SA Taxi - QuanTaMax",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 11.5
    },
    {
      "TSData.projectname": "SA Taxi - WhatsApp Chat Implementation",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 11.5
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2021-2",
      "TSData.IntEquivalent": 11
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2020-10",
      "TSData.IntEquivalent": 7.33
    },
    {
      "TSData.projectname": "SA Taxi – Business Analysis - 2020",
      "TSData.monthyear": "2020-12",
      "TSData.IntEquivalent": 5.67
    },
    {
      "TSData.projectname": "SA Taxi - WhatsApp Chat Implementation",
      "TSData.monthyear": "2020-7",
      "TSData.IntEquivalent": 2.5
    },
    {
      "TSData.projectname": "SA Taxi - QuanTaMax",
      "TSData.monthyear": "2020-11",
      "TSData.IntEquivalent": 1
    }
  ]
  UserData = [{
    Name : "Arpita",
    Age : 21,
    Contact : 9822360555
  },
  {
    Name : "Anuja",
    Age : 20,
    Contact : 9146885987
  },
  {
    Name : "Saurabh",
    Age : 22,
    Contact : 8087889404
  },{
    Name : "Tanvi",
    Age : 21,
    Contact : 78941258633
  },{
    Name : "Nikhil",
    Age : 20,
    Contact : 9871236664
  },{
    Name : "Yash",
    Age : 23,
    Contact : 9635744489
  },
  {
    Name : "Nikita",
    Age : 20,
    Contact : 99367451236
  },
  {
    Name : "Arti",
    Age : 25,
    Contact : 9604161299
  },
  {
    Name : "Anuj",
    Age : 23,
    Contact : 9563214785
  },
  {
    Name : "Anvi",
    Age : 21,
    Contact : 7752369845
  },
  

];

  columns = [
		{
			label: 'Name', dataField: 'Name'
		},
		{
			label: 'Age', dataField: 'Age'
		},
		{ label: 'Contact', dataField: 'Contact' },
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
    console.log("Details : ", this.Details)//, "this.chartLabels", this.chartLabels
    // console.log("chartdata : ", this.chartData, "query : ", this.query)
    // console.log("this.resultChanged = ", this.resultChanged)
    this.total = this.Details.reduce((sum: any, item: { [x: string]: any; }) => sum + item["TSData.IntEquivalent"], 0);
    this.count = Object.keys(this.Details).length
    // this.ArrayData = JSON.stringify(this.Details);
    console.log(`User : ${this.User}`)

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
