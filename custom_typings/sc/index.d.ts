declare let Jquery: any;
declare let swal: any;

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
}

interface JQueryStatic {
  datepicker: any;
  daterangepicker(...options: Array<any>): any;
}
