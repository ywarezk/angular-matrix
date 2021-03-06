## Async programming in Javascript and RXJS

In this lesson we will improve our js skills for dealing with async code.

## Lesson plan

- what is async code
- classifying your async code
- spotting the bad patterns
- promise example
- observable example
- difference between promise and observable
- subject
- operators

## Video

This lesson is also available in video in the following URL:

https://youtu.be/rLPW1VowY1E


## Lesson goal

understand async code and how to deal with properly





## Student EX.

To solve the EX. you will have to download the code from the course repo. 
Go to the folder **rxjs-ex**
and run 

```bash
> npm install
```

this will install all the node modules.
To run the project run:

```bash
> npx ng serve --project autocomplete
```

You will work on the autocomplete project
You job is to modify this project to do the following
- Inside app.component.ts there is a list of items that should be populated from a server.
- There is a service called **todo.service.ts** that you can use to grab the list items from the server
- Your first job is to display the list of items from the server and every time the user types text in the search box, another request should be sent and the list should be reduced.
- Can you use your rxjs knowledge to implement throttling?
- can you use rxjs knowledge to make the search distinct?
- try to avoid bad patterns like to many nesting
- try to use the async pipe

## Student EX - spot the memory leak!

In this ex you will work on the **memory-leak** project.
You job is to identify and fix the memory leak  bug the app has.
try to use the async pipe

## Student EX - common rxjs operators

try and use the following operators:
you can run it in node with **ts-node**
you can run the operators on subjects for ease of use

- catchError
- map
- tap
- mergeMap
- filter
- debounceTime






