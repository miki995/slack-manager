export function collapseSidebar(): void {
  jQuery('.navigation').removeClass('open');
  jQuery('.sidebar-group').removeClass('collapse');
  jQuery('.files-sidebar').removeClass('collapse');
  jQuery('.components-sidebar').removeClass('collapse');
}
