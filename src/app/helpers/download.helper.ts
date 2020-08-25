export function downloadAll(urls: string[]): void {
  const link = document.createElement('a');
  let interval = 1000;

  link.setAttribute('download', null);
  link.style.display = 'none';

  document.body.appendChild(link);

  urls.forEach((url) => {
    interval += 1000;

    setTimeout(() => {
      link.setAttribute('href', url);
      link.click();
    }, interval);
  });

  document.body.removeChild(link);
}
