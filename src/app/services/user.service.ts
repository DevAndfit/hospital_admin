import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment.development';
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

const base_url = environment.base_url

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private hhtp: HttpClient) { }

	createUser(formData: RegisterForm) {
		return this.hhtp.post(`${base_url}/users`, formData)
			.pipe(
				tap((resp: any) => {
					localStorage.setItem('token', resp.token)
				})
			)
	};

	login(formData: LoginForm) {
		return this.hhtp.post(`${base_url}/auth/login`, formData)
			.pipe(
				tap((resp: any) => {
					localStorage.setItem('token', resp.token)
				})
			)
	};

	validateToken():Observable<boolean> {

		const token = localStorage.getItem('token') || '';

		// if (!token) {
		// 	return of(false)
		// }

		return this.hhtp.get(`${base_url}/auth/renew`, {
			headers:{
				'x-token': token
			}
		}).pipe(
			tap(( resp:any ) => {
				localStorage.setItem('token', resp.token)
			}),
			map( resp => true ),
			catchError( error => of(false) )
		)

	};

	logout(){
		localStorage.removeItem('token')
	}
}
