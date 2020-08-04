# Angular Redux and @ngrx

In this lesson we will learn how to combine angular and redux for state management using the `@ngrx/*` libraries.

## Redux

redux helps us manage our data (state)

- Store - holds our state
- state is immutable

```
const state = {
	user: {
		firstName: 'Yariv',
		lastName: 'Katz'
	},
	todo: {
		...
	},
	dashboard: {
		...
	}
}
state.user.firstName = 'Piglet' // X

```

components will subscribe for the data that interests them.
They will get that data as an observable.

firstName$: Observable<string>

Component can also change the data by calling store.dispatch

- Action

action describes something that happened in our app and should cause a data change

```
state
{
	todo: {
		tasks: []
	}
}

action

{
	type: 'Server returned the todo list',
	payload: [
		{...},
		{...}
	]
}

reducers
given the action that happened what will be the next state
(state, action) => new state

new state
{
	todo: {
		tasks: [
			{...},
			{...}
		]
	}
}
```

what is our array ? 
what is the result? 
How does it make redux predictable?

```
[
	action1,
	action2,
	action3,
	...
	action - n
] => reducer => state
```

## ngrx

Actions -----A1-----A2------A3-------A4--------->


State   S0---S1-----S2------S3-------S4--------->

## ngrx todo

```
{
	todo: {
		tasks: []
	}
}
```

## Redux dev tools

browser extension that can help us examine the state and the changes of state in our store

### H.W install dev tools

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

## Lesson Plan

- Redux
- @ngrx/store
- @ngrx/store-devtools
- @ngrx/effects
- @ngrx/entity
- @ngrx/data

## EX @ngrx/store

- try and create 2 components
- one component contains a form with a text input
- when submitting the form it will add the input to an array that is held in the state
- The second component needs to print all the items of the array.


## EX

https://www.youtube.com/watch?v=G6vd7gTNhQs&feature=youtu.be