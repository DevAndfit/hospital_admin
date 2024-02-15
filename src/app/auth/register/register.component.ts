import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

	public formSubmited = false;

	public registerForm:FormGroup = new FormGroup({
		name: new FormControl( 'fco', [ Validators.required, Validators.minLength(3) ] ),
		email:new FormControl( 'fco@hotmail.com', [ Validators.required, Validators.email ]),
		password:new FormControl( '123456', [ Validators.required, Validators.min(6) ] ),
		password2:new FormControl( '123456', [ Validators.required, Validators.min(6) ]) ,
		terms:new FormControl( true, [ Validators.required ] ),
	})

	constructor( private fb:FormBuilder, private userService:UserService, private router:Router ){}

	createUser(){
		this.formSubmited = true;
		// console.log(this.registerForm.value)
		if( this.registerForm.invalid && !this.invalidPasswords() ){
			this.registerForm.get('password2')?.setErrors({ noEqual: true })
		};

		this.userService.createUser( this.registerForm.value )
			.subscribe({
				next: ( resp:any ) => {
					Swal.fire('Usuario creado', `El usuario ${this.registerForm.get('name')?.value} fue creado con exito`, 'success')
						.then( () => {
							setTimeout(() => {
								this.router.navigateByUrl('/dashboard')
							}, 400);
						})
				},
				error: (err) => {
					//Manejo de error
					Swal.fire('Error', err.error.msg, 'error')
				},
			})
	};

	invalidsFields( field:string ):boolean {

		if(this.registerForm.get(field)?.invalid && this.formSubmited ){
			return true;
		}else {
			return false;
		}
	};

	invalidPasswords(){
		const pass1 = this.registerForm.get('password')?.value;
		const pass2 = this.registerForm.get('password2')?.value;

		if( pass1 !== pass2 && this.formSubmited ){
			return true
		}else {
			return false
		}
	}

	termsAcepted(){
		return !this.registerForm.get('terms')?.value && this.formSubmited
	}

	equalPasswords( pass1Name:string, pass2Name:string ){
		//Funcion para validar que las contraseñas sean iguales.
		//Regresa null si las contrasenas son iguales o asigna un error al formGroup de password2 si la contrasena no coincide
		return ( formGroup:FormGroup ) => {
			const pass1Control = formGroup.get(pass1Name)
			const pass2Control = formGroup.get(pass2Name)

			if( pass1Control?.value === pass2Control?.value ){
				pass2Control?.setErrors(null)
			}else {
				pass2Control?.setErrors({ noEqual: true })
			}
		}
	};


}
