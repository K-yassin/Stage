import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilleproduitComponent } from './familleproduit/familleproduit.component';
import { ShowFamprodComponent } from './familleproduit/show-famprod/show-famprod.component';
import { ProduitComponent } from './produit/produit.component';
import { ShowProdComponent } from './produit/show-prod/show-prod.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FamilleproduitComponent,
    ShowFamprodComponent,
    ProduitComponent,
    ShowProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
