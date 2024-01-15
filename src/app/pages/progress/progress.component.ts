import { Component } from '@angular/core';


@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.css']
})
export class ProgressComponent {




	progress1: number = 20;
	progress2: number = 50;

	get porcentage1() {
		return `${this.progress1}%`;
	}

	get porcentage2() {
		return `${this.progress2}%`;
	}



}
