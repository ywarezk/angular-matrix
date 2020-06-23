## @angular/cli

In this lesson we will learn advanced features regarding @angular/cli tool

### Lesson Plan

- What is @angular/cli
- What is a workspace
- should I install it globaly? 
- about npx
- create a project
- create a library
- paths in tsconfig
- build library and publish
- version control

### What is NPX

node package executer
npm install -g @angular/cli => ng 
you can check the version: ng --version
npm install -g @angular/cli@latest

ng new some-project
npx @angular/cli new some-project
npx ng serve => node_module/.bin

### @angular/cli

yay we use @angular/cli to start a new project => beginners/intermediate
advanced mode => @angular/cli is used to create a workspace

### What is and angular workspace

workspace contains multiple projects or libraries

### lets try to use angular cli to create a workspace

```
npx @angular/cli new some-workspace --create-application false
npx ng g application tutorial
npx ng g application another-app
```

### Advantages disadvantages of using workspace

- node_modules => which means one version one angular (you can bypass with npm alias)
- updating angular will be easier, updating other packages will be easier
- single utilities like testing, single configuration typescript 
- share and reuse to your code

disadvantage
- build and deploy is a bit more complex
- nrwl , Bazel - we can use them for complex build and deploy



### EX.

- using @angular/cli create a new workspace
- create two projects in the workspace
- create a single library
- create a component in the single library that the two project will share
- try to use npm to publish your package

