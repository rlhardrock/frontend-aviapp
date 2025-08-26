import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TruckService } from './truck.service';

@Component({
  standalone: true,
  selector: 'app-truck-resumen',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Resumen del camión</h2>

      <div class="bg-gray-100 p-4 rounded shadow mb-4 space-y-1">
        <!-- <p><strong>ID:</strong> {{ data?.id }}</p> -->
        <p><strong>Marca:</strong> {{ data?.brand }}</p>
        <p><strong>Modelo:</strong> {{ data?.model }}</p>
        <p><strong>Pintura:</strong> {{ data?.paint }}</p>
        <p><strong>Año:</strong> {{ data?.year }}</p>
        <p><strong>Placa:</strong> {{ data?.plate }}</p>
        <p><strong>Remolque:</strong> {{ data?.trailer }}</p>
      </div>

      <a routerLink="/trucks" (click)="clearStorage()" class="text-blue-600 underline">Volver al listado</a>
    </div>
  `
})
export class TruckResumenPage implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private truckService: TruckService
  ) {}

  ngOnInit() {
    // Intentar obtener de history.state
    if (history.state && Object.keys(history.state).length > 0) {
      // Guardar copia por si refresca
      localStorage.setItem('newTruck', JSON.stringify(history.state));
    } else {
      // Si no hay datos (por recarga), buscar en localStorage
      const stored = localStorage.getItem('newTruck');
      if (stored) {
        this.data = JSON.parse(stored);
      } else {
        // Si no hay algo en storage, solicitar al backend
        const id = this.route.snapshot.paramMap.get('id');
        if(id){
          this.truckService.getTruckById(id).subscribe({
            next: (truck: any) => {
              this.data = truck;
            },
            error: (err) => {
              console.error('Error al obtener camión:', err);
            }
          });
        }
      }
    }
  }

  clearStorage() {
    localStorage.removeItem('newTruck');
  }
}
