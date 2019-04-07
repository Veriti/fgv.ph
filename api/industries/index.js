const industries = [
  {
    "id": 1,
    "title": "Plumbing",
  },
  {
    "id": 2,
    "title": "Fire Protection",
  },
  {
    "id": 4,
    "title": "Water Treatment",
  },
  {
    "id": 5,
    "title": "Engineering",
  },
  {
    "id": 6,
    "title": "Industrial Piping",
  },
  {
    "id": 7,
    "title": "Drainage System",
  },
];

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(industries));
}
