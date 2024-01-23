import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit{


	ngOnInit(): void {
		this.getUsuarios().then( usuarios => {
			console.log(usuarios);
		} )
	}

	getUsuarios(){

		const promesa = new Promise( (resolve, reject) => {
			fetch('https://reqres.in/api/users')
				.then( resp => resp.json() )
				.then( body => resolve(body.data));
		});

		return promesa;

	}


}
