import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutingPreloaderService } from './services/app-routing-preloader.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'indexhome', loadChildren: './indexhome/indexhome.module#IndexhomePageModule' },
  { path: 'maincontent', loadChildren: './maincontent/maincontent.module#MaincontentPageModule' },
  { path: 'maincontent/:section', loadChildren: './maincontent/maincontent.module#MaincontentPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: AppRoutingPreloaderService })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
