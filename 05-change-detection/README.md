# Change Detection in Angular

In this lesson we will learn about how change detection is happening in an angular application.

## What is Change Detection (CD)

- angular detects that something happened and updates the dom if needed

## Something happened?

- observable / Promise
- Events
- Timers

when something async happens

## what kind of cd do we have in Angular

Automatic Change Detection

angular automatically know that something happened and will update the dom if needed

## Zone.js

With zone.js angular can now when

timers
promise
observables
events

with zone.js angular know these happen and know when they are finish
to trigger change detection


## Lesson Plan

- What is Change Detection
- automatic change detection
- Tree of ChangeDetectorRef
- The order of CD
- Zone.js
- ChangeDetectionStrategy.OnPush