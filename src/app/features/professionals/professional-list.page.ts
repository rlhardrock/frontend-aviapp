import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-professional-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Listado de Profesionales</h2>
      <!-- Botón registrar -->
      <div class="mt-6">
        <a routerLink="/professionals/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar un Profesional
        </a>
      </div>
      <br>
      <!-- Encabezados -->
      <div class="grid grid-cols-9 gap-2 bg-gray-200 p-3 font-semibold rounded">
        <div>Nombre</div>
        <div>Apellido</div>
        <div>Teléfono</div>
        <div>Cedula</div>
        <div>Email</div>
        <div>Licencia Prof.</div>
        <div>Rol</div>
        <div>Estado</div>
        <div class="text-center">Acciones</div>
      </div>

      <!-- Filas de usuarios -->
      <div *ngFor="let prof of professionals" class="grid grid-cols-9 gap-2 items-center bg-gray-50 p-3 mb-2 rounded border">
        <div>{{ prof.name }}</div>
        <div>{{ prof.lastName }}</div>
        <div>{{ prof.phone }}</div>
        <div>{{ prof.taxpayer }}</div>
        <div>{{ prof.email }}</div>
        <div>{{ prof.license }}</div>
        <div>{{ prof.role }}</div>
        <div>{{ prof.status }}</div>
        <div class="flex gap-2 justify-center">
          <button disabled class="text-yellow-600 hover:underline">Editar</button>
          <button disabled class="text-red-600 hover:underline">Eliminar</button>
        </div>
      </div>
    </div>
  `
})
export class ProfessionalListPage {
  professionals = [
    { name: 'Ana', lastName: 'María', phone: 456456, taxpayer: 456456, email: 'gagaga', license: 456789, role: 'Veterinaria', status: 'biche' },
  ];
}
