import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'student',
        component:StudentDetailComponent
    }
];
