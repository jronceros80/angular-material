import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatCardModule,
      MatListModule,
      MatChipsModule,
      MatGridListModule,
      MatSliderModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule
       ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatCardModule,
      MatListModule,
      MatChipsModule,
      MatGridListModule,
      MatSliderModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule
      ],
  declarations: [],
})
export class MaterialModule { }
