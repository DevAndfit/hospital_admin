import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy{

	public title!: string;
	public titleSub$!: Subscription;

	constructor(private router: Router, private route:ActivatedRoute) {

		// console.log(route.snapshot.children[0].data);

		this.titleSub$ = this.getTitle()
			.subscribe(({ title }) => {
				this.title = title
				document.title = `Adminpro-${title}`
			})
	}

	ngOnDestroy(): void {
		this.titleSub$.unsubscribe();
	}

	getTitle():Observable<any> {
		return this.router.events
			.pipe(
				filter((event): event is ActivationEnd => event instanceof ActivationEnd),
				filter((event: ActivationEnd) => event.snapshot.firstChild === null),
				map((event: ActivationEnd) => event.snapshot.data)
			)


	}

}
