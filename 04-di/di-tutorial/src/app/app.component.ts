import { Component, Injector, Inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, Compiler, ApplicationRef, PlatformRef } from '@angular/core';
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
export class AppComponent {
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
    private _platformRef: PlatformRef,
    private _injector: Injector,
    private _applicationRef: ApplicationRef,
    private _compiler: Compiler,
    private _componentFactoryResolver: ComponentFactoryResolver) {

  }

  /**
   * We want to lazy load stam module
   * in order to add an injector 
   * to the tree of module injectors
   */
  async loadStamModule() {
    const {PrintHelloComponent} = await import('../stam/print-hello/print-hello.component');
    // const componentFactory = this._componentFactoryResolver.resolveComponentFactory(PrintHelloComponent);
    // this.wrapper.createComponent(componentFactory);

    const {StamModule} = await import('../stam/stam.module');
    const moduleFactory = await this._compiler.compileModuleAsync(StamModule);
    const moduleRef = moduleFactory.create(this._injector);
    moduleRef.componentFactoryResolver.resolveComponentFactory(PrintHelloComponent);
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(PrintHelloComponent);
    this.wrapper.createComponent(componentFactory);
  }
}
