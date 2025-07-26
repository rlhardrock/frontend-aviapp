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
      <div class="grid grid-cols-9 gap-2 bg-gray-200 p-3 font-semibold rounded">
        <div>Licencia Prof.</div>
        <div>Nombre</div>
        <div>Apellido</div>
        <div>Teléfono</div>
        <div>NIT</div>
        <div>Email</div>
        <div>Rol</div>
        <div>Estado</div>
        <div class="text-center">Acciones</div>
      </div>

      <!-- Filas de usuarios -->
      <div *ngFor="let user of users" class="grid grid-cols-9 gap-2 items-center bg-gray-50 p-3 mb-2 rounded border">
        <div>{{ user.licenseSup }}</div>
        <div>{{ user.name }}</div>
        <div>{{ user.lastName }}</div>
        <div>{{ user.phone }}</div>
        <div>{{ user.taxpayer }}</div>
        <div>{{ user.email }}</div>
        <div>{{ user.role }}</div>
        <div>{{ user.status }}</div>
        <div class="flex gap-2 justify-center">
          <button disabled class="text-yellow-600 hover:underline">Editar</button>
          <button disabled class="text-red-600 hover:underline">Eliminar</button>
        </div>
      </div>
    </div>

  `
})
export class UserListPage implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        console.log('Respuesta del backend:', data);
        this.users = data.data;
      },
      error: (err) => console.error('Error cargando usuarios', err)
    });
  }
}
