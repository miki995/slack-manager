export function openSlackPricing(): void {
  window.open(
    'https://slack.com/pricing',
    '_blank' // <- This is what makes it open in a new window.
  );
}
