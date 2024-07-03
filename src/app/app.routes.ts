import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './user/user/user.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ChatListComponent } from './user/chat-list/chat-list.component';
import { UserPurchaseListComponent } from './user/user-purchase-list/user-purchase-list.component';
import { UserDeletedItemsComponent } from './user/user-deleted-items/user-deleted-items.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';

export const routes: Routes = [
    {path:"", component:HomeComponent,
        children:[
            {path:"login", component:LoginComponent}
        ]
    },
    {path:"user", component:UserComponent,
        children:[
            {path:"", component:UserDashboardComponent},
            {path:"profile", component:UserProfileComponent},
            {path:"chatList", component:ChatListComponent},
            {path:"purchaseList", component:UserPurchaseListComponent},
            {path:"deletedItem", component:UserDeletedItemsComponent}
        ]
    },
    {path:"**", component:NotFoundComponent}
];
