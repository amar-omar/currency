import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ConvertCompareComponent } from './components/convert-compare/convert-compare.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { AddFavoriteComponent } from './components/add-favorite/add-favorite.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    ConvertCompareComponent,
    CurrencyListComponent,
    AddFavoriteComponent,
    ContainerComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
