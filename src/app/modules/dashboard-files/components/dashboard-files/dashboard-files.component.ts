import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard-files',
  templateUrl: './dashboard-files.component.html',
  styleUrls: ['./dashboard-files.component.css']
})
export class DashboardFilesComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2){}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*this.addJsToElement('/assets/global/theme/vendors/jstree/jstree.min.js').onload = () => {
    };*/
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
