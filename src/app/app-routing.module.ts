import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule), //ถ้า link มาที่เส้น /login จะไปโหลดข้อมูลที่ AuthModule
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../app/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },  //ถ้าใส่ url มั่ว จะ redirect ไป login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
