// first import router module's Angular

import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// Next import Components

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PruebaComponent } from './components/prueba/prueba.component';

// Array of routes

const appRoutes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'prueba/:nombre', component: PruebaComponent, },
  { path: '', component: HomeComponent, },
  { path: '**', component: ErrorComponent, },
];


// Exports routing module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

