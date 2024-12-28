// Initialize Swiper
const newSwiper = new Swiper('.news-swiper', {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 1,
  navigation: {
    nextEl: '.news-swiper__next',
    prevEl: '.news-swiper__prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
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
  },
  breakpoints: {
    1390: {
      slidesPerView: 6,
      spaceBetween: 22,
    },
    1198: {
      slidesPerView: 5,
      spaceBetween: 22,
    },
    1034: {
      slidesPerView: 4.8,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})

// speaker-swiper
const speakerSwiper = new Swiper('.speaker-swiper', {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  navigation: {
    nextEl: '.speaker-swiper__next',
    prevEl: '.speaker-swiper__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
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
  const showMoreCard = document.querySelector(".show-more__card");
  cards.forEach(card => {
    const heartBtn = card.querySelector(".heart-icon");

    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("active");
    })
  })
  if (showMoreCard) {
    showMoreCard.addEventListener("click", () => {
      cards.forEach(item => {
        if (item.classList.contains("media-hide__card")) {
          item.classList.remove("media-hide__card");
          showMoreCard.style.display = "none";
        }
      })
    })
  }
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
  if (showMoreButton) {
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
  }

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
if (select) {
  select.addEventListener('click', function () {
    dropdown.classList.toggle('active');
  });
}

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
if (downloadBtn) {
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
}

// media menu
const openMenuBtn = document.querySelector(".menu-btn");
const mediManu = document.querySelector(".media-nav");
const closeMenu = document.querySelector(".close-menu");
openMenuBtn.addEventListener("click", () => {
  mediManu.classList.add("show");
  document.body.style.overflow = "hidden";
})
closeMenu.addEventListener("click", () => {
  mediManu.classList.remove("show");
  document.body.style.overflow = "";
})


const dropDown = document.querySelectorAll(".dropdown");

if (dropDown) {
  dropDown.forEach(item => {
    const dropBox = item.querySelector(".drop-box");
    const dropDownOptions = item.querySelector(".dropdown-options");

    if (dropBox && dropDownOptions) {
      dropBox.addEventListener("click", () => {
        dropDown.forEach(otherItem => {
          const otherDropBox = otherItem.querySelector(".drop-box");
          const otherDropDownOptions = otherItem.querySelector(".dropdown-options");

          if (otherDropBox && otherDropDownOptions && otherDropBox !== dropBox) {
            otherDropBox.classList.remove("active");
            otherDropDownOptions.classList.remove("show");
          }
        });

        dropBox.classList.toggle("active");
        dropDownOptions.classList.toggle("show");
      });
    }
  });
}

const selectContainer = document.querySelectorAll(".select-container");


if (selectContainer) {
  selectContainer.forEach(container => {
    const customSelect = container.querySelector(".custom-select");
    const selectedBox = container.querySelector(".selected-box");
    const options = container.querySelector(".options");
    const selectOptions = container.querySelectorAll(".select-option");
    const selectedText = container.querySelector(".selected-text");

    selectedBox.addEventListener("click", (e) => {
      e.stopPropagation();
      options.classList.toggle("show");
      customSelect.classList.toggle("active");
    });

    selectOptions.forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedText.textContent = el.textContent;
        selectOptions.forEach(item => item.classList.remove("active"));
        el.classList.add("active");
        options.classList.remove("show");
        customSelect.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {

      if (!customSelect.contains(e.target)) {
        options.classList.remove("show");
        customSelect.classList.remove("active");
      }
    });
  })
}


//
const moreSldie = document.querySelector(".our-speakers .show-more__card");
if (moreSldie) {
  const card = document.querySelectorAll(".our-speakers .card-sec");
  moreSldie.addEventListener("click", () => {
    card.forEach(item => {
      if (item.classList.contains("media-hide__card")) {
        item.classList.remove("media-hide__card");
        moreSldie.style.display = "none"
      }
    })
  })
}

if (selectContainer.length == 0) {
  const customSelect = document.querySelector(".custom-select");
  const selectedBox = document.querySelector(".selected-box");
  const options = document.querySelector(".options");
  const selectOptions = document.querySelectorAll(".select-option");
  const selectedText = document.querySelector(".selected-text");

  if (selectedBox) {
    selectedBox.addEventListener("click", (e) => {
      e.stopPropagation();
      options.classList.toggle("show");
      customSelect.classList.toggle("active");
    });
  }

  selectOptions.forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedText.textContent = el.textContent;
      selectOptions.forEach(item => item.classList.remove("active"));
      el.classList.add("active");
      options.classList.remove("show");
      customSelect.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {

    if (!customSelect.contains(e.target)) {
      options.classList.remove("show");
      customSelect.classList.remove("active");
    }
  });
}


