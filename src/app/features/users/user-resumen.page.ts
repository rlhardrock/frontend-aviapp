import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';

@Component({
  standalone: true,
  selector: 'app-user-resumen',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Resumen del usuario</h2>
      <div class="mt-6 flex justify-between items-center">
        <a routerLink="/dashboard"
           class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Ir al Tablero de Mando
        </a>
        <br>
      </div>
      <div class="bg-gray-200 p-4 rounded shadow mb-4 space-y-1">
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

      <a routerLink="/users" (click)="clearStorage()" class="bg-blue-600 text-white-600 px-4 py-2 rounded hover:bg-green-600"> Volver al listado</a>

    </div>
  `
})
export class UserResumenPage implements OnInit {
  data: any;

  constructor(private userService: UserService) {}
  
  ngOnInit() {
    // 1. Intentar obtener de history.state
    if (history.state && Object.keys(history.state).length > 0) {
      this.data = history.state;
    } else {
      // 2. Si no hay datos (por recarga), buscar en localStorage
      const stored = localStorage.getItem('newUser');
      if (stored) {
        this.data = JSON.parse(stored);
      }
    }
  }

  clearStorage() {
    localStorage.removeItem('newUser');
  }

}
