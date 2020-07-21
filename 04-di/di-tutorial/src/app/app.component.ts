import { Component, Injector, Inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, Compiler, ApplicationRef, PlatformRef, OnInit } from '@angular/core';
// import {HelloService} from './hello.service';
import { HttpClient } from '@angular/common/http';
// import { PrintHelloComponent} from '../../stam/print-hello/print-hello.component';

@Component({
  selector: 'app-root',
  template: `
    <p>{{message2}}</p>
    <button (click)="loadStamModule()">Click to load stam module</button>
    <div #wrapper></div>
    <!--<app-child1></app-child1>
    <app-child2></app-child2>-->

  `,
  styleUrls: ['./app.component.css'],
  // providers: [
  //   // {
  //   //   provide: 'hello',
  //   //   useValue: 'hello AppComponent'
  //   // }
  // ]
})
export class AppComponent implements OnInit {
  @ViewChild('wrapper', {read: ViewContainerRef})
  wrapper: ViewContainerRef

  message2: string = '';

  // constructor(public hello: HelloService) {}
  // constructor(private _injector: Injector) {
  //   const helloService = this._injector.get(HelloService);
  //   this._injector.get('hello');
  //   // this.message2 = helloService.message;
  //   this.message2 = this._injector.get('hello');
  // }

  constructor(
    // @Inject('hello') public message2,
    private _http: HttpClient,
    private _injector: Injector,
    private _compiler: Compiler,
    //private _componentFactoryResolver: ComponentFactoryResolver
    ) {

  }

  ngOnInit() {
    this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').subscribe();
  }

  /**
   * We want to lazy load stam module
   * in order to add an injector
   * to the tree of module injectors
   */
  async loadStamModule() {
    // const componentFactory = this._componentFactoryResolver.resolveComponentFactory(PrintHelloComponent);
    // this.wrapper.createComponent(componentFactory);

    const {StamModule} = await import('../stam/stam.module');
    const moduleFactory = await this._compiler.compileModuleAsync(StamModule);
    const moduleRef = moduleFactory.create(this._injector);
    const { PrintHelloComponent } = await import('../stam/print-hello/print-hello.component');
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(PrintHelloComponent);
    this.wrapper.createComponent(componentFactory);
  }
}
