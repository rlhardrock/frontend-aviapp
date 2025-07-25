import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-page',   
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  template: `
        <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
          <!-- Encabezado -->
          <div class="text-center space-y-1 mb-6">
            <h1 class="text-2xl font-extrabold text-gray-800">PROCESAMIENTO DE PRUEBAS DE SOFTWARE</h1>
            <h2 class="text-lg font-semibold text-gray-700">3 1 1 8 2 7 3 - Luis Rey</h2>
            <p class="text-sm text-gray-600">Centro de Diseño e Innovación Tecnológica Industrial</p>
            <p class="text-sm text-gray-600 font-medium">SENA</p>
          </div>

          <!-- Formulario -->
          <form [formGroup]="form" (ngSubmit)="login()" class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar sesión AVIAPP</h2>

            <div class="mb-4">
      <label class="block mb-1 text-sm font-medium text-gray-700">Email:</label>
      <input
        type="email"
        formControlName="email"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="sena2025@sena.com"
      />
    </div>

    <div class="mb-6">
      <label class="block mb-1 text-sm font-medium text-gray-700">Contraseña:</label>
      <input
        type="password"
        formControlName="password"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="soysena123"
      />
    </div>

    <button
      type="submit"
      [disabled]="form.invalid"
      class="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Iniciar sesión
    </button>
          </form>
        </div>

  `,
})

export class LoginPage {
  form!: FormGroup; // ¡Declaración sin inicializar aquí!

  errorMessage = '';  

  constructor(
    private fb: FormBuilder,     
    private router: Router,
    private authService: AuthService
  ) {
    // Inicializar dentro del constructor
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.invalid) return;
    this.authService.login(this.form.value.email, this.form.value.password).subscribe({
      next: () => { this.router.navigate(['/dashboard']);},
      error: (err) => {
        this.errorMessage = 'Inicio de sesión fallido: ' + (err.error?.message || 'Credenciales incorrectas');
      },
    });
  }
}

/* login() {
  const { email, password } = this.form.value;
  if (this.authService.login(email!, password!)) {
    this.router.navigate(['/dashboard']);
  } else {
    this.errorMessage = 'Credenciales inválidas';
  }
} */

/* export class LoginPage {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  }); */

/* export class LoginPage {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  errorMessage = '';  
  
  constructor(
    private fb: FormBuilder,     
    private http: HttpClient, 
    private router: Router,
    private authService: AuthService
  ) {}
 */
  /* onSubmit() {
    const { email, password } = this.form.value;
    const validEmail = 'sena2025@sena.com';
    const validPassword = 'soysena123';

    if (email === validEmail && password === validPassword) {
      // Simular sesión
      localStorage.setItem('token', 'fake-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciales incorrectas');
    } */

 /*  login() {
    const { email, password } = this.form.value;
    if (this.authService.login(email!, password!)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Credenciales inválidas';
    }
  } */
/* } */
  
  /* onSubmit() {
    if (this.form.invalid) return;

    this.http.post<{ token: string }>('/avi/auth/login', this.form.value)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: () => alert('Inicio de sesión fallido'),
      });
  }  */

