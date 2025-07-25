import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-benefit-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Listado de beneficios</h2>
      <!-- Botón registrar -->
      <div class="mt-6">
        <a routerLink="/benefits/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar un Beneficio
        </a>
      </div>
      <br>
      <!-- Encabezados -->
    </div>
  `
})
export class BenefitListPage {
  benefits = [
    { id_remision: 'AVES-001', status: 'Confirmado' },
    { id_remision: 'AVES-002', status: 'Pendiente' },
  ];
}
