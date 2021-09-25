import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../shared/primary-button/primary-button.component';
import { SharedModule } from '../shared/shared.module';
import { ResultsListComponent } from './results-list/results-list.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchBarComponent,
    ResultsListComponent
  ],
  exports: [
    SearchBarComponent
  ],
  imports: [
    SharedModule
  ],
})
export class SearchModule { }
