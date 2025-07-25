import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-transporter-form',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
      <div class="p-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-6">Crear nuevo transportador</h2>

      <form [formGroup]="form" (ngSubmit)="submit()" class="grid grid-cols-1 md:grid-cols-2 gap-4">

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
export class TransporterFormPage {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{7,15}$/)
    ]),
    taxpayer: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/transporters/resumen'], { state: this.form.value });
  }
}
