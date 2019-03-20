import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OptionComponent } from './components/option/option.component';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ListComponent } from './components/list/list.component';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { appRouting } from './app.routing';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogOverviewComponent } from './components/dialog/dialog-overview/dialog-overview.component';
import { TableDinamicComponent } from './components/table-dinamic/table-dinamic.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    SelectComponent,
    InputComponent,
    ButtonComponent,
    ChipsComponent,
    CheckboxComponent,
    ListComponent,
    GridlistComponent,
    NavbarComponent,
    CardComponent,
    PaginationComponent,
    DialogComponent,
    DialogOverviewComponent,
    TableDinamicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
  ],
  providers: [],
  entryComponents: [
    DialogOverviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
