import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-professional-resumen',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Resumen del profesional</h2>

      <div class="bg-gray-100 p-4 rounded shadow mb-4 space-y-1">
        <p><strong>Licencia:</strong> {{ data?.license }}</p>
        <p><strong>Estado:</strong> {{ data?.status }}</p>
        <p><strong>Nombre:</strong> {{ data?.name }}</p>
        <p><strong>Apellido:</strong> {{ data?.lastName }}</p>
        <p><strong>Teléfono:</strong> {{ data?.phone }}</p>
        <p><strong>Cédula:</strong> {{ data?.taxpayer }}</p>
        <p><strong>Email:</strong> {{ data?.email }}</p>
        <p><strong>Rol:</strong> {{ data?.role }}</p>
      </div>

      <a routerLink="/professionals" class="text-blue-600 underline">← Volver al listado</a>
    </div>
  `
})
export class ProfessionalResumenPage implements OnInit {
  data: any;

  ngOnInit() {
    this.data = history.state;
  }
}
