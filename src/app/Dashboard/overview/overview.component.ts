import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, Color, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  doughnutChartLabels: Label[] = ['Exspenses', 'Profit'];
  doughnutChartData: MultiDataSet = [
    [80, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughtnutChartColors: Array<any> = [{
    backgroundColor: ['#adb5bd', '#0d6efd'],
  }];

  //Bar chart data
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Incomplete', 'Completed'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  barChartData: ChartDataSets[] = [
    { data: [25, 50,0], label: 'Orders' }
  ];

  barChartColors: Array<any> = [{
    backgroundColor: ['#adb5bd', '#0d6efd'],
  }];

  // line chart data
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Average Viewers by Month' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13,110,253,0.5)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  //Pie chart demographics data
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['North America'], ['Canada'], 'Europe'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
