import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tus componentes importados
import { LoginComponent } from './login/login.component';
import { HomePage } from './home/home.page';
import { AccessPage } from './access/access.page';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomePage },
    { path: 'access', component: AccessPage }
    // ... (otras rutas que puedas tener)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
