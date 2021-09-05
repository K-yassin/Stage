import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilleproduitComponent } from './familleproduit/familleproduit.component';
import { ProduitComponent } from './produit/produit.component';
const routes: Routes = [
  {path: 'produit',component:ProduitComponent},
  {path: 'familleproduit',component:FamilleproduitComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
