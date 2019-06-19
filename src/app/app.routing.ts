import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    { path: '',component: WelcomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'marketplace', component: MarketplaceComponent},
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'admin', component: AdminComponent}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
