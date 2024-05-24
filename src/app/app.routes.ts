import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';
import { DetaillComponent } from './detaill/detaill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { nghiahdph39065Guard } from './nghiahdph39065.guard';
import { childGuard } from './child.guard';
import { deactivateGuard } from './deactivate.guard';
import { UpdateComponent } from './update/update.component';
export const routes: Routes = [
   
    {
        path: 'list',
        component: ListComponent,
        title: 'List'
    },
    {
        path: 'create',
        component: CreateComponent,
        title: "Create",
    },
    {   
        path:'detail/:project',
        component: DetaillComponent,
        title:'Detail'
    },
    {   
        path:'update/:project',
        component: UpdateComponent,
        title:'Update'
    },
    {
        path:"admin",
        children:[
            {
                path:"dashboard",
                component: DashboardComponent,
                title:"dashboard"
            },  
            {
                path:"projects",
                children:[
                    {
                        path: 'list',
                        component: ListComponent,
                        title: 'List' 
                    },
                    {
                        path: 'create',
                        component: CreateComponent,
                        title: "Create"
                    },
                    {   
                        path:'detail/:tenParam',
                        component: DetaillComponent,
                        title:'Detail'
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotfoundComponent,
        title:'NotFound'
    }
];
