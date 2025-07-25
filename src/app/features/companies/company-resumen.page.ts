import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-company-resumen',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Resumen de la empresa</h2>

      <div class="bg-gray-100 p-4 rounded shadow mb-4">
        <p><strong>Empresa:</strong> {{ data?.name }}</p>
        <p><strong>NIT:</strong> {{ data?.business }}</p>
        <p><strong>Teléfono:</strong> {{ data?.phone }}</p>
        <p><strong>Email:</strong> {{ data?.email }}</p>
        <p><strong>Ciudad:</strong> {{ data?.city }}</p>
      </div>

      <a routerLink="/companies" class="text-blue-600 underline">← Volver al listado</a>
    </div>
  `
})
export class CompanyResumenPage implements OnInit {
  data: any;

  ngOnInit() {
    this.data = history.state;
  }
}
