import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { ROUTER_REQUEST, RouterRequestAction } from '@ngrx/router-store';
import { tap, filter, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadFromLocalStorage } from '../ngrx/actions/todo.actions';

@Injectable({providedIn: 'root'})
export class RouterEffects {
  saveToLocalStorage$ = createEffect(() => this._actions.pipe(
    ofType(ROUTER_REQUEST),
    filter((action: RouterRequestAction) => action.payload.event.url === '/about'),
    withLatestFrom(this._store),
    tap(([action, state]) => {
      console.log('save!');
      localStorage.setItem('state', JSON.stringify(state));

    })
  ), {dispatch: false});

  // load$ = createEffect(() => this._actions.pipe(
  //   ofType(ROUTER_REQUEST),
  //   filter((action: RouterRequestAction) => action.payload.event.url === '/'),
  //   map(() => loadFromLocalStorage({data: localStorage.getItem('state') as any}))
  // ))

  constructor(
    private _actions: Actions,
    private _store: Store
  ) {

  }

}
