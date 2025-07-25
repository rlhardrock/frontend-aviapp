import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Tablero de Mando</h1>

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
}
