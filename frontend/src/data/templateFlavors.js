const templateFlavors = {
  grid: [
    {
      id: 'grid-default',
      name: 'Standard Grid',
      description: 'A classic, evenly spaced grid layout with subtle shadows.',
      config: {
        columns: 3,
        gap: '20px',
        aspectRatio: '16/9',
        itemBg: '#fff',
        itemShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        itemBorderRadius: '10px',
        titleColor: '#333',
        descriptionColor: '#666',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&h=200&q=80', // Urban Cityscape
      },
    },
    {
      id: 'grid-minimal',
      name: 'Minimal Grid',
      description: 'A clean, minimalist grid with thin borders and no shadows.',
      config: {
        columns: 4,
        gap: '15px',
        aspectRatio: '4/3',
        itemBg: '#f9f9f9',
        itemShadow: 'none',
        itemBorder: '1px solid #eee',
        itemBorderRadius: '5px',
        titleColor: '#444',
        descriptionColor: '#777',
        thumbnail: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&h=200&q=80', // Mountain Landscape
      },
    },
    {
      id: 'grid-magazine',
      name: 'Magazine Grid',
      description: 'A dynamic, magazine-style layout with varied item sizes.',
      config: {
        columns: 'auto-fit',
        gap: '25px',
        aspectRatio: 'auto',
        itemBg: '#fff',
        itemShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
        itemBorderRadius: '15px',
        titleColor: '#222',
        descriptionColor: '#555',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&h=200&q=80', // Reusing urban cityscape for now
      },
    },
  ],
  carousel: [
    {
      id: 'carousel-fade',
      name: 'Fade Carousel',
      description: 'Smooth fading transitions between slides with centered content.',
      config: {
        effect: 'fade',
        autoplay: true,
        navColor: '#fff',
        dotColor: '#bbb',
        activeDotColor: '#61dafb',
        itemBg: '#f0f0f0',
        itemShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        thumbnail: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&h=200&q=80', // Mountain Landscape
      },
    },
    {
      id: 'carousel-slide',
      name: 'Slide Carousel',
      description: 'Classic sliding animation for media with prominent navigation.',
      config: {
        effect: 'slide',
        autoplay: false,
        navColor: '#61dafb',
        dotColor: '#ccc',
        activeDotColor: '#4fa3d1',
        itemBg: '#fff',
        itemShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&h=200&q=80', // Urban Cityscape
      },
    },
    {
      id: 'carousel-minimal',
      name: 'Minimal Carousel',
      description: 'A clean, borderless carousel with subtle indicators.',
      config: {
        effect: 'slide',
        autoplay: true,
        navColor: 'rgba(0,0,0,0.6)',
        dotColor: 'rgba(255,255,255,0.5)',
        activeDotColor: '#fff',
        itemBg: 'transparent',
        itemShadow: 'none',
        thumbnail: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&h=200&q=80', // Reusing mountain landscape
      },
    },
  ],
  list: [
    {
      id: 'list-simple',
      name: 'Simple List',
      description: 'A straightforward, clean vertical list with clear separation.',
      config: {
        showThumbnails: true,
        showDescription: true,
        itemBg: '#f9f9f9',
        itemShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        itemBorderRadius: '8px',
        titleColor: '#333',
        descriptionColor: '#666',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&h=200&q=80', // Urban Cityscape
      },
    },
    {
      id: 'list-compact',
      name: 'Compact List',
      description: 'A minimalist list for quick browsing, focusing on titles.',
      config: {
        showThumbnails: false,
        showDescription: false,
        itemBg: '#fff',
        itemShadow: 'none',
        itemBorder: '1px solid #eee',
        itemBorderRadius: '5px',
        titleColor: '#444',
        descriptionColor: '#777',
        thumbnail: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&h=200&q=80', // Mountain Landscape
      },
    },
    {
      id: 'list-detailed',
      name: 'Detailed List',
      description: 'Comprehensive view with extended descriptions and full media embeds.',
      config: {
        showThumbnails: true,
        showDescription: true,
        expanded: true,
        itemBg: '#f0f0f0',
        itemShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
        itemBorderRadius: '12px',
        titleColor: '#222',
        descriptionColor: '#555',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&h=200&q=80', // Reusing urban cityscape
      },
    },
  ],
};

export default templateFlavors;
