import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {todoReducer} from './ngrx/reducers/todo.reducer';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule} from '@ngrx/effects';
import { TodoListServerComponent } from './components/todo-list-server/todo-list-server.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home.component';
import { AboutPageComponent } from './pages/about.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { RouterEffects } from './effects/router.effects';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    TodoListComponent,
    TodoListServerComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({
      todo: todoReducer,
      router: routerReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      RouterEffects
    ]),
    EntityDataModule.forRoot({
      entityMetadata: {

        Task: {

        },

      },
      pluralNames: {
        Task: 'task'
      }

    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: 'https://nztodo.herokuapp.com/api/'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
