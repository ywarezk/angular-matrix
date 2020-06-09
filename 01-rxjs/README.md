## Async programming in Javascript and RXJS

In this lesson we will improve our js skills for dealing with async code.

## Lesson plan

- 

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

## Student EX - spot the memory leak!

In this ex you will work on the **memory-leak** project.
You job is to identify and fix the memory leak  bug the app has.

## Student EX - common rxjs operators





