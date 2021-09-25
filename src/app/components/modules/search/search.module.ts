import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
