import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Listados de Usuarios</h2>
      <!-- Botón registrar -->
      <div class="mt-6">
        <a routerLink="/users/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar un Usuario «AviApp»
        </a>
      </div>
      <br>
      <!-- Encabezados -->
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto border-collapse rounded overflow-hidden">
          <thead class="bg-gray-200 text-left font-semibold">
            <tr>
              <th class="p-3">Licencia Prof.</th>
              <th class="p-3">Nombre</th>
              <th class="p-3">Apellido</th>
              <th class="p-3">Teléfono</th>
              <th class="p-3">NIT</th>
              <th class="p-3">Email</th>
              <th class="p-3">Rol</th>
              <th class="p-3">Estado</th>
              <th class="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <p class="text-red-600" *ngIf="!users || users.length === 0">No se encontraron usuarios.</p>
            <tr *ngFor="let user of users" class="hover:bg-gray-50 border-b">
              <td class="p-3">{{ user.licenseSup }}</td>
              <td class="p-3">{{ user.name }}</td>
              <td class="p-3">{{ user.lastName }}</td>
              <td class="p-3">{{ user.phone }}</td>
              <td class="p-3">{{ user.taxpayer }}</td>
              <td class="p-3">{{ user.email }}</td>
              <td class="p-3">{{ user.role }}</td>
              <td class="p-3">{{ user.status }}</td>
              <td class="p-3 text-center">
                <button disabled class="text-yellow-600 hover:underline">Editar</button>
                <button disabled class="text-red-600 hover:underline ml-2">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Botones -->
        <div class="flex justify-between items-center mt-4">
        <span>Página {{ data.page }} de {{ data.totalPages }}</span>
          <div>
            <button 
              (click)="loadUsers(data.page - 1)" 
              [disabled]="data.page === 1"
              class="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400">
              Anterior
            </button>
            <button 
              (click)="loadUsers(data.page + 1)" 
              [disabled]="data.page === data.totalPages"
              class="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400 ml-2">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>

  `
})
export class UserListPage implements OnInit {
  data: any = {};
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers(page = 1) {
    this.userService.getUsers().subscribe({
      next: (users) => {
        console.log('Respuesta del backend:', users);
        this.users = users;
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }
}
