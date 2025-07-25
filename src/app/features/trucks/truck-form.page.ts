import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-truck-form',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="p-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-6">Registrar camión</h2>

      <form [formGroup]="form" (ngSubmit)="submit()" class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <!-- Marca -->
        <div>
          <label class="block mb-1">Marca</label>
          <input formControlName="brand"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Modelo -->
        <div>
          <label class="block mb-1">Modelo</label>
          <input formControlName="model"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Pintura -->
        <div>
          <label class="block mb-1">Pintura</label>
          <input formControlName="paint"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Año -->
        <div>
          <label class="block mb-1">Año</label>
          <input type="number" formControlName="year"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Placa -->
        <div>
          <label class="block mb-1">Placa</label>
          <input formControlName="plate"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>

        <!-- Remolque -->
        <div>
          <label class="block mb-1">Remolque</label>
          <select formControlName="trailer" class="w-full px-4 py-2 border rounded">
            <option value="Plataforma">Plataforma</option>
            <option value="Cisterna">Cisterna</option>
            <option value="Contenedor">Contenedor</option>
            <option value="Tolva">Tolva</option>
            <option value="Lona">Lona</option>
            <option value="Grúa">Grúa</option>
            <option value="Frigorífico">Frigorífico</option>
            <option value="Calorífico">Calorífico</option>
            <option value="Jaula">Jaula</option>
          </select>
        </div>

        <!-- Botón guardar -->
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
export class TruckFormPage {
  form = new FormGroup({
    plate: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    paint: new FormControl('', Validators.required),
    year: new FormControl('', [
      Validators.required,
      Validators.min(1990),
      Validators.max(new Date().getFullYear() + 1)
    ]),
    trailer: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/trucks/resumen'], { state: this.form.value });
  }
}
