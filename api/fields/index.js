const categories = [
  {
    "id": 1,
    "slug": "drainage-system",
    "title": "Drainage System",
    "description": "Look for channel systems that is corrosion-free, permanently resistant without compromising design and installation efficiency.",
    "thumbnail": "/static/images/media-category-7.jpg",
    "badges": [
      "/static/images/media-badge-1.png", 
      "/static/images/media-badge-2.png"
    ]
  },
  {
    "id": 2,
    "slug": "fire-protection",
    "title": "Fire Protection",
    "description": "Your Fire Protection System should be specially engineered and approved for all light hazard applications. A reduction in labour and equipment costs will be a long-term maintenance savings.",
    "thumbnail": "/static/images/media-category-6.jpg",
    "badges": [
      "/static/images/media-badge-3.png", 
      "/static/images/media-badge-4.png"
    ]
  },
  {
    "id": 3,
    "slug": "sewer-treatment",
    "title": "Sewer Treatment",
    "description": "",
    "thumbnail": "/static/images/media-category-8.jpg",
    "badges": [
      "/static/images/media-badge-1.png", 
      "/static/images/media-badge-2.png"
    ]
  },
  {
    "id": 4,
    "slug": "water-storage",
    "title": "Water Storage",
    "description": "Water, is an essential resource and storing for long periods can introduce unwanted contamination. Preserve water sterility and proper temperature with the right containers.",
    "thumbnail": "/static/images/media-category-5.jpg",
    "badges": [
      "/static/images/media-badge-1.png", 
      "/static/images/media-badge-2.png"
    ]
  },
  {
    "id": 5,
    "slug": "potable-water-piping-system",
    "title": "Potable Water Piping System",
    "description": "Water, is an essential resource. Therefore, storage of clean, potable water for extended period remains a top priority.",
    "thumbnail": "/static/images/media-category-4.jpg",
    "badges": [
      "/static/images/media-badge-1.png", 
      "/static/images/media-badge-2.png"
    ]
  },
  {
    "id": 6,
    "slug": "pressure-reduction",
    "title": "Pressure Reduction",
    "description": "",
    "thumbnail": "/static/images/media-category-3.jpg",
    "badges": [
      "/static/images/media-badge-1.png", 
      "/static/images/media-badge-2.png"
    ]
  },
  {
    "id": 7,
    "slug": "sanitary-pipes",
    "title": "Sanitary Pipes",
    "description": "Water, is an essential resource. Therefore, storage of clean, potable water for extended period remains a top priority.",
    "thumbnail": "/static/images/media-category-1.jpg",
    "badges": [
      "/static/images/media-badge-1.png", 
      "/static/images/media-badge-2.png"
    ]
  },
  {
    "id": 8,
    "slug": "stormwater-management",
    "title": "Stormwater Management",
    "description": "Preserve water bodies from pollutants caused by stormwater runoffs using a system that effectively isolates unwanted sediments on waterways.",
    "thumbnail": "/static/images/media-category-2.jpg",
    "badges": [
      "/static/images/media-badge-1.png", 
      "/static/images/media-badge-2.png"
    ]
  }
];

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(categories));
}
