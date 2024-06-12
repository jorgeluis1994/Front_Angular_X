import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // this.authService.login(username, password).subscribe(
      //   response => {
      //     // Maneja la respuesta del backend
      //     console.log('Login successful', response);
      //   },
      //   error => {
      //     // Maneja el error
      //     console.error('Login failed', error);
      //   }
      // );
    }
  }

  navigateToRegistro() {
    this.router.navigate(['/auth/register']);
  }

}
