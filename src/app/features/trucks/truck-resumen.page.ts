import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-truck-resumen',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Resumen del camión</h2>

      <div class="bg-gray-100 p-4 rounded shadow mb-4 space-y-1">
        <!-- <p><strong>ID:</strong> {{ data?.id }}</p> -->
        <p><strong>Marca:</strong> {{ data?.brand }}</p>
        <p><strong>Modelo:</strong> {{ data?.model }}</p>
        <p><strong>Pintura:</strong> {{ data?.paint }}</p>
        <p><strong>Año:</strong> {{ data?.year }}</p>
        <p><strong>Placa:</strong> {{ data?.plate }}</p>
        <p><strong>Remolque:</strong> {{ data?.trailer }}</p>
      </div>

      <a routerLink="/trucks" class="text-blue-600 underline">← Volver al listado</a>
    </div>
  `
})
export class TruckResumenPage implements OnInit {
  data: any;

  ngOnInit() {
    this.data = history.state;
  }
}
