import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports: [
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule
    ],
    exports: [
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule
    ]
})
export class MaterialModule {

}