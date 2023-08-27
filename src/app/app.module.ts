import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Importaciones de Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Componente principal
import { AppComponent } from './app.component';

// Importación del módulo de enrutamiento
import { AppRoutingModule } from './app-routing.module';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importaciones de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Importaciones de páginas
import { LoginComponent } from './login/login.component';
import { HomePage } from './home/home.page';
import { AccessPage } from './access/access.page';

// Importaciones para formularios y peticiones HTTP
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePage,
    AccessPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // Módulos de Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Proveedor necesario para MatDatepicker
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}