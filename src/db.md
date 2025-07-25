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
