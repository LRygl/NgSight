import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.color';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32,14,46,23,38,75], label: 'Analysis'},
  {data: [12,56,32,11,8,35], label: 'Image recognition'},
  {data: [34,45,44,22,50,12], label: 'Forecasting'},
]

const LINE_CHART_LABELS: string[] = ['Leden','Únor','Březen','Duben','Květen','Červen']

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
      responsive: true
    };
  lineChartLegend: true;
  lineChartColors = LINE_CHART_COLORS;
  lineChartType = 'line';

  ngOnInit() {
  }

}
