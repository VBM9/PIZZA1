const pizzaMenu = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic tomato sauce, fresh mozzarella, basil, and extra virgin olive oil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&q=80&w=2071",
    isBestseller: true,
    category: "classic"
  },
  {
    id: 2,
    name: "Truffle Mushroom",
    description: "Creamy bechamel, wild mushrooms, truffle oil, and parmesan",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070",
    isNew: true,
    category: "specialty"
  },
  {
    id: 3,
    name: "Mediterranean",
    description: "Kalamata olives, feta cheese, cherry tomatoes, red onion, and oregano",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2081",
    category: "vegetarian"
  },
  {
    id: 4,
    name: "Spicy Pepperoni",
    description: "Double pepperoni, chili flakes, mozzarella, and our signature tomato sauce",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=2076",
    isBestseller: true,
    category: "spicy"
  },
  {
    id: 5,
    name: "Quattro Formaggi",
    description: "Four cheese blend of mozzarella, gorgonzola, fontina, and parmesan",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=2127",
    category: "vegetarian"
  },
  {
    id: 6,
    name: "Prosciutto & Arugula",
    description: "Prosciutto di Parma, fresh arugula, cherry tomatoes, and balsamic glaze",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=2088",
    category: "specialty"
  },
  {
    id: 7,
    name: "BBQ Chicken",
    description: "Grilled chicken, red onion, cilantro, and our tangy BBQ sauce",
    price: 18.99,
    image: "https://howtobbqright.com/wp-content/uploads/2024/05/BBQchicken640.jpg",
    category: "specialty"
  },
  {
    id: 8,
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, red onion, black olives, and spinach",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?auto=format&fit=crop&q=80&w=1974",
    isNew: true,
    category: "vegetarian"
  },
  {
    id: 9,
    name: "Buffalo Chicken",
    description: "Spicy buffalo sauce, grilled chicken, blue cheese crumbles, and ranch drizzle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070",
    isBestseller: true,
    category: "spicy"
  },
  {
    id: 10,
    name: "Pesto Garden",
    description: "Basil pesto base, artichoke hearts, sun-dried tomatoes, and goat cheese",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80&w=2037",
    category: "vegetarian"
  },

  {
    id: 12,
    name: "Hawaiian Supreme",
    description: "Ham, pineapple, bacon, and extra cheese on our signature tomato sauce",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2081",
    category: "specialty"
  },
  {
    id: 13,
    name: "Tex-Mex",
    description: "Seasoned ground beef, jalapeños, corn, black beans, and chipotle aioli",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80&w=2070",
    isNew: true,
    category: "spicy"
  },
  {
    id: 14,
    name: "Greek Garden",
    description: "Spinach, feta, olives, roasted red peppers, and tzatziki drizzle",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=2069",
    category: "vegetarian"
  },
  {
    id: 15,
    name: "Carbonara",
    description: "Creamy garlic sauce, pancetta, eggs, parmesan, and cracked black pepper",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2087",
    isNew: true,
    category: "specialty"
  },
  {
    id: 16,
    name: "New York Style",
    description: "Thin crust with simple tomato sauce, extra mozzarella, and a dash of oregano",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=2069",
    isBestseller: true,
    category: "classic"
  },
  {
    id: 17,
    name: "Diavola",
    description: "Spicy salami, roasted red peppers, chili oil, and mozzarella",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&q=80&w=2187",
    category: "spicy"
  },
  {
    id: 18,
    name: "Fungi Forest",
    description: "Mix of shiitake, portobello, and button mushrooms with thyme and garlic oil",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070",
    category: "vegetarian"
  },
  {
    id: 19,
    name: "Seafood Delight",
    description: "Shrimp, calamari, mussels, and clams with lemon-infused olive oil",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=80&w=2088",
    isNew: true,
    category: "specialty"
  },
  {
    id: 20,
    name: "Caramelized Onion & Brie",
    description: "Sweet caramelized onions, creamy brie, and walnuts with a honey drizzle",
    price: 20.99,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=2080",
    category: "vegetarian"
  },
  {
    id: 19,
    name: "Fig & Goat Cheese",
    description: "Fig jam, goat cheese, prosciutto, arugula, and balsamic reduction",
    price: 20.99,
    image: "https://images.cookforyourlife.org/wp-content/uploads/2015/08/Fig-Goat-Cheese-Pizza-e1676343166366.jpg",
    category: "specialty"
  },
  {
    id: 20,
    name: "Breakfast Pizza",
    description: "Bacon, scrambled eggs, potato, cheddar cheese, and hollandaise drizzle",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&q=80&w=2070",
    category: "specialty",
    isNew: true
  },
];

// DOM Elements
const featuredPizzasGrid = document.getElementById('featured-pizzas-grid');
const menuGrid = document.getElementById('menu-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const contactForm = document.getElementById('contact-form');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create the dark mode toggle container
  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'theme-toggle-container';
  
  // Create the dark mode toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'theme-toggle';
  toggleButton.id = 'theme-toggle';
  toggleButton.setAttribute('aria-label', 'Toggle dark mode');
  toggleButton.setAttribute('title', 'Toggle dark/light mode');
  
  // Create SVG icons for light and dark mode
  const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  
  // Add both icons to the button (we'll control visibility with CSS)
  toggleButton.innerHTML = `
    <span class="icon-light">${sunSVG}</span>
    <span class="icon-dark">${moonSVG}</span>
  `;
  
  // Append the button to the container
  toggleContainer.appendChild(toggleButton);
  
  // Append the container to the body
  document.body.appendChild(toggleContainer);
  
  // Add CSS for smooth transitions
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    :root {
      --transition-speed: 0.3s;
    }
    
    /* Add transition to all elements for smooth theme switching */
    * {
      transition: background-color var(--transition-speed) ease, 
                  color var(--transition-speed) ease,
                  border-color var(--transition-speed) ease,
                  box-shadow var(--transition-speed) ease;
    }
    
    .theme-toggle-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }
    
    .theme-toggle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--color-primary, #ff6b6b);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .theme-toggle:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }
    
    .theme-toggle:active {
      transform: translateY(0);
    }
    
    .theme-toggle .icon-light,
    .theme-toggle .icon-dark {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    /* Dark theme icon states */
    [data-theme="dark"] .theme-toggle .icon-dark {
      opacity: 0;
      transform: translate(-50%, -50%) rotate(90deg);
    }
    
    [data-theme="dark"] .theme-toggle .icon-light {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(0);
    }
    
    /* Light theme icon states */
    [data-theme="light"] .theme-toggle .icon-light {
      opacity: 0;
      transform: translate(-50%, -50%) rotate(90deg);
    }
    
    [data-theme="light"] .theme-toggle .icon-dark {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(0);
    }
  `;
  document.head.appendChild(styleElement);
  
  // Check for saved theme preference or respect OS preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');
  
  // Apply the saved theme or OS preference
  if (savedTheme === 'dark' || (savedTheme === null && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Toggle theme when button is clicked
  toggleButton.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply a transition class to the body
    document.body.classList.add('theme-transitioning');
    
    // Update the theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Announce theme change for screen readers
    const themeAnnouncement = document.createElement('div');
    themeAnnouncement.setAttribute('aria-live', 'polite');
    themeAnnouncement.classList.add('sr-only');
    themeAnnouncement.textContent = `Theme changed to ${newTheme} mode`;
    document.body.appendChild(themeAnnouncement);
    
    // Remove the announcement after it's been read
    setTimeout(() => {
      themeAnnouncement.remove();
    }, 3000);
  });
  
  // Listen for OS theme preference changes
  prefersDarkScheme.addEventListener('change', (e) => {
    // Only change if the user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  });
});

// Rest of the original code remains the same...
// Mobile Menu Toggle
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    mobileMenuBtn.classList.toggle('active');
    
    // Update aria-expanded attribute for accessibility
    const isExpanded = mobileMenuBtn.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
  });
}

// Create Pizza Card HTML - Removed "Add to Cart" button
function createPizzaCard(pizza) {
  return `
    <div class="pizza-card">
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
}

// Initialize Featured Pizzas on Homepage
function initFeaturedPizzas() {
  if (featuredPizzasGrid) {
    const featuredPizzas = pizzaMenu.filter(pizza => pizza.isBestseller || pizza.isNew).slice(0, 4);
    featuredPizzasGrid.innerHTML = featuredPizzas.map(createPizzaCard).join('');
  }
}

// Initialize Menu Page
function initMenuPage() {
  if (menuGrid) {
    displayPizzas('all');
    
    // Category filter functionality
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => {
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
  }
}

// Display pizzas based on category
function displayPizzas(category) {
  if (!menuGrid) return;
  
  let filteredPizzas;
  
  if (category === 'all') {
    filteredPizzas = pizzaMenu;
  } else {
    filteredPizzas = pizzaMenu.filter(pizza => pizza.category === category);
  }
  
  menuGrid.innerHTML = filteredPizzas.map(createPizzaCard).join('');
  
  // Add animation classes to cards
  animateCards(menuGrid.querySelectorAll('.pizza-card'));
}

// Animate cards with staggered delay
function animateCards(cards) {
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Contact Form Submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Simulate form submission (would be replaced with actual API call)
    console.log('Form submitted:', formData);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.textContent = 'Message sent successfully! We\'ll be in touch soon.';
    
    // Insert success message after form
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
    
    // Reset form
    contactForm.reset();
  });
}

// Scroll Animation for Elements using Intersection Observer
function animateOnScroll() {
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
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initFeaturedPizzas();
  initMenuPage();
  animateOnScroll();
  
  // Smooth scroll for anchor links
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
});