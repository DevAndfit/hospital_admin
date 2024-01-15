import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-augmenter',
  templateUrl: './augmenter.component.html',
  styles: [
  ]
})
export class AugmenterComponent implements OnInit {

	@Input('valor') progress:number = 50
	@Input() btnClass:string = 'btn-primary'
	@Output('valor') progressChange:EventEmitter<number> = new EventEmitter<number>()

	// get porcentage(){
	// 	return `${this.progress}%`

	// }

	ngOnInit() {
		this.btnClass = `btn ${this.btnClass}`
	}

	changeValue( value:number ) {
		if( this.progress >= 100 && value >= 0 ){
			this.progressChange.emit(100)
			this.progress = 100
			return
		}
		if( this.progress <= 0 && value < 0 ){
			this.progressChange.emit(0)

			this.progress = 0
			return
		}
		this.progress = this.progress + value;
		this.progressChange.emit( this.progress )
	};

	onChange( newValue:number ){

		if( newValue >= 100 ){
			this.progress = 100
		}else if( newValue <= 0 || this.progress === null || this.progress === undefined ){
			this.progress = 0
		}else {
			this.progress = newValue
		}

		if( this.progress === null || this.progress === undefined ){
			this.progress = 0
		}

		this.progressChange.emit( this.progress )
	};

};
