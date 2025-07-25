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
      <div class="grid grid-cols-6 gap-2 bg-gray-200 p-3 font-semibold rounded">
        <div>Prof. Planta</div>
        <div>Prof. Del.</div>
        <div>Remision</div>
        <div>Empresa</div>
        <div>Remisionadas</div>
        <div class="text-center">Acciones</div>
      </div>

      <!-- Tabla de datos -->
  
          <div *ngFor="let benefit of benefits" class="grid grid-cols-6 gap-2 items-center bg-gray-50 p-3 mb-2 rounded border">
            <div>{{ benefit.licenseSup }}</div>
            <div>{{ benefit.license }}</div>
            <div>{{ benefit.idRemision }}</div>
            <div>{{ benefit.business }}</div>
            <div>{{ benefit.avesRemisionadas }}</div>
            <div class="flex gap-2 justify-center">
              <button disabled class="text-yellow-600 hover:underline">Editar</button>
              <button disabled class="text-red-600 hover:underline">Eliminar</button>
            </div>
          </div>
    </div>
  `
})
export class BenefitListPage {
  benefits = [
    { licenseSup: 'VETE-001', license: 'ZOO-001', idRemision: 'AVES-001', business: 'AVES-001', avesRemisionadas: 'AVES-001' },
    { licenseSup: 'VETE-002', license: 'AGR-002', idRemision: 'AVES-002', business: 'AVES-002', avesRemisionadas: 'AVES-002' },
  ];
}
