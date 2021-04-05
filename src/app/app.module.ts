import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './ng2container/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './ng2container/bubble-chart/bubble-chart.component';
import { LineChartComponent } from './ng2container/line-chart/line-chart.component';
import { PieChartComponent } from './ng2container/pie-chart/pie-chart.component';
import { RadarChartComponent } from './ng2container/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './ng2container/doughnut-chart/doughnut-chart.component';
import { Ng2Component } from './ng2container/ng2/ng2.component';
import { NgxComponent } from './ngxchartscontainer/ngx/ngx.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxlineComponent } from './ngxchartscontainer/ngxline/ngxline.component';
import {PortalModule} from '@angular/cdk/portal';
import { NgxbarComponent } from './ngxchartscontainer/ngxbar/ngxbar.component';
import { NgxdoughnutComponent } from './ngxchartscontainer/ngxdoughnut/ngxdoughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    Ng2Component,
    NgxComponent,
    NgxlineComponent,
    NgxbarComponent,
    NgxdoughnutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
