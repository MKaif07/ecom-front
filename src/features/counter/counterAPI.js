export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://nice-erin-cockroach-slip.cyclic.cloud");
    const data = await response.json();
    resolve({ data });
  });
}
