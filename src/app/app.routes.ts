import { Routes } from '@angular/router';
import { VerificarFestivosComponent } from './features/components/verificar-festivos/verificar-festivos.component';
import { BuscarFestivosComponent } from './features/components/buscar-festivos/buscar-festivos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'buscar-festivos', pathMatch: 'full' },
    { path: 'buscar-festivos', component: BuscarFestivosComponent},
    { path: 'verificar-festivo', component: VerificarFestivosComponent}
];
