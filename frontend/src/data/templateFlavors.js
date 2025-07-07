const templateFlavors = {
  grid: [
    {
      id: 'grid-default',
      name: 'Standard Grid',
      description: 'A classic, evenly spaced grid layout.',
      config: { columns: 3, gap: '20px', aspectRatio: '16/9' },
    },
    {
      id: 'grid-masonry',
      name: 'Masonry Grid',
      description: 'An elegant, Pinterest-style masonry layout.',
      config: { columns: 3, gap: '15px', masonry: true },
    },
    {
      id: 'grid-card',
      name: 'Card Grid',
      description: 'Grid with distinct cards for each item.',
      config: { columns: 2, gap: '25px', cardStyle: true },
    },
  ],
  carousel: [
    {
      id: 'carousel-fade',
      name: 'Fade Carousel',
      description: 'Smooth fading transitions between slides.',
      config: { effect: 'fade', autoplay: true },
    },
    {
      id: 'carousel-slide',
      name: 'Slide Carousel',
      description: 'Classic sliding animation for media.',
      config: { effect: 'slide', autoplay: false },
    },
    {
      id: 'carousel-coverflow',
      name: 'Coverflow Carousel',
      description: 'An immersive 3D coverflow effect.',
      config: { effect: 'coverflow', autoplay: false },
    },
  ],
  list: [
    {
      id: 'list-simple',
      name: 'Simple List',
      description: 'A straightforward, clean vertical list.',
      config: { showThumbnails: true, showDescription: true },
    },
    {
      id: 'list-compact',
      name: 'Compact List',
      description: 'A minimalist list for quick browsing.',
      config: { showThumbnails: false, showDescription: false },
    },
    {
      id: 'list-detailed',
      name: 'Detailed List',
      description: 'Comprehensive view with extended descriptions.',
      config: { showThumbnails: true, showDescription: true, expanded: true },
    },
  ],
};

export default templateFlavors;
