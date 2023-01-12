import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from '../app/directory/directory.component';
import { BookmarksComponent } from '../app/bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', component: DirectoryComponent },
  { path: 'bookmarks', component: BookmarksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
