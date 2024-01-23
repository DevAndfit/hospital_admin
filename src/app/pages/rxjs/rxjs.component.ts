import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

	public intervalSub?: Subscription;

	constructor() {


	}


	ngOnInit(): void {
		// this.returnAnObservable().subscribe()
		this.intervalSub = this.returnInterval().subscribe(valor => console.log(valor))

	};
	ngOnDestroy(): void {
		this.intervalSub?.unsubscribe();
	};

	returnInterval():Observable<number> {
		return interval(500)
			.pipe(
				map(valor => { return valor + 1 } ),
				filter(valor => (valor % 2 === 0 ) ? true : false ),
				// take(10),
			)
	};


	returnAnObservable(): Observable<number> {
		let i = 0;

		return new Observable<number>(observer => {

			const intervalo = setInterval(() => {
				i++
				observer.next(i);
				console.log(i);

				if (i === 3) {
					observer.complete();
					clearInterval(intervalo)
				}
			}, 2000)
		});




	};

};
