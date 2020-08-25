declare let Jquery: any;
declare let swal: any;
declare let ApexCharts: any;

interface JQuery {
  modal(behavior?: any): JQuery;
  datepicker(...options: Array<any>): any;
  daterangepicker(...options: Array<any>): any;
  summernote(...type: Array<any>): any;
  selectpicker(options?: {}, value?: any): any;
  tooltip(options?: {}): any;
  TouchSpin(options?: {}): any;
  popover(options?: {}): any;
  bootstrapSwitch(options?: {}, arg1?: any, arg2?: any): any;
  collapse(options: any): any;
  niceScroll(options?: any): any;
  removeOverlay(options?: any): any;
}

interface JQueryStatic {
  datepicker: any;
  removeOverlay: any;
  daterangepicker(...options: Array<any>): any;
}
