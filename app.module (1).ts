import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ParentComponent } from './nested/parent.component';
import { ChildComponent } from './nested/child.component';
import { DirectiveComponent } from './directive_demo/dir.component';
import { NgSwitchComponent } from './ngswitch/ngswitch.component';
import { AttrDirComponent } from './attribute_directive/attrdir.component';
import { HighlightDirective } from './customdirective/highlight.directive';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { ReversePipe } from './custompipe/reverse.pipe';
import { BindingComponent } from './binding_demo/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { HomeComponent } from './routing_demo/home.component';
import { NotFoundComponent } from './routing_demo/notfound.component';
import { PhotosComponent } from './routing_demo/photos.component';
import { MessageComponent } from './routing_demo/message.component';
import { MsgParentComponent } from './input_demo/msgparent.component';
import { MsgChildComponent } from './input_demo/msgchild.component';
import { MyComp } from './additionaldemo/mycomp.component';
import { DictParentComponent } from './javadictionary_output/dictparent.component';
import { DictChildComponent } from './javadictionary_output/dictchild.component';
import { TemplateFormComponent } from './TemplateDrivenForm/templateForm.component';
import { SubModule } from './submodule/submodule.module';
import { ModelDrivenFormComponent } from './ModelDrivenForms/modeldriven.component';
import { TestComponent } from './servicedemo/test.component';
import { BookServiceComponent } from './http_demo/bookservice.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './http_demo/book-data';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,HelloComponent,ProductComponent,GreetingComponent,
    ParentComponent,ChildComponent,DirectiveComponent,NgSwitchComponent,
    AttrDirComponent,HighlightDirective,PipedemoComponent,ReversePipe,BindingComponent,
    HomeComponent,NotFoundComponent,PhotosComponent,MessageComponent,
    MsgParentComponent,MsgChildComponent,MyComp,DictParentComponent,DictChildComponent,
    TemplateFormComponent,ModelDrivenFormComponent,TestComponent,BookServiceComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,routing,
    SubModule,ReactiveFormsModule,
    HttpClientModule,InMemoryWebApiModule.forRoot(BookData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
