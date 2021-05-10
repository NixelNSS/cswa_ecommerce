import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
    ],
    exports: [
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
    ]
})
export class MaterialModule {

}