import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { SalesComponent } from './component/sales/sales.component';
import { OrdersComponent } from './component/orders/orders.component';
import { CustomersComponent } from './component/customers/customers.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }, {
        path:'',
        component:HomepageComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        children:[{
            path:'',
            component:HomeComponent
        },
        {
            path:'products',
            component:ProductsComponent
        },
        {
            path:'inventory',
            component:InventoryComponent
        }, {
            path:'sales',
            component:SalesComponent
        },
         {
            path:'orders',
            component:OrdersComponent
        },
        {
            path:'customers',
            component:CustomersComponent
        }]
    }
];
