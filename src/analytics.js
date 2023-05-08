import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  const listener = () => counter++;
  document.addEventListener('click', listener);
  console.log(counter);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    }
  };
}

$('.logo').text('Andrei');

window.analytics = createAnalytics();