import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, MatIcon],
  template: `
    <div class="p-6">
      <!-- Header con título y logout -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-center flex-1">Tablero de Mando</h1>
        <button mat-raised-button (click)="logout()"
          class="!bg-red-600 !text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold hover:!bg-red-700 transition flex items-center gap-2">
          <mat-icon>logout</mat-icon>
          Salir
        </button>
      </div>

      <!-- Grid de módulos -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a *ngFor="let module of modules"
          [routerLink]="['/', module.route]"
          class="block p-6 rounded-xl shadow-lg bg-white border hover:shadow-2xl transition-all duration-200 cursor-pointer">
          <h2 class="text-xl font-semibold text-gray-800">{{ module.name }}</h2>
          <p class="text-sm text-gray-500 mt-2">Administración de {{ module.name.toLowerCase() }}</p>
        </a>
      </div>
    </div>
  `
})
export class DashboardPage {
  modules = [
    { name: 'Usuarios', route: 'users' },
    { name: 'Profesionales', route: 'professionals' },
    { name: 'Beneficios', route: 'benefits' },
    { name: 'Camiones', route: 'trucks' },
    { name: 'Transportadores', route: 'transporters' },
    { name: 'Empresas', route: 'companies' },
  ];

  constructor(
    private router: Router
  ) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
