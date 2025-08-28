import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TruckService } from './truck.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-truck-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="p-6 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Actualizar Información del Camion</h2>

        <form [formGroup]="truckForm" (ngSubmit)="onSubmit()" class="space-y-4">
            <input formControlName="brand" placeholder="Marca" class="w-full p-2 border rounded" />
            <input formControlName="model" placeholder="Modelo" class="w-full p-2 border rounded" />
            <input formControlName="paint" placeholder="Pintura" class="w-full p-2 border rounded" />
            <input formControlName="year" placeholder="Año" class="w-full p-2 border rounded" />
            <input formControlName="plate" placeholder="Matricula" class="w-full p-2 border rounded" />         
            <select formControlName="trailer" class="w-full p-2 border rounded">
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

            <button type="submit"
                    [disabled]="truckForm.invalid"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Actualizar Cambios
            </button>
        </form>
    </div>

  `
})
export class TruckEditPage implements OnInit {
  truckForm!: FormGroup;
  truckId!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private truckService: TruckService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.truckId = this.route.snapshot.paramMap.get('id')!;
    this.truckService.getTruckById(this.truckId).subscribe(truck => {
      this.truckForm = this.fb.group({
        brand: [truck.brand],
        model: [truck.model],
        paint: [truck.paint],
        year: [truck.year],
        plate: [truck.email, [Validators.required]],
        trailer: [truck.trailer],
      });
    });
  }

  onSubmit(): void {
    if (this.truckForm.invalid) return;
    this.truckService.updateTruck(this.truckId, this.truckForm.value).subscribe({
      next: (res) => {
        console.log('Camión actualizado:', res);
        localStorage.setItem('updateTruck', JSON.stringify(res.updateTruck));
        this.router.navigate(['/trucks'], { state: res.updateTruck })
      },
      error: err => {
        console.error('Error al actualizar el camión, ', err);
        alert('No se pudo actualizar el camión.');
      }
    });
  }
}
