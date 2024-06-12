import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private authService: AuthService,private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const { username,email, password } = this.registerForm.value;

      this.authService.login(username,email,password).subscribe(
        response => {
          // Maneja la respuesta del backend
          console.log('Login successful', response);
          this.registerForm.reset();
        },
        error => {
          // Maneja el error
          console.error('Login failed', error);
        }
      );
    }
  }

  navigateToRegistro() {
    this.router.navigate(['/']);
  }

}
