import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlloysDetailsComponent } from './alloys-details/alloys-details.component';
import { EventsComponent } from './events/events.component';
import { LoansComponent } from './loans/loans.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { SavingsComponent } from './savings/savings.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';
import { FavoritComponent } from './favorit/favorit.component';
import { PledgesComponent } from './pledges/pledges.component';
import { EstamPlansComponent } from './estam-plans/estam-plans.component';




export const routes: Routes = [
    { 
        path:'home',
        component:HomeComponent
    },
   
   
   
    { 
        path:'savings',
        component: SavingsComponent
    }
    ,
    { 
        path:'alloys-details',
        component:AlloysDetailsComponent
    }
    ,
  
    { 
        path:'loans',
        component:LoansComponent
    }
    ,
   
    { 
        path:'profile',
        component:ProfileComponent
    }
    ,
    { 
        path:'events',
        component:EventsComponent
    }
    
    ,
    { 
        path:'requests',
        component:RequestsComponent
    }
    ,
    { 
        path:'settings',
        component:SettingsComponent
    }
    ,
    {
        path: 'wallet',
          component:WalletComponent
    }
    ,
    {
        path: 'favorit',
        component:FavoritComponent
    },
    {
        path: 'pledges',
        component:PledgesComponent
    },
    {
        path: 'estam-plans',
        component:EstamPlansComponent
    },
   
    { 
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
    }
    
];
