import('./bootstrap').then(({ mount }) => {
  mount({ mountPoint: document.getElementById('root')! });
});

export {};
