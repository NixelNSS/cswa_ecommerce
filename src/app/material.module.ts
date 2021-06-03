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
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


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
        MatSelectModule,
        MatTableModule,
        MatSliderModule,
        MatPaginatorModule,
        MatSortModule
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
        MatSelectModule,
        MatTableModule,
        MatSliderModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class MaterialModule {

}