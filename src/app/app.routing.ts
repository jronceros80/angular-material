import { RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './components/option/option.component';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ListComponent } from './components/list/list.component';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const routes: Routes = [
    { path: 'option', component: OptionComponent },
    { path: 'select', component: SelectComponent },
    { path: 'input', component: InputComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'chips', component: ChipsComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'list', component: ListComponent },
    { path: 'gridlist', component: GridlistComponent },
    { path: 'card', component: CardComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: '', pathMatch: 'full', redirectTo: 'option' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
