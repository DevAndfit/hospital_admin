import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	public formSubmited: boolean = false;

	public loginForm:FormGroup = new FormGroup({
		email: new FormControl( localStorage.getItem('email') || '', [ Validators.required, Validators.email ]),
		password: new FormControl( '', [ Validators.required, Validators.min(6) ] ),
		remember: new FormControl( false ),
	})

	constructor( private router:Router, private fb:FormBuilder, private userService:UserService ){}

	login(){
		this.formSubmited = true;
		if ( this.loginForm.valid ) {
			this.userService.login( this.loginForm.value )
			.subscribe({
				next:( data => {
					if ( this.loginForm.get('remember')?.value ) {
						localStorage.setItem('email', this.loginForm.get('email')?.value );
					}else {
						localStorage.removeItem('email');
					}
					this.router.navigateByUrl('/dashboard');
				}),
				error:( err => {
					console.log(err);
					// const errors = err.error.msg || 'El email no es correcto o no es un email valido'

					Swal.fire('Error','Email o contrasena incorrectas' , 'error')
				})
			})
		}
	};

	invalidsFields( field:string ):boolean {

		if(this.loginForm.get(field)?.invalid && this.formSubmited ){
			return true;
		}else {
			return false;
		}
	};
}
