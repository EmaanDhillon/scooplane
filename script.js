document.addEventListener('DOMContentLoaded', () => {
  fetch('deals.json')
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector('.deal-cards');
      container.innerHTML = ''; // clear existing

      data.forEach(product => {
        const card = `
          <div class="card">
            <img src="${product.image}" alt="${product.title}" />
            <h4>${product.title}</h4>
            <p><span class="old-price">${product.originalPrice}</span> <span class="new-price">${product.price}</span></p>
            <a href="${product.link}" class="btn" target="_blank">Get Deal</a>
          </div>
        `;
        container.innerHTML += card;
      });
    });
});
