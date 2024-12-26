// Initialize Swiper
const newSwiper = new Swiper('.news-swiper', {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 1,
  navigation: {
    nextEl: '.news-swiper__next',
    prevEl: '.news-swiper__prev',
  }
})
// our-speakers__swiper
const speakersSwiper = new Swiper('.our-speakers__swiper', {
  slidesPerView: 6,
  speed: 800,
  spaceBetween: 22,
  navigation: {
    nextEl: '.our-speakers__swiper-next',
    prevEl: '.our-speakers__swiper-prev',
  }
})

// news-bottom__swiper
const newsBottomSwiper = new Swiper('.news-bottom__swiper', {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})
//
const cards = document.querySelectorAll(".card");
if (cards) {
  cards.forEach(card => {
    const heartBtn = card.querySelector(".heart-icon");

    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("active");
    })
  })
}


// Initialize filter groups
// Get all filter groups
const filterGroups = document.querySelectorAll('.filter-options');

if (filterGroups) {
  filterGroups.forEach(group => {
    const buttons = group.querySelectorAll('.filter-button');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        // If it's a single-select group (format)
        if (group.dataset.filterGroup === 'format') {
          // Remove active class from all buttons in this group
          buttons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');
        }
        // If it's a multi-select group (type)
        else if (group.dataset.filterGroup === 'type') {
          // Toggle active class on clicked button
          button.classList.toggle('active');
        }

        // Log selected filters
        logSelectedFilters();
      });
    });
  });

  // Function to log selected filters
  function logSelectedFilters() {
    const selectedFilters = {
      format: [],
      type: []
    };

    // Get selected format
    const formatButtons = document.querySelector('[data-filter-group="format"]')
      .querySelectorAll('.filter-button.active');
    formatButtons.forEach(button => {
      selectedFilters.format.push(button.textContent);
    });

    // Get selected types
    const typeButtons = document.querySelector('[data-filter-group="type"]')
      .querySelectorAll('.filter-button.active');
    typeButtons.forEach(button => {
      selectedFilters.type.push(button.textContent);
    });
  }
}

const topicButtons = document.querySelectorAll('.topic-button');

if (topicButtons) {
  const showMoreButton = document.querySelector('.show-more');
  let isExpanded = false;

  // Add click handlers to all topic buttons
  topicButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Toggle active state on the clicked button
      button.classList.toggle('active');

      // Log selected topics
      logSelectedTopics();
    });
  });

  // Show more/less functionality
  showMoreButton.addEventListener('click', function (e) {
    e.preventDefault();
    const hiddenTopics = document.querySelectorAll('.topic-button.hidden');

    if (!isExpanded) {
      // Show hidden elements
      hiddenTopics.forEach(topic => {
        topic.classList.remove('hidden');
        topic.classList.add('visible'); // Add a class for visible state
      });
      showMoreButton.textContent = 'Показать меньше';
    } else {
      // Remove visible elements
      const visibleTopics = document.querySelectorAll('.topic-button.visible');
      visibleTopics.forEach(topic => {
        topic.classList.add('hidden'); // Completely remove the element
      });
      showMoreButton.textContent = 'Показать все 26';
    }

    isExpanded = !isExpanded;
  });

  // Function to log selected topics
  function logSelectedTopics() {
    const selectedTopics = Array.from(document.querySelectorAll('.topic-button.active'))
      .map(button => button.textContent);
  }
}


const dropdown = document.querySelector('.dropdown');
const select = document.querySelector('.organizer__select');
const items = document.querySelectorAll('.dropdown__item');

// Toggle dropdown
select.addEventListener('click', function () {
  dropdown.classList.toggle('active');
});

// Select item
items.forEach(item => {
  item.addEventListener('click', function () {
    select.textContent = item.textContent;
    dropdown.classList.remove('active');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});

// Download calendar functionality
const downloadBtn = document.querySelector('.organizer__download');
downloadBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const selectedOrganizer = select.textContent;
  if (selectedOrganizer !== 'Выберите организатора') {
    console.log(`Downloading calendar for: ${selectedOrganizer}`);
    // Add your download logic here
  } else {
    console.log('Please select an organizer first');
  }
});
