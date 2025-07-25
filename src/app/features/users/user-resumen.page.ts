import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-resumen',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Resumen del nuevo usuario</h2>

      <div class="bg-gray-100 p-4 rounded shadow mb-4 space-y-1">
        <p><strong>Licencia:</strong> {{ data?.licenseSup }}</p>
        <p><strong>Nombre:</strong> {{ data?.name }}</p>
        <p><strong>Apellido:</strong> {{ data?.lastName }}</p>
        <p><strong>Teléfono:</strong> {{ data?.phone }}</p>
        <p><strong>Cédula:</strong> {{ data?.taxpayer }}</p>
        <p><strong>Email:</strong> {{ data?.email }}</p>
        <!-- <p><strong>Contraseña:</strong> {{ data?.password }}</p> -->
        <p><strong>Rol:</strong> {{ data?.role }}</p>
        <p><strong>Estado:</strong> {{ data?.status }}</p>
        <p><strong>Fecha de nacimiento:</strong> {{ data?.dateBirth | date: 'longDate' }}</p>
      </div>

      <a routerLink="/users" class="text-blue-600 underline">← Volver al listado</a>
    </div>
  `
})
export class UserResumenPage implements OnInit {
  data: any;

  ngOnInit() {
    this.data = history.state;
  }
}
