// Modern JavaScript with ES6+ features for pizza website

// Pizza Menu data
const pizzaMenu = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic tomato sauce, fresh mozzarella, basil, and extra virgin olive oil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&q=80&w=2071",
    isBestseller: true,
    category: "classic",
    ingredients: ["Tomato Sauce", "Fresh Mozzarella", "Basil", "Extra Virgin Olive Oil"],
    nutritionalInfo: {
      calories: 850,
      protein: "24g",
      carbs: "90g",
      fat: "42g"
    }
  },
  {
    id: 2,
    name: "Truffle Mushroom",
    description: "Creamy bechamel, wild mushrooms, truffle oil, and parmesan",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070",
    isNew: true,
    category: "specialty",
    ingredients: ["Bechamel Sauce", "Wild Mushrooms", "Truffle Oil", "Parmesan"],
    nutritionalInfo: {
      calories: 920,
      protein: "28g",
      carbs: "85g",
      fat: "48g"
    }
  },

];

// DOM Elements using modern selectors
const elements = {
  featuredPizzasGrid: document.querySelector('#featured-pizzas-grid'),
  menuGrid: document.querySelector('#menu-grid'),
  categoryButtons: document.querySelectorAll('.category-btn'),
  contactForm: document.querySelector('#contact-form'),
  mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
  navLinks: document.querySelector('.nav-links'),
  searchToggleBtn: document.querySelector('.search-toggle-btn'),
  searchContainer: document.querySelector('.search-container'),
  searchInput: document.querySelector('#search-input'),
  searchResults: document.querySelector('#search-results'),
  searchCloseBtn: document.querySelector('.search-close-btn'),
  searchTags: document.querySelectorAll('.search-tag.clickable'),
  modalContainer: document.querySelector('#pizza-modal-container') || createModalContainer(),
};

// Create modal container if it doesn't exist
function createModalContainer() {
  const modalContainer = document.createElement('div');
  modalContainer.id = 'pizza-modal-container';
  modalContainer.className = 'modal-container';
  document.body.appendChild(modalContainer);
  return modalContainer;
}

// Mobile Menu Toggle with modern arrow function
const toggleMobileMenu = () => {
  if (!elements.mobileMenuBtn) return;
  
  elements.mobileMenuBtn.addEventListener('click', () => {
    elements.navLinks.classList.toggle('show');
    elements.mobileMenuBtn.classList.toggle('active');
    
    // Update aria-expanded attribute for accessibility
    const isExpanded = elements.mobileMenuBtn.classList.contains('active');
    elements.mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
  });
};

// Create Pizza Card HTML with template literals
const createPizzaCard = (pizza) => {
  return `
    <div class="pizza-card" data-pizza-id="${pizza.id}">
      <div class="pizza-image">
        ${pizza.isNew ? '<div class="pizza-badge badge-new">New</div>' : ''}
        ${pizza.isBestseller ? '<div class="pizza-badge badge-bestseller">Bestseller</div>' : ''}
        <img src="${pizza.image}" alt="${pizza.name}" loading="lazy">
      </div>
      <div class="pizza-content">
        <div class="pizza-title-price">
          <h3 class="pizza-title">${pizza.name}</h3>
          <span class="pizza-price">$${pizza.price.toFixed(2)}</span>
        </div>
        <p class="pizza-description">${pizza.description}</p>
      </div>
    </div>
  `;
};

// Pizza detail modal with enhanced information
const showPizzaDetails = (pizzaId) => {
  const pizza = pizzaMenu.find(p => p.id === pizzaId);
  if (!pizza) return;
  
  const modal = document.createElement('div');
  modal.className = 'pizza-modal';
  modal.innerHTML = `
    <div class="pizza-modal-content">
      <button class="close-modal-btn" aria-label="Close details">&times;</button>
      <div class="pizza-modal-header">
        <div class="pizza-modal-image">
          <img src="${pizza.image}" alt="${pizza.name}">
          ${pizza.isNew ? '<div class="pizza-badge badge-new">New</div>' : ''}
          ${pizza.isBestseller ? '<div class="pizza-badge badge-bestseller">Bestseller</div>' : ''}
        </div>
        <div class="pizza-modal-title">
          <h2>${pizza.name}</h2>
          <p class="pizza-modal-category">${pizza.category.charAt(0).toUpperCase() + pizza.category.slice(1)}</p>
          <p class="pizza-modal-price">$${pizza.price.toFixed(2)}</p>
        </div>
      </div>
      <div class="pizza-modal-body">
        <div class="pizza-modal-description">
          <h3>Description</h3>
          <p>${pizza.description}</p>
        </div>
        <div class="pizza-modal-ingredients">
          <h3>Ingredients</h3>
          <ul>
            ${pizza.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
  
  elements.modalContainer.innerHTML = '';
  elements.modalContainer.appendChild(modal);
  elements.modalContainer.classList.add('active');
  document.body.classList.add('modal-open');
  
  // Close modal when close button is clicked
  const closeBtn = modal.querySelector('.close-modal-btn');
  closeBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside the content
  elements.modalContainer.addEventListener('click', (e) => {
    if (e.target === elements.modalContainer) {
      closeModal();
    }
  });
  
  // Add keyboard support for closing modal
  document.addEventListener('keydown', handleModalKeyboard);
};

// Close modal function
const closeModal = () => {
  elements.modalContainer.classList.remove('active');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleModalKeyboard);
};

// Handle keyboard events for modal
const handleModalKeyboard = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

// Initialize Featured Pizzas with array methods
const initFeaturedPizzas = () => {
  if (!elements.featuredPizzasGrid) return;
  
  const featuredPizzas = pizzaMenu
    .filter(pizza => pizza.isBestseller || pizza.isNew)
    .slice(0, 4);
    
  elements.featuredPizzasGrid.innerHTML = featuredPizzas.map(createPizzaCard).join('');
  
  // Add click event listeners to pizza cards
  attachPizzaCardListeners(elements.featuredPizzasGrid);
};

// Initialize Menu Page with modern practices
const initMenuPage = () => {
  if (!elements.menuGrid) return;
  
  displayPizzas('all');
  
  // Category filter functionality with arrow functions
  elements.categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      elements.categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-current', 'false');
      });
      
      // Add active class to clicked button
      button.classList.add('active');
      button.setAttribute('aria-current', 'true');
      
      // Display pizzas based on selected category
      const category = button.dataset.category;
      displayPizzas(category);
    });
  });
};

// Display pizzas based on category with modern filtering
const displayPizzas = (category) => {
  if (!elements.menuGrid) return;
  
  const filteredPizzas = category === 'all' 
    ? pizzaMenu 
    : pizzaMenu.filter(pizza => pizza.category === category);
  
  elements.menuGrid.innerHTML = filteredPizzas.map(createPizzaCard).join('');
  
  // Add animation classes to cards
  animateCards(elements.menuGrid.querySelectorAll('.pizza-card'));
  
  // Add click event listeners to pizza cards
  attachPizzaCardListeners(elements.menuGrid);
};

// Attach click event listeners to pizza cards
const attachPizzaCardListeners = (container) => {
  const pizzaCards = container.querySelectorAll('.pizza-card');
  pizzaCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const pizzaId = parseInt(card.dataset.pizzaId, 10);
      showPizzaDetails(pizzaId);
    });
  });
};

// Animate cards with staggered delay using modern CSS transitions
const animateCards = (cards) => {
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
};

// Contact Form Submission with fetch API
const initContactForm = () => {
  if (!elements.contactForm) return;
  
  elements.contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data using FormData API
    const formData = new FormData(elements.contactForm);
    const formDataObj = Object.fromEntries(formData.entries());
    
    try {
      // Simulate form submission (would be replaced with actual API call)
      console.log('Form submitted:', formDataObj);
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success';
      successMessage.textContent = 'Message sent successfully! We\'ll be in touch soon.';
      
      // Insert success message after form
      elements.contactForm.parentNode.insertBefore(successMessage, elements.contactForm.nextSibling);
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
      
      // Reset form
      elements.contactForm.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  });
};

// Scroll Animation using Intersection Observer API
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.pizza-card, .process-step, .value-card, .team-member');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '-50px'
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
};

// SEARCH FUNCTIONALITY with modern JS

// Initialize search feature
const initSearch = () => {
  if (!elements.searchToggleBtn) return;
  
  // Toggle search visibility when the search icon is clicked
  elements.searchToggleBtn.addEventListener('click', () => {
    elements.searchContainer.classList.toggle('active');
    if (elements.searchContainer.classList.contains('active')) {
      elements.searchInput.focus();
      document.body.style.overflow = 'hidden'; // Prevent scrolling when search is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }
  });
  
  // Close search when close button is clicked
  elements.searchCloseBtn?.addEventListener('click', () => {
    elements.searchContainer.classList.remove('active');
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
    document.body.style.overflow = ''; // Restore scrolling
  });
  
  // Handle search input with modern debounce
  elements.searchInput?.addEventListener('input', 
    debounce(() => {
      const query = elements.searchInput.value.toLowerCase().trim();
      
      if (query.length < 2) {
        elements.searchResults.innerHTML = '';
        return;
      }
      
      // Filter pizzas based on query using modern array methods
      const results = pizzaMenu.filter(pizza => {
        const nameMatch = pizza.name.toLowerCase().includes(query);
        const descriptionMatch = pizza.description.toLowerCase().includes(query);
        const categoryMatch = pizza.category.toLowerCase().includes(query);
        const priceMatch = pizza.price.toString().includes(query);
        
        // Special case for "under $X" searches
        if (query.includes('under')) {
          const priceLimit = parseFloat(query.replace(/\D/g, ''));
          if (!isNaN(priceLimit)) {
            return pizza.price < priceLimit;
          }
        }
        
        return nameMatch || descriptionMatch || categoryMatch || priceMatch;
      });
      
      displaySearchResults(results);
    }, 300)
  );
  
  // Handle search tag clicks
  elements.searchTags?.forEach(tag => {
    tag.addEventListener('click', () => {
      elements.searchInput.value = tag.textContent.trim();
      // Manually trigger the input event to perform the search
      const inputEvent = new Event('input', { bubbles: true });
      elements.searchInput.dispatchEvent(inputEvent);
    });
  });
};

// Display search results with template literals
const displaySearchResults = (results) => {
  if (results.length === 0) {
    elements.searchResults.innerHTML = '<div class="no-results">No pizzas found. Try a different search.</div>';
    return;
  }
  
  elements.searchResults.innerHTML = results.map(pizza => `
    <div class="search-result-item" data-pizza-id="${pizza.id}">
      <img src="${pizza.image}" alt="${pizza.name}" class="search-result-image">
      <div class="search-result-content">
        <div class="search-result-title-price">
          <h4>${pizza.name}</h4>
          <span class="search-result-price">$${pizza.price.toFixed(2)}</span>
        </div>
        <p class="search-result-category">${pizza.category}</p>
      </div>
    </div>
  `).join('');
  
  // Add click event to results for navigation and details
  const resultItems = elements.searchResults.querySelectorAll('.search-result-item');
  resultItems.forEach((item) => {
    item.addEventListener('click', () => {
      const pizzaId = parseInt(item.dataset.pizzaId, 10);
      
      // Close search
      elements.searchContainer.classList.remove('active');
      elements.searchInput.value = '';
      elements.searchResults.innerHTML = '';
      document.body.style.overflow = '';
      
      // Show pizza details
      showPizzaDetails(pizzaId);
    });
  });
};

// Modern debounce function using arrow functions and promises
const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Initialize smooth scrolling
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Add keyboard shortcuts
const initKeyboardShortcuts = () => {
  document.addEventListener('keydown', (e) => {
    // Search shortcut (Ctrl+K or Command+K)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      
      if (elements.searchContainer && elements.searchToggleBtn) {
        elements.searchContainer.classList.add('active');
        elements.searchInput.focus();
        document.body.style.overflow = 'hidden';
      }
    }
    
    // Close search with Escape key
    if (e.key === 'Escape' && 
        elements.searchContainer && 
        elements.searchContainer.classList.contains('active')) {
      elements.searchContainer.classList.remove('active');
      elements.searchInput.value = '';
      elements.searchResults.innerHTML = '';
      document.body.style.overflow = '';
    }
  });
};

// CSS injection for the modal styling
const injectModalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .modal-container {
      display: grid;
      place-items: center;
      position: fixed;
      inset: 0;
      background-color: rgb(0 0 0 / 75%);
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    
    .modal-container.active {
      opacity: 1;
      pointer-events: all;
    }
    
    .pizza-modal {
      background: #333;
      border-radius: 1.125rem;
      max-width: 800px;
      width: min(80%, 800px);
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 4px 20px rgb(0 0 0 / 20%);
      animation: modalFadeIn 0.3s ease;
    }
    
    @keyframes modalFadeIn {
      from { 
        opacity: 0; 
        transform: scale(0.95); 
      }
      to { 
        opacity: 1; 
        transform: scale(1); 
      }
    }
    
    .pizza-modal-content {
      position: relative;
    }
    
    .close-modal-btn {
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
      background: rgb(0 0 0 / 60%);
      color: white;
      border: none;
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.875rem;
      cursor: pointer;
      display: grid;
      place-items: center;
      z-index: 10;
      transition: background-color 0.2s ease;
      
      &:hover {
        background: rgb(0 0 0 / 80%);
      }
    }
    
    .pizza-modal-header {
      display: flex;
      flex-direction: column;
      
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
      }
    }
    
.pizza-modal-image {
  position: relative;
  height: 270px;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
}

.pizza-modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .pizza-modal-image {
    width: 40%;
    height: auto;
    min-height: 250px;
    border-radius: 0.5rem 0 0 0;
  }
}
    
    .pizza-modal-title {
      padding: 1.25rem 1.25rem 0 1.25rem;
      
      & h2 {
        margin: 0 0 0.3125rem 0;
        font-size: 1.5rem;
      }
      
      @media (min-width: 768px) {
        width: 60%;
        padding: 1.25rem;
      }
    }
    
    .pizza-modal-category {
      margin: 0;
      font-size: 0.875rem;
      color: #777;
      text-transform: capitalize;
    }
    
    .pizza-modal-price {
      margin: 0.3125rem 0 0 0;
      font-size: 1.25rem;
      font-weight: bold;
      color: white;
    }
    
    .pizza-modal-body {
      padding: 0 1.25rem 1.25rem 1.25rem;
    }
    
    .pizza-modal-description,
    .pizza-modal-ingredients {
      margin-top: 0.9375rem;
    }
    
    .pizza-modal-body h3 {
      margin: 0 0 0.625rem 0;
      font-size: 1.125rem;
      color: gray;
    }
    
    .pizza-modal-ingredients ul {
      margin: 0;
      padding-left: 1.5rem;
      
      & li {
        margin-bottom: 0.125rem;
      }
    }
    
    :root:has(.modal-container.active) {
      overflow: hidden;
    }
    
    .view-details-btn {
      margin-top: 0.625rem;
      background-color: #4a90e2;
      color: white;
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      font-size: 0.875rem;
      transition: background-color 0.2s ease;
      
      &:hover {
        background-color: #3a7bc8;
      }
    }
  `;
  document.head.appendChild(style);
};

// Main initialization function
const init = () => {
  injectModalStyles();
  toggleMobileMenu();
  initFeaturedPizzas();
  initMenuPage();
  initContactForm();
  initSearch();
  animateOnScroll();
  initSmoothScroll();
  initKeyboardShortcuts();
};

// Use modern DOM content loaded event
document.addEventListener('DOMContentLoaded', init);