import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatCardModule,
        MatDialogModule,
        MatTabsModule,
        MatSelectModule
    ],
    exports: [
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatCardModule,
        MatDialogModule,
        MatTabsModule,
        MatSelectModule
    ]
})
export class MaterialModule {

}