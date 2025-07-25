import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',   
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
        <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
  <!-- Encabezado -->
  <div class="text-center space-y-1 mb-6">
    <h1 class="text-2xl font-extrabold text-gray-800">PROCESAMIENTO DE PRUEBAS DE SOFTWARE</h1>
    <h2 class="text-lg font-semibold text-gray-700">3 1 1 8 2 7 3</h2>
    <p class="text-sm text-gray-600">Centro de Diseño e Innovación Tecnológica Industrial</p>
    <p class="text-sm text-gray-600 font-medium">SENA</p>
  </div>

  <!-- Formulario -->
  <form [formGroup]="form" (ngSubmit)="onSubmit()" class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar sesión AVIAPP</h2>

    <div class="mb-4">
      <label class="block mb-1 text-sm font-medium text-gray-700">Email: sena2025-sena.com</label>
      <input
        type="email"
        formControlName="email"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="email@domain.com"
      />
    </div>

    <div class="mb-6">
      <label class="block mb-1 text-sm font-medium text-gray-700">Contraseña: soysena123</label>
      <input
        type="password"
        formControlName="password"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="********"
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
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const { email, password } = this.form.value;
    const validEmail = 'admin@aves.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      // Simular sesión
      localStorage.setItem('token', 'fake-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
  
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
}
