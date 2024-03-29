import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
	{
		path: 'dashboard', component: PagesComponent, canActivate:[ authGuard ],
		children: [
			{ path: '', component: DashboardComponent, data:{ title:'dashboard' }  },
			{ path: 'progress', component: ProgressComponent, data:{ title:'progress' } },
			{ path: 'grafica1', component: Grafica1Component, data:{ title:'graficas' }  },
			{ path: 'account-settings', component: AccountSettingsComponent, data:{ title:'tema' }  },
			{ path: 'promises', component: PromisesComponent, data:{ title:'promesas' } },
			{ path: 'rxjs', component: RxjsComponent, data:{ title:'rxjs' } },


		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
