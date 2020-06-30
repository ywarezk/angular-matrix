# Dependency Injector

In this lesson we will learn advanced concepts about the dependency Injector

## Lesson plan

- Injector
- Providers
- InjectionToken
- DI Configuration pattern
- Injector trees
- Dynamically updating the tree
- Interceptors example
- JWT

## Student EX.

In this lesson we will learn how JWT works while
utilizing the lessons we learned on DI.

- The ex is located at the lesson folder in the jwt-ex folder.
- you will need to clone the project and run 

```
> npm install
```

- The project contains two services **LoginService**, **TaskService**
- The login service contains a method which gets as arguments email and password and send the credentials to be verified in a server.
- to make a successful login the credentials are: yariv@nerdeez.com, 12345678
- create a new module **AuthModule**
- That module should contain a **LoginComponent** containing a login form to capture email and password from the user and then use the **LoginService** to send them to the server and get a JWT token.
- The **AuthModule** should load dynamically when pressing a login button on **AppComponent**
- You need to also create an interceptor called **JWTInterceptor** that interceptor can be configured using a dependency token, it will be configured how to extract the token (from localStorage? from session? )
- The interceptor should add an **Authorization** header containing the text: **Bearer <token>**
- add another button in the **AppComponent** that will use the **TaskService** to get a todo list. 
- Remember you can only read the todo list if you have a valid token in the headers.
- Success in the assignment is printing that list.


