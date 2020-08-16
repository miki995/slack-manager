export function getLocation(url: string): string {

  const newUrl = (url.charAt(0) === '/') ? url.substr(1) : url;
  const [route] = newUrl.includes('/') ? newUrl.split('/') : newUrl.split('?');

  return route;
}
