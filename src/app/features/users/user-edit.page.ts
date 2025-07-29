import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="p-6 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Editar Usuario</h2>

        <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="space-y-4">
            <input formControlName="name" placeholder="Nombre" class="w-full p-2 border rounded" />
            <input formControlName="lastName" placeholder="Apellido" class="w-full p-2 border rounded" />
            <input formControlName="phone" placeholder="Teléfono" class="w-full p-2 border rounded" />
            <input formControlName="taxpayer" placeholder="Cédula" class="w-full p-2 border rounded" />
            <input formControlName="email" placeholder="Email" class="w-full p-2 border rounded" />
            <input type="date" formControlName="dateBirth" class="w-full p-2 border rounded" />
            
            <select formControlName="role" class="w-full p-2 border rounded">
            <option value="SUPERVISOR">Supervisor</option>
            <option value="DIRECTOR">Director</option>
            <option value="ADMINISTRADOR">Administrador</option>
            <option value="RECEPTOR">Receptor</option>
            </select>

            <select formControlName="status" class="w-full p-2 border rounded">
            <option value="HABILITADO">Habilitado</option>
            <option value="DESHABILITADO">Deshabilitado</option>
            </select>

            <input formControlName="licenseSup" placeholder="Licencia" class="w-full p-2 border rounded" />

            <button type="submit"
                    [disabled]="userForm.invalid"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Actualizar Cambios
            </button>
        </form>

        <a routerLink="/users" class="text-blue-600 underline mt-4 inline-block"> Volver</a>
        
    </div>

  `
})
export class UserEditPage implements OnInit {
  userForm!: FormGroup;
  userId!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(this.userId).subscribe(user => {
      this.userForm = this.fb.group({
        name: [user.name, Validators.required],
        lastName: [user.lastName, Validators.required],
        phone: [user.phone],
        taxpayer: [user.taxpayer],
        email: [user.email, [Validators.required, Validators.email]],
        dateBirth: [user.dateBirth],
        role: [user.role, Validators.required],
        status: [user.status, Validators.required],
        licenseSup: [user.licenseSup]
      });
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;
    this.userService.updateUser(this.userId, this.userForm.value).subscribe({
      next: (res) => {
        console.log('Usuario actualizado:', res);
        localStorage.setItem('updateUser', JSON.stringify(res.updateUser));
        this.router.navigate(['/users/resumen'], { state: res.updateUser })
      },
      error: err => {
        console.error('Error al actualizar:', err);
        alert('No se pudo actualizar el usuario.');
      }
    });
  }
}
