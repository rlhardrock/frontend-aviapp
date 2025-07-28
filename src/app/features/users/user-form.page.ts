import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';

@Component({
  standalone: true,
  selector: 'app-user-form',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="p-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-6">Crear nuevo usuario</h2>

      <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="md:col-span-2">
          <label class="block mb-2 font-medium">Sexo</label>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2">
              <input type="radio"
                    formControlName="sex"
                    value="Masculino"
                    class="accent-blue-600" />
              Masculino
            </label>
            <label class="flex items-center gap-2">
              <input type="radio"
                    formControlName="sex"
                    value="Femenino"
                    class="accent-pink-600" />
              Femenino
            </label>
          </div>
        </div>

        <!-- License Sup -->
        <div>
          <label class="block mb-1">Licencia</label>
          <input type="text" formControlName="licenseSup"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Nombre -->
        <div>
          <label class="block mb-1">Nombre</label>
          <input type="text" formControlName="name"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Apellido -->
        <div>
          <label class="block mb-1">Apellido</label>
          <input type="text" formControlName="lastName"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Teléfono -->
        <div>
          <label class="block mb-1">Teléfono</label>
          <input type="tel" formControlName="phone"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- NIT / Taxpayer -->
        <div>
          <label class="block mb-1">Cédula</label>
          <input type="text" formControlName="taxpayer"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Email -->
        <div>
          <label class="block mb-1">Email</label>
          <input type="email" formControlName="email"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Contraseña -->
        <div>
          <label class="block mb-1">Contraseña</label>
          <input type="password" formControlName="password"
                class="w-full px-4 py-2 border rounded"
                placeholder="********" />
        </div>

        <!-- Rol -->
        <div>
          <label class="block mb-1">Rol</label>
          <select formControlName="role"
                  class="w-full px-4 py-2 border rounded">
            <option value="DIRECTOR">Director</option>
            <option value="ADMINISTRADOR">Administrador</option>
            <option value="SUPERVISOR">Supervisor</option>
            <option value="RECEPTOR">Receptor</option>
          </select>
        </div>

        <!-- Estado -->
        <div>
          <label class="block mb-1">Estado</label>
          <select formControlName="status"
                  class="w-full px-4 py-2 border rounded">
            <option value="HABILITADO">Habilitado</option>
            <option value="INHABILITADO">Inhabilitado</option>
          </select>
        </div>

        <!-- Fecha de nacimiento -->
        <div>
          <label class="block mb-1">Fecha de nacimiento</label>
          <input type="date" formControlName="dateBirth"
                class="w-full px-4 py-2 border rounded" />
        </div>

        <!-- Botón enviar -->
        <div class="md:col-span-2 mt-4">
          <button type="submit"
                  [disabled]="loading"
                  class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                  {{ loading ? 'Registrando...' : 'Registrar usuario' }}
          </button>
        </div>

      </form>
    </div>

  `
})
export class UserFormPage {

  userForm: FormGroup;
  loading: boolean = false;
  error: string | null = null;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
      this.userForm = this.fb.group({
        sex:  ['', Validators.required],
        licenseSup:  ['', Validators.required],
        name: ['', Validators.required],
        lastName:  ['', Validators.required],
        phone:  ['', 
          Validators.required,
          Validators.pattern(/^\d{7,15}$/)
        ],
        taxpayer: ['', Validators.required],
        email:  ['', [Validators.required, Validators.email]],
        password:  ['', [
          Validators.required,
          Validators.minLength(6)
        ]],
        role:  ['', Validators.required],
        status:  ['', Validators.required],
        dateBirth:  ['', Validators.required],
      });
    } 

  onSubmit() {
    if (this.userForm.invalid) return;

    this.loading = true;
    this.error = null;

    this.userService.registerUser(this.userForm.value).subscribe({
      next: (res) => {
        console.log('Usuario creado:', res);
        this.router.navigate(['/users/resumen']);
      },
      error: (err) => {
        console.error('Error al registrar usuario:', err);
        this.error = 'Error al registrar usuario';
        this.loading = false;
      }
    });
  }
}
