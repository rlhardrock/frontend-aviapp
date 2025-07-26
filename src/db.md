model User  
  sex
  licenseSup 
  name       
  lastName   
  phone      
  taxpayer      
  email         
  password   
  role       
  status     
  dateBirth   OK


model Truck 
  brand      
  model      
  paint      
  year      
  plate         
  trailer     OK
  

model Transporter
  name          
  lastName      
  phone         
  taxpayer         OK
  

model Company 
  name          
  business      
  phone      
  email         
  city       OK
  
  
model Professional 
  sex               
  name              
  lastName          
  phone               
  taxpayer           
  email              
  license            
  role              
  status           OK 
  

model Benefit 
  
  <!-- bloque 0 -->
  licenseSup  
  license 
       
  <!-- bloque 1 -->
  plate       
  business    
  taxpayer    
<!-- bloque 2 -->
  idRemision                     
  idPlanSanitario             
  regionProcedencia           
  granja                      
  galpon                      
  lineaAves                   
  sexo     (radio)                   
  edad                        
<!-- bloque 3 -->
  horaBeneficio  (date now)              
  turnoBeneficio              
  pesoPromedioAveGranja        
  avesPorGuacal                
  guacalesVacios               
  guacalesUsados               
  guacalExtra                  
  avesRemisionadas             
  avesEnGuacalExtra            
<!-- bloque 4 -->
  avesColgadas                 
  avesAsfixiadas               
  canalesDecomisadas           
  canalesDestrozadas           
<!-- bloque 5 -->
  peso1GuacalVacio             
  pesoTorre7Guacales           
  pesoPromedioAvePlanta   
       
  diferencialPesoGranjaPlanta  
  pesoTonLoteProcesada         
  canalesObtenidas             
  diferencialAvesEntrega       


Controller {/avi}
Mapped {/avi, GET} 

UsersController {/avi/users}
Mapped {/avi/users/user/register, POST} 
Mapped {/avi/users/user/list, GET} 
Mapped {/avi/users/user/role/:role, GET} 
Mapped {/avi/users/user/status/:status, GET} 
Mapped {/avi/users/user/taxpayer/:taxpayer, GET} 
Mapped {/avi/users/user/license/:license, GET} 
Mapped {/avi/users/user/id/:id, GET} 
Mapped {/avi/users/user/id/:id, PATCH} 
Mapped {/avi/users/user/id/:id, DELETE} 

BenefitsController {/avi/benefits}
Mapped {/avi/benefits/benefit/register, POST} 
Mapped {/avi/benefits/benefit/list, GET} 
Mapped {/avi/benefits/benefit/id/:id, GET} 
Mapped {/avi/benefits/benefit/idRemision/:idRemision, GET} 
Mapped {/avi/benefits/benefit/idPlanSanitario/:idPlanSanitario, GET} 
Mapped {/avi/benefits/benefit/business/:business, GET} 
Mapped {/avi/benefits/benefit/licenseSup/:licenseSup, GET} 
Mapped {/avi/benefits/benefit/license/:license, GET} 
Mapped {/avi/benefits/benefit/plate/:plate, GET} 
Mapped {/avi/benefits/benefit/taxpayer/:taxpayer, GET} 
Mapped {/avi/benefits/benefit/id/:id, PATCH} 
Mapped {/avi/benefits/benefit/id/:id, DELETE} 

CompaniesController {/avi/companies}
Mapped {/avi/companies/company/register, POST} 
Mapped {/avi/companies/company/list, GET} 
Mapped {/avi/companies/company/id/:id, GET} 
Mapped {/avi/companies/company/business/:business, GET} 
Mapped {/avi/companies/company/name/:name, GET} 
Mapped {/avi/companies/company/id/:id, PATCH} 
Mapped {/avi/companies/company/id/:id, DELETE} 

TransportersController {/avi/transporters}
Mapped {/avi/transporters/transporter/register, POST} 
Mapped {/avi/transporters/transporter/list, GET} 
Mapped {/avi/transporters/transporter/id/:id, GET} 
Mapped {/avi/transporters/transporter/taxpayer/:taxpayer, GET} 
Mapped {/avi/transporters/transporter/id/:id, PATCH} 
Mapped {/avi/transporters/transporter/id/:id, DELETE} 

ProfessionalsController {/avi/professionals}
Mapped {/avi/professionals/professional/register, POST} 
Mapped {/avi/professionals/professional/list, GET} 
Mapped {/avi/professionals/professional/id/:id, GET} 
Mapped {/avi/professionals/professional/taxpayer/:taxpayer, GET} 
Mapped {/avi/professionals/professional/license/:license, GET} 
Mapped {/avi/professionals/professional/role/:role, GET} 
Mapped {/avi/professionals/professional/status/:status, GET} 
Mapped {/avi/professionals/professional/id/:id, PATCH} 
Mapped {/avi/professionals/professional/id/:id, DELETE} 

TrucksController {/avi/trucks}
Mapped {/avi/trucks/truck/register, POST} 
Mapped {/avi/trucks/truck/list, GET} 
Mapped {/avi/trucks/truck/id/:id, GET} 
Mapped {/avi/trucks/truck/plate/:plate, GET} 
Mapped {/avi/trucks/truck/brand, GET} 
Mapped {/avi/trucks/truck/paint, GET} 
Mapped {/avi/trucks/truck/id/:id, PATCH} 
Mapped {/avi/trucks/truck/id/:id, DELETE} 

✅ Prisma conectado.
Nest application successfully started