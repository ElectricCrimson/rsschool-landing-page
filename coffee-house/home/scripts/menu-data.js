export const menuData = await fetch('../assets/data/products.json')
  .then(resp => {
    if (!resp.ok) throw new Error(`Error: ${resp.status}`);
    return resp.json();
  })
  .catch(err => {
    console.error('Failed to load:', err);
    return null;
  });