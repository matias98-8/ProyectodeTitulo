import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaComponent } from './Screens/historia/historia.component';
import { ContactoComponent } from './Screens/contacto/contacto.component';
import { RilesComponent } from './Screens/riles/riles.component';
import { FiltrosMultimediaComponent } from './Screens/filtros-multimedia/filtros-multimedia.component';
import { UltrafiltracionComponent } from './Screens/ultrafiltracion/ultrafiltracion.component';
import { OsmosisComponent } from './Screens/osmosis/osmosis.component';
import { NosotrosComponent } from './Screens/nosotros/nosotros.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component:HistoriaComponent},
  { path: 'Contacto', component:ContactoComponent},
  
  //proyectos
  { path: 'riles', component:RilesComponent},
  { path: 'filtros', component: FiltrosMultimediaComponent },
  { path: 'ultrafiltracion', component: UltrafiltracionComponent },
  { path: 'osmosis', component: OsmosisComponent },
  { path: 'nosotros', component:NosotrosComponent},


  { path: '**', redirectTo: '/inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
