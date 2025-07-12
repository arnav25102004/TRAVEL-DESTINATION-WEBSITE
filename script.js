const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Real travel destinations
const locations = [
  {
    title: "MUSSORIE, INDIA",
    description: "Mussoorie, often called the Queen of the Hills, is a charming hill station nestled in the Garhwal Himalayan range of Uttarakhand, India.."
  },
  {
    title: "KASHMIR, INDIA",
    description: "Snow-capped peaks , Dal Lake, HouseBoats and MughalGarden"
    
  },
  {
    title: "LADAKH, INDIA",
    description: "High-altitude desert,Pangong Lake , Monasteries , and adventorous sports ."
  },
  {
    title: "GOA, INDIA",
    description: "Beaches , NightLife , Portuguese architecture and Sea food."
  },
  {
    title: "BANGLORE, INDIA",
    description: "Bangalore, officially known as Bengaluru, is the vibrant capital of Karnataka and one of India’s most dynamic cities. Often dubbed the Silicon Valley of India, it's a major hub for technology, startups, and innovation."
  },
  {
    title: "KEDARNATH, INDIA",
    description: "Kedarnath, nestled in the Garhwal Himalayas of Uttarakhand, is one of the most sacred pilgrimage destinations in India. Perched at an altitude of 3,583 meters, it’s home to the revered Kedarnath Temple, dedicated to Lord Shiva and recognized as one of the twelve Jyotirlingas."
  }
];

const cardsDiv = document.getElementById('cards');
locations.forEach(location => {
  const card = document.createElement('div');
  card.className = "bg-white rounded-lg shadow-md p-6 transition transform hover:-translate-y-2 hover:shadow-xl";
  card.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${location.title}</h3>
    <p>${location.description}</p>
  `;
  cardsDiv.appendChild(card);
});
