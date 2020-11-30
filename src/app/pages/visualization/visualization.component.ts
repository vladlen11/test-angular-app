import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
    selector: 'app-visualization',
    templateUrl: './visualization.component.html',
    styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {

    @ViewChild('canvas') canvas: ElementRef;

    data: any;

    public ctx: CanvasRenderingContext2D;

    chart: any;

    graphType = 'bar';

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            this.ctx = this.canvas.nativeElement.getContext('2d');

            // this.initGraph();
            this.initGraph();

        }, 2000);
    }

    changeChart(type) {
        this.graphType = type;

        this.chart.update();
        this.chart.destroy();
        this.initGraph();
    }

    initGraph() {


        const ctx = (<any> document.getElementById('graphId_0')).getContext('2d');


        this.chart = new Chart(ctx, {
            type: this.graphType,
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            legend: {
                display: false,
                labels: {
                    fontColor: 'blue',
                    fontSize: 18
                }
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        // document.getElementById('values').style.opacity = '1';
        // this.scrollToCurrentData();
    }
}
