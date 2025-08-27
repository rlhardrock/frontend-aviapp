import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TruckService } from './truck.service';
import * as Papa from 'papaparse';

@Component({
  standalone: true,
  selector: 'app-truck-list',
  imports: [CommonModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatFormFieldModule,
            MatInputModule,
            ],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Listado de Camiones</h2>
      <!-- Botón registrar -->
      <div class="mt-6">
        <a routerLink="/trucks/new"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Registrar nuevo camión
        </a>
        <button (click)="fileInput.click()"
          class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Carga masiva de Camiones
        </button>
        <input type="file" #fileInput accept=".csv" (change)="onFileSelected($event)" hidden>
        <a routerLink="/dashboard"
           class="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-700">
          Ir al Tablero de Mando
        </a>
        <button (click)="logout()" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Cerrar Sesión
        </button>
      </div>
      <br>
      <!-- Encabezado tipo tabla -->
      <div class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Listado de Camiones</h2>

        <!-- Buscador -->
        <mat-form-field appearance="outline" class="w-full mb-4">
          <mat-label>Buscar</mat-label>
          <input matInput (keyup)="applyFilter($event)" placeholder="Filtrar por cualquier campo">
        </mat-form-field>

        <!-- Tabla -->
        <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8 w-full">

          <!-- Placa -->
          <ng-container matColumnDef="plate">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Placa</th>
            <td mat-cell *matCellDef="let truck">{{ truck.plate }}</td>
          </ng-container>

          <!-- Marca -->
          <ng-container matColumnDef="brand">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Marca</th>
            <td mat-cell *matCellDef="let truck">{{ truck.brand }}</td>
          </ng-container>

          <!-- Modelo -->
          <ng-container matColumnDef="model">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Modelo</th>
            <td mat-cell *matCellDef="let truck">{{ truck.model }}</td>
          </ng-container>

          <!-- Pintura -->
          <ng-container matColumnDef="paint">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Pintura</th>
            <td mat-cell *matCellDef="let truck">{{ truck.paint }}</td>
          </ng-container>

          <!-- Remolque -->
          <ng-container matColumnDef="trailer">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Remolque</th>
            <td mat-cell *matCellDef="let truck">{{ truck.trailer }}</td>
          </ng-container>

          <!-- Acciones -->
          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Acciones</th>
            <td mat-cell *matCellDef="let truck">
              <button mat-button color="primary" (click)="editTruck(truck)">Editar</button>
              <button mat-button color="warn" (click)="deleteTruck(truck.id)">Eliminar</button>
            </td>
          </ng-container>

          <!-- Renderizado -->
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>

        <!-- Paginador -->
        <mat-paginator [pageSize]="5" [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons>
        </mat-paginator>
      </div>
    </div>
  `
})

export class TruckListPage implements OnInit {
    displayedColumns: string[] = ['plate', 'brand', 'model', 'paint', 'trailer', 'actions'];
    dataSource= new MatTableDataSource<any>();
    trucks: any[] = [];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;    
    
    constructor(
      private truckService: TruckService,
      private router: Router
    ) {}
  
    ngOnInit(){
      this.loadTrucks();
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
    loadTrucks() {
      this.truckService.getTrucks().subscribe({
        next: (trucks: any) => {
          console.log('Respuesta del backend trucks-list:', trucks);
          this.dataSource = trucks || [];
        },
        error: (err) => {
          console.error('Error al obtener camiones:', err);
        }
      });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    logout() {
      localStorage.clear();
      this.router.navigate(['/login']);
    }

    editTruck(truck: any) {
      this.router.navigate(['/trucks/edit', truck.id], {
        state: truck  // pasamos datos por history.state
      });
    }
      
    deleteTruck(id: string) {
      if (!confirm('Seguro de eliminar este camión?')) return;
    
      this.truckService.deleteTruck(id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(truck => truck.id !== id); // Actualiza la lista local
        },
        error: (err) => {
          console.error('Error al eliminar camión:', err);
          alert('No se pudo eliminar el camión.');
        }
      });
    }

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      const file: File | null = input.files?.[0] || null;
      if (!file) return;
  
      Papa.parse(file, {
        header: true, // usa encabezados de CSV como keys
        skipEmptyLines: true,
        complete: (result: Papa.ParseResult<any>) => {
          const trucks: any[] = result.data;
          console.log('CSV Parseado:', trucks);
  
          this.truckService.bulkInsert(trucks).subscribe({
            next: (res: {message: string; invalid?: any[]}) => {
              if (res.invalid && res.invalid.length > 0) {
                alert(res.message); // alerta simple
                console.warn('Errores encontrados:', res.invalid);
              } else {
                alert(`Carga masiva completada con éxito, se insertaron: ${trucks.length - (res.invalid?.length || 0)} camiones`);
              }
            },
            error: (err: unknown) => {
              console.error('Error al enviar CSV:', err);
              alert('No se pudo procesar el archivo CSV.');
            }
          });
        }
      });
    }

    bulkUpload(trucks: any[]) {
      this.truckService.bulkUploadTrucks(trucks).subscribe({
        next: (res) => {
          console.log('Carga masiva exitosa:', res);
          alert(`Se cargaron ${trucks.length} camiones.`);
          this.loadTrucks();
        },
        error: (err) => {
          console.error('Error en carga masiva:', err);
          alert('No se pudo cargar el archivo.');
        }
      });
    }

}

