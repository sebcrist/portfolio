import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { RobotsComponent } from './projects/robots/robots.component';
import { EchecComponent } from './projects/echec/echec.component';
import { GestionBOMComponent } from './projects/gestion-bom/gestion-bom.component';
import { FantasyRPGComponent } from './projects/fantasy-rpg/fantasy-rpg.component';
import { DbWebappComponent } from './projects/db-webapp/db-webapp.component';
import { PdfSplitterComponent } from './projects/pdf-splitter/pdf-splitter.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'projects/robot', component: RobotsComponent},
    { path: 'projects/echec', component: EchecComponent},
    { path: 'projects/gestionBOM', component: GestionBOMComponent},
    { path: 'projects/fantasyRPG', component: FantasyRPGComponent},
    { path: 'projects/pdfSplitter', component: PdfSplitterComponent},
    { path: 'projects/DB-WebApp', component: DbWebappComponent},
    { path: '**', redirectTo: '' },
];
