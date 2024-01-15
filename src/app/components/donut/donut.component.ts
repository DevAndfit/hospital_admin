import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, Color } from 'chart.js';


@Component({
	selector: 'app-donut',
	templateUrl: './donut.component.html',
	styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
	ngOnInit(): void {
		this.prueba();
	}

	@Input() title: string = 'sin titulo';
	@Input() labels1: string[] = ['ventas','compras','deudas'];
	@Input() datas: number[] = [233, 433, 232];
	@Input() colors: string[] = ['red','blue','green'];
	@Input() responsive?: boolean;


	public doughnutChartOptions: ChartConfiguration<any>['options'] = {
		responsive: false,
	};

	// Doughnut

	public doughnutChartData: ChartData<'doughnut'> = {
		labels: this.labels1,
		datasets: [
			{
				data: this.datas,
				backgroundColor: this.colors,
			}
		]
	};
	public doughnutChartType: ChartType = 'doughnut';


	prueba():void {
		this.doughnutChartData.labels = this.labels1;
		this.doughnutChartData.datasets[0].data = this.datas
		this.doughnutChartData.datasets[0].backgroundColor = this.colors;
		this.doughnutChartOptions.responsive = this.responsive;

	}

}
