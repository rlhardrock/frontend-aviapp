import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-benefit-form',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="p-6 max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">Proceso Beneficio</h2>

      <form [formGroup]="form" (ngSubmit)="submit()" class="grid grid-cols-1 md:grid-cols-2 gap-4">
         <!-- Bloque 0 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Licencias</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1">Licencia Prof.Planta</label>
            <input type="text" formControlName="licenseSup"
                  class="w-full px-4 py-2 border rounded"
                  placeholder="" />
          </div>
          <div>
            <label class="block mb-1">Licencia Prof. Remisión</label>
            <input type="text" formControlName="license"
                  class="w-full px-4 py-2 border rounded"
                  placeholder="" />
          </div>
        </div>
      </div>
    <!-- Bloque 1 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Empresa</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block mb-1">Empresa</label>
            <input type="text" formControlName="business"
                  class="w-full px-4 py-2 border rounded"
                  placeholder="" />
          </div>
          <div>
            <label class="block mb-1">Cédula Conductor</label>
            <input type="text" formControlName="taxpayer"
                  class="w-full px-4 py-2 border rounded"
                  placeholder="" />
          </div>
          <div>
          <label class="block mb-1">Placa Vehiculo</label>
          <input type="text" formControlName="plate"
                  class="w-full px-4 py-2 border rounded"
                  placeholder="" />
          </div>
        </div>
      </div>

    <!-- Bloque 2 -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Datos sanitarios</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block mb-1">ID Remisión</label>
          <input type="text" formControlName="idRemision"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">ID Plan Sanitario</label>
          <input type="text" formControlName="idPlanSanitario"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Región de Procedencia</label>
          <input type="text" formControlName="regionProcedencia"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Granja</label>
          <input type="text" formControlName="granja"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Galpón</label>
          <input type="text" formControlName="galpon"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Línea de Aves</label>
          <input type="text" formControlName="lineaAves"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Edad</label>
          <input type="text" formControlName="edad"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <!-- Sexo -->
        <div class="md:col-span-1">
          <label class="block mb-2 font-medium">Sexo</label>
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-2">
              <input type="radio" formControlName="sexo" name="sexo" value="Macho" class="accent-blue-600" /> M
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" formControlName="sexo" name="sexo" value="Mixto" class="accent-yellow-600" /> X
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" formControlName="sexo" name="sexo" value="Hembra" class="accent-pink-600" /> F
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Bloque 3 -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Beneficio</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block mb-1">Hora Beneficio</label>
          <input type="datetime-local" formControlName="horaBeneficio"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Turno</label>
          <input type="text" formControlName="turnoBeneficio"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Peso Prom. Aves Granja</label>
          <input type="text" formControlName="pesoPromedioAveGranja"
                class="w-full px-4 py-2 border rounded"
                placeholder="Kg" />
        </div>
        <div>
          <label class="block mb-1">Guacales usados</label>
          <input type="text" formControlName="guacalesUsados"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Aves por guacal</label>
          <input type="text" formControlName="avesPorGuacal"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Guacales vacíos</label>
          <input type="text" formControlName="guacalesVacios"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Guacal extra</label>
          <input type="text" formControlName="guacalExtra"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Aves en guacal extra</label>
          <input type="text" formControlName="avesEnGuacalExtra"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Aves remisionadas</label>
          <input type="text" formControlName="avesRemisionadas"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        
      </div>
    </div>

    <!-- Bloque 4 -->
    <div>
      <h3 class="text-lg font-semibold mb-4">Resultados</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block mb-1">Aves colgadas</label>
          <input type="text" formControlName="avesColgadas"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Aves asfixiadas</label>
          <input type="text" formControlName="avesAsfixiadas"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Canales decom.</label>
          <input type="text" formControlName="canalesDecomisadas"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
        <div>
          <label class="block mb-1">Canales destr.</label>
          <input type="text" formControlName="canalesDestrozadas"
                class="w-full px-4 py-2 border rounded"
                placeholder="" />
        </div>
      </div>
    </div>
       <!-- Bloque 5 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Pesos</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block mb-1">Peso 1 guacal vacío</label>
              <input type="text" formControlName="peso1GuacalVacio"
                    class="w-full px-4 py-2 border rounded"
                    placeholder="Kg" />
            </div>
            <div>
              <label class="block mb-1">Peso torre 7 guacales </label>
              <input type="text" formControlName="pesoTorre7Guacales"
                    class="w-full px-4 py-2 border rounded"
                    placeholder="Kg" />
            </div>
            <div>
              <label class="block mb-1">Peso prom. ave planta</label>
              <input type="text" formControlName="pesoPromedioAvePlanta"
                    class="w-full px-4 py-2 border rounded"
                    placeholder="Kg" />
            </div>
          </div>
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
export class BenefitFormPage {
  form = new FormGroup({
    // Bloque 0 - Required License Information
    licenseSup: new FormControl('', Validators.required),
    license: new FormControl('', Validators.required),
  
    // Bloque 1 - Required Company Information
    plate: new FormControl('', Validators.required),
    business: new FormControl('', Validators.required),
    taxpayer: new FormControl(''),
  
    // Bloque 2 - Farm Information (all optional)
    idRemision: new FormControl(''),
    idPlanSanitario: new FormControl(''),
    regionProcedencia: new FormControl(''),
    granja: new FormControl(''),
    galpon: new FormControl(''),
    lineaAves: new FormControl(''),
    sexo: new FormControl(''),
    edad: new FormControl(''),
  
    // Bloque 3 - Processing Information (only time is required)
    horaBeneficio: new FormControl(new Date(), Validators.required),
    turnoBeneficio: new FormControl(''),
    pesoPromedioAveGranja: new FormControl(''),
    avesPorGuacal: new FormControl(''),
    guacalesVacios: new FormControl(''),
    guacalesUsados: new FormControl(''),
    guacalExtra: new FormControl(''),
    avesRemisionadas: new FormControl(''),
    avesEnGuacalExtra: new FormControl(''),
  
    // Bloque 4 - Results (all optional)
    avesColgadas: new FormControl(''),
    avesAsfixiadas: new FormControl(''),
    canalesDecomisadas: new FormControl(''),
    canalesDestrozadas: new FormControl(''),
  
    // Bloque 5 - Weights (all optional)
    peso1GuacalVacio: new FormControl(''),
    pesoTorre7Guacales: new FormControl(''),
    pesoPromedioAvePlanta: new FormControl('')
  });

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/benefits/resumen'], { state: this.form.value });
  }
}
