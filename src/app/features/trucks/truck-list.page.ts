import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-truck-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Listado de Camiones</h2>
      <!-- Botón registrar -->
      <div class="mt-6">
        <a routerLink="/trucks/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar nuevo camión
        </a>
      </div>
      <br>
      <!-- Encabezado tipo tabla -->
      <div class="grid grid-cols-7 gap-2 font-semibold bg-gray-200 p-2 rounded mb-2">
        <div>Marca</div>
        <div>Modelo</div>
        <div>Pintura</div>
        <div>Año</div>
        <div>Placa</div>
        <div>Remolque</div>
        <div class="text-center">Acciones</div>
      </div>

      <!-- Filas de camiones -->
      <div *ngFor="let t of trucks" class="grid grid-cols-7 gap-2 items-center bg-white p-2 mb-2 rounded shadow-sm">
        <div>{{ t.brand }}</div>
        <div>{{ t.model }}</div>
        <div>{{ t.paint }}</div>
        <div>{{ t.year }}</div>
        <div>{{ t.plate }}</div>
        <div>{{ t.trailer }}</div>
        <div class="flex gap-2 justify-center">
          <button disabled class="text-yellow-600 hover:underline">Editar</button>
          <button disabled class="text-red-600 hover:underline">Eliminar</button>
        </div>
      </div>

      
    </div>
  `
})


export class TruckListPage {
  trucks = [
    {
      id: 1,
      brand: 'Kenworth',
      model: 'T680',
      paint: 'Rojo',
      year: 2022,
      plate: 'ABC-123',
      trailer: 'Cisterna'
    },
    {
      id: 2,
      brand: 'Scania',
      model: 'R450',
      paint: 'Blanco',
      year: 2021,
      plate: 'XYZ-789',
      trailer: 'Plataforma'
    }
  ];
}

