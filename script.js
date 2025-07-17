// Navigation menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Card data for search/filter/pagination
const locations = [
  {
    title: "MUSSORIE, INDIA",
    description: "Mussoorie, often called the Queen of the Hills, is a charming hill station nestled in the Garhwal Himalayan range of Uttarakhand, India..",
    lat: 30.45,
    lon: 78.07
  },
  {
    title: "KASHMIR, INDIA",
    description: "Snow-capped peaks , Dal Lake, HouseBoats and MughalGarden",
    lat: 34.08,
    lon: 74.83
  },
  {
    title: "LADAKH, INDIA",
    description: "High-altitude desert,Pangong Lake , Monasteries , and adventorous sports .",
    lat: 34.15,
    lon: 77.58
  },
  {
    title: "GOA, INDIA",
    description: "Beaches , NightLife , Portuguese architecture and Sea food.",
    lat: 15.30,
    lon: 74.12
  },
  {
    title: "BANGLORE, INDIA",
    description: "Bangalore, officially known as Bengaluru, is the vibrant capital of Karnataka and one of India’s most dynamic cities. Often dubbed the Silicon Valley of India, it's a major hub for technology, startups, and innovation.",
    lat: 12.97,
    lon: 77.59
  },
  {
    title: "KEDARNATH, INDIA",
    description: "Kedarnath, nestled in the Garhwal Himalayas of Uttarakhand, is one of the most sacred pilgrimage destinations in India. Perched at an altitude of 3,583 meters, it’s home to the revered Kedarnath Temple, dedicated to Lord Shiva and recognized as one of the twelve Jyotirlingas.",
    lat: 30.73,
    lon: 79.07
  }
];

// Pagination and filter
const cardsDiv = document.getElementById('cards');
const searchInput = document.getElementById('search-input');
const sortDropdown = document.getElementById('sort-dropdown');
const paginationDiv = document.getElementById('pagination');
let currentPage = 1;
const cardsPerPage = 3;

function renderCards(filteredLocations) {
  cardsDiv.innerHTML = '';
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const pageLocations = filteredLocations.slice(start, end);
  pageLocations.forEach(location => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-lg shadow-md p-6 transition transform hover:-translate-y-2 hover:shadow-xl";
    card.innerHTML = `
      <h3 class=\"text-xl font-bold mb-2\">${location.title}</h3>
      <p>${location.description}</p>
      <p class=\"mt-2 text-sm text-green-600\">📍 Lat: ${location.lat}, Lon: ${location.lon}</p>
    `;
    cardsDiv.appendChild(card);
  });
}

function renderPagination(filteredLocations) {
  paginationDiv.innerHTML = '';
  const totalPages = Math.ceil(filteredLocations.length / cardsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = `mx-1 px-3 py-1 rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`;
    btn.addEventListener('click', () => {
      currentPage = i;
      updateCards();
    });
    paginationDiv.appendChild(btn);
  }
}

function updateCards() {
  const query = searchInput.value.toLowerCase();
  let filtered = locations.filter(loc => loc.title.toLowerCase().includes(query) || loc.description.toLowerCase().includes(query));
  const sortOrder = sortDropdown.value;
  filtered.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  renderCards(filtered);
  renderPagination(filtered);
}

searchInput.addEventListener('input', () => {
  currentPage = 1;
  updateCards();
});
sortDropdown.addEventListener('change', () => {
  currentPage = 1;
  updateCards();
});

updateCards();

// Login modal logic
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');

loginBtn.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
});
closeLogin.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});

// Login form validation and localStorage
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value;
  let valid = true;
  let msg = '';
  if (username.length < 3) { valid = false; msg += 'Username must be at least 3 characters.\n'; }
  if (password.length < 6) { valid = false; msg += 'Password must be at least 6 characters.\n'; }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { valid = false; msg += 'Invalid email.\n'; }
  if (!date) { valid = false; msg += 'Date is required.\n'; }
  if (!valid) {
    alert(msg);
    return;
  }
  localStorage.setItem('loginData', JSON.stringify({ username, password, email, date }));
  alert('Login data saved!');
  loginModal.classList.add('hidden');
  loginForm.reset();
});

