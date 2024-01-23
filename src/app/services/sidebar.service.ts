import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SidebarService {

	public menu: any[] = [
		{
			title: 'Dashboard',
			icon: 'mdi mdi-gauge',
			submenu: [
				{ title: 'Main', url: '' },
				{ title: 'ProgressBar', url: 'progress' },
				{ title: 'Graficas', url: 'grafica1' },
				{ title: 'promises', url: 'promises' },
				{ title: 'rxjs', url: 'rxjs' },
			]
		}
	]

	constructor() { }
}
