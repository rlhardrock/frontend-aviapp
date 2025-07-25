import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-transporter-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Listado de Transportadores</h2>
      <!-- Botón registrar -->
      <div class="mt-6">
        <a routerLink="/transporters/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar nuevo transportador
        </a>
      </div>
      <br>
      <!-- Encabezados -->
      <div class="grid grid-cols-5 gap-2 bg-gray-200 p-3 font-semibold rounded">
        <div>Nombre</div>
        <div>Apellido</div>
        <div>Teléfono</div>
        <div>NIT</div>
        <div class="text-center">Acciones</div>
      </div>

      <!-- Filas de usuarios -->
      <div *ngFor="let trans of transporters" class="grid grid-cols-5 gap-2 items-center bg-gray-50 p-3 mb-2 rounded border">
        <div>{{ trans.name }}</div>
        <div>{{ trans.lastName }}</div>
        <div>{{ trans.phone }}</div>
        <div>{{ trans.taxpayer }}</div>
        <div class="flex gap-2 justify-center">
          <button disabled class="text-yellow-600 hover:underline">Editar</button>
          <button disabled class="text-red-600 hover:underline">Eliminar</button>
        </div>
      </div>
    </div>
  `
})
export class TransporterListPage {
  transporters = [
    { name: 'Luis', lastName: 'Gómez', phone: 12345698, taxpayer: 45645654 },
  ];
}
