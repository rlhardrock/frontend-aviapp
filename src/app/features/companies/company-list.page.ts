import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-company-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Listado de empresas</h2>
      <!-- Botón registrar -->
      <div class="mt-6">
        <a routerLink="/companies/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar Empresa
        </a>
      </div>
      <br>
      <!-- Encabezados -->
      <div class="grid grid-cols-6 gap-2 bg-gray-200 p-3 font-semibold rounded">
        <div>Empresa</div>
        <div>NIT</div>
        <div>Teléfono</div>
        <div>Email</div>
        <div>Ciudad</div>
        <div class="text-center">Acciones</div>
      </div>

      <!-- Filas de empresas py-2 border-b-->
      <div *ngFor="let company of companies" class="grid grid-cols-6 gap-2 items-center bg-gray-50 p-3 mb-2 rounded border">
        <div>{{ company.name }}</div>
        <div>{{ company.business }}</div>
        <div>{{ company.phone }}</div>
        <div>{{ company.email }}</div>
        <div>{{ company.city }}</div>
        
        <div class="flex gap-2 justify-center">
          <button disabled class="text-yellow-600 hover:underline">Editar</button>
          <button disabled class="text-red-600 hover:underline">Eliminar</button>
        </div>
      </div>
    </div>
  `
})
export class CompanyListPage {
  companies = [
    { name: 'Frigorífico Central S.A.', business: '900123456', phone: 3001234567, email: 'frigo@frigo.com', city: 'Bogota' },
  ];
}
