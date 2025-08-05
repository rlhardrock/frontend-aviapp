import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../shared/services/user.service';
import { UserListInter } from '../../interfaces/user-list-inter';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6 ">
      <h2 class="text-2xl font-semibold mb-4">Listados de Usuarios</h2>
      <!-- Botón registrar -->
      <div class="mt-6 flex justify-between items-center">
        <a routerLink="/users/new"
          class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar un Usuario «AviApp»
        </a>
        <a routerLink="/dashboard"
           class="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-700">
          Ir al Tablero de Mando
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
              <!-- <th class="p-3">Estado</th> -->
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
              <!-- <td class="p-3">{{ user.status }}</td> -->
              <td class="p-3 text-center">
                <button (click)="editUser(user)" class="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-600">Editar</button>
                <button (click)="deleteUser(user.id)" class="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-700">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Botones -->
        <div class="flex justify-between items-center mt-4">
        <span>Página X de Z Pages </span>
          <div>
            <button 
              (click)="loadUsers()" 
              [disabled]=""
              class="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400">
              Anterior
            </button>
            <button 
              (click)="loadUsers()" 
              [disabled]=""
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
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(){
    this.loadUsers();
  }
  
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users: any) => {
        console.log('Respuesta del backend user-list:', users);
        this.users = users || [];
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }

  
  /* loadPagination() {
    this.userService.getUsers().subscribe({
      next: (res: any) => {
        this.totalItems = res.total;
        this.page = res.page;
        this.limit = res.limit;
        this.totalPages = Math.ceil(res.total / res.limit);
      },
      error: (err) => {
        console.error('Error al obtener paginación:', err);
      }
    });
  } */

  editUser(user: any) {
    this.router.navigate(['/users/edit', user.id], {
      state: user  // pasamos datos por history.state
    });
  }
    
  deleteUser(id: string) {
    if (!confirm('Seguro de eliminar este usuario?')) return;
  
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id); // Actualiza la lista local
      },
      error: (err) => {
        console.error('Error al eliminar usuario:', err);
        alert('No se pudo eliminar el usuario.');
      }
    });
  }

}
