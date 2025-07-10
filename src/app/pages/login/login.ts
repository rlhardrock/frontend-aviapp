import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error: string | null = null;

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.email === 'admin@example.com' && this.password === '123456') {
      this.error = null;
      this.router.navigate(['/dashboard']); // ajustar cuando exista esa ruta
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
