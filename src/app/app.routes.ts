import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./features/auth/login.page').then(m => m.LoginPage) },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.page').then(m => m.DashboardPage) },
    { path: 'users', loadComponent: () => import('./features/users/user-list.page').then(m => m.UserListPage) },
    { path: 'users/new', loadComponent: () => import('./features/users/user-form.page').then(m => m.UserFormPage) },
    { path: 'users/resumen', loadComponent: () => import('./features/users/user-resumen.page').then(m => m.UserResumenPage) },
    { path: 'users/edit/:id', loadComponent: () => import('./features/users/user-edit.page').then(m => m.UserEditPage) },
    { path: 'professionals', loadComponent: () => import('./features/professionals/professional-list.page').then(m => m.ProfessionalListPage), },
    { path: 'professionals/new', loadComponent: () => import('./features/professionals/professional-form.page').then(m => m.ProfessionalFormPage), },
    { path: 'professionals/resumen', loadComponent: () => import('./features/professionals/professional-resumen.page').then(m => m.ProfessionalResumenPage), },
    { path: 'benefits', loadComponent: () => import('./features/benefits/benefit-list.page').then(m => m.BenefitListPage), },
    { path: 'benefits/new', loadComponent: () => import('./features/benefits/benefit-form.page').then(m => m.BenefitFormPage), },
    { path: 'benefits/resumen', loadComponent: () => import('./features/benefits/benefit-resumen.page').then(m => m.BenefitResumenPage), },
    { path: 'trucks', loadComponent: () => import('./features/trucks/truck-list.page').then(m => m.TruckListPage), },
    { path: 'trucks/new', loadComponent: () => import('./features/trucks/truck-form.page').then(m => m.TruckFormPage), },
    { path: 'trucks/resumen', loadComponent: () => import('./features/trucks/truck-resumen.page').then(m => m.TruckResumenPage), },
    { path: 'transporters', loadComponent: () => import('./features/transporters/transporter-list.page').then(m => m.TransporterListPage), },
    { path: 'transporters/new', loadComponent: () => import('./features/transporters/transporter-form.page').then(m => m.TransporterFormPage), },
    { path: 'transporters/resumen', loadComponent: () => import('./features/transporters/transporter-resumen.page').then(m => m.TransporterResumenPage), },
    { path: 'companies', loadComponent: () => import('./features/companies/company-list.page').then(m => m.CompanyListPage), },
    { path: 'companies/new', loadComponent: () => import('./features/companies/company-form.page').then(m => m.CompanyFormPage), },
    { path: 'companies/resumen', loadComponent: () => import('./features/companies/company-resumen.page').then(m => m.CompanyResumenPage), },
    
];