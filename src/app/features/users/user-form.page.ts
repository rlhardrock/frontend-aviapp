import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-form',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="p-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-6">Crear nuevo usuario</h2>

      <form [formGroup]="form" (ngSubmit)="submit()" class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  [disabled]="form.invalid"
                  class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Guardar
          </button>
        </div>

      </form>
    </div>

  `
})
export class UserFormPage {
  form = new FormGroup({
    sex: new FormControl('', Validators.required),
    licenseSup: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{7,15}$/)
    ]),
    taxpayer: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    role: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    dateBirth: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  submit() {
    const data = this.form.value;
    this.router.navigate(['/users/resumen'], { state: data });
  }
}
