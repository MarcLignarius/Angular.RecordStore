import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
    { path: '',component: WelcomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'cart', component: CartComponent}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
