import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-benefit-resumen',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Resumen del Beneficio</h2>

      <div class="bg-gray-100 p-4 rounded shadow mb-4">
        <h2 class="text-lg font-semibold mb-4">LICENCIAS</h2>
        <p><strong>Licencia Profesional de Planta:</strong> {{ data?.licenseSup }}</p>  
        <p><strong>Licencia Profesional de Remisión:</strong> {{ data?.license }}</p>
        <p><strong>Licencia Profesional de Sanidad:</strong> {{ data?.license }}</p>
        <br>
        <h2 class="text-lg font-semibold mb-4">EMPRESA</h2>
        <p><strong>Empresa:</strong> {{ data?.business }}</p>
        <p><strong>Cédula Conductor:</strong> {{ data?.taxpayer }}</p>
        <p><strong>Placa:</strong> {{ data?.plate }}</p>
        <br>
        <h2 class="text-lg font-semibold mb-4">DATOS SANITARIOS</h2>
        <p><strong>ID Remisión:</strong> {{ data?.idRemision }}</p>
        <p><strong>ID Plan Sanitario:</strong> {{ data?.idPlanSanitario }}</p>
        <p><strong>Granja:</strong> {{ data?.granja }}</p>
        <p><strong>Galpon:</strong> {{ data?.galpon }}</p>
        <p><strong>Línea de Aves:</strong> {{ data?.lineaAves }}</p>
        <p><strong>Sexo:</strong> {{ data?.sexo }}</p>
        <p><strong>Edad:</strong> {{ data?.edad }}</p>  
        <br>
        <h2 class="text-lg font-semibold mb-4">BENEFICIO</h2>
        <p><strong>Fecha:</strong> {{ data?.horaBeneficio }}</p>
        <p><strong>Turno:</strong> {{ data?.turnoBeneficio }}</p>
        <p><strong>Peso Promedio Ave Planta:</strong> {{ data?.pesoPromedioAvePlanta }}</p>
        <p><strong>Aves por Guacal:</strong> {{ data?.avesPorGuacal }}</p>
        <p><strong>Guacales Vacíos:</strong> {{ data?.guacalesVacios }}</p>
        <p><strong>Guacales Usados:</strong> {{ data?.guacalesUsados }}</p>
        <p><strong>Guacal Extra:</strong> {{ data?.guacalExtra }}</p>
        <p><strong>Aves Remisionadas:</strong> {{ data?.avesRemisionadas }}</p>
        <p><strong>Aves en Guacal Extra:</strong> {{ data?.avesEnGuacalExtra }}</p>
        <br>
        <h2 class="text-lg font-semibold mb-4">HECHOS</h2>
        <p><strong>Aves Colgadas:</strong> {{ data?.avesColgadas }}</p>
        <p><strong>Aves Asfixiadas:</strong> {{ data?.avesAsfixiadas }}</p>
        <p><strong>Canales Decomisadas:</strong> {{ data?.canalesDecomisadas }}</p>
        <p><strong>Canales Destrozadas:</strong> {{ data?.canalesDestrozadas }}</p>
        <br>
        <h2 class="text-lg font-semibold mb-4">PESAJE</h2>
        <p><strong>Peso 1 Guacal Vacío:</strong> {{ data?.peso1GuacalVacio }}</p>
        <p><strong>Peso Torre 7 Guacales:</strong> {{ data?.pesoTorre7Guacales }}</p>
        <p><strong>Peso Ton Lote Procesada:</strong> {{ data?.pesoTonLoteProcesada }}</p>

        <!-- <p><strong>Canales Obtenidas:</strong> {{ data?.canalesObtenidas }}</p>
        <p><strong>Diferencial Aves Entrega:</strong> {{ data?.diferencialAvesEntrega }}</p>
        <p><strong>Diferencial Peso Granja Planta:</strong> {{ data?.diferencialPesoGranjaPlanta }}</p> -->
      </div>

      <a routerLink="/benefits" class="text-blue-600 underline">← Volver al listado</a>
    </div>
  `
})
export class BenefitResumenPage implements OnInit {
  data: any;

  ngOnInit() {
    this.data = history.state;
  }
}
