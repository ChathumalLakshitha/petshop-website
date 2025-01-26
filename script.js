// Select the carousel element by its ID
const carousel = document.getElementById('carousel');

// Use Bootstrap's carousel method to enable auto-sliding
if (carousel) {
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000, // Time between slides in milliseconds (3 seconds)
    ride: 'carousel', // Automatically start sliding
  });
}
