import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CarouselComponent } from './Screens/carousel/carousel.component';
import { HistoriaComponent } from './Screens/historia/historia.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";
import { ContactoComponent } from './Screens/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RilesComponent } from './Screens/riles/riles.component';
import { FiltrosMultimediaComponent } from './Screens/filtros-multimedia/filtros-multimedia.component';
import { UltrafiltracionComponent } from './Screens/ultrafiltracion/ultrafiltracion.component';
import { OsmosisComponent } from './Screens/osmosis/osmosis.component';
import { NosotrosComponent } from './Screens/nosotros/nosotros.component';





@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    CarouselComponent,
    HistoriaComponent,
    FooterComponent,
    ContactoComponent,
    RilesComponent,
    FiltrosMultimediaComponent,
    UltrafiltracionComponent,
    OsmosisComponent,
    NosotrosComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgxWhastappButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
