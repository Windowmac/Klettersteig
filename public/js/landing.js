console.log('this is the landing page!');
const searchButton = document.getElementById('searchbutton');

const searchHikes = async () => {
  const response = await fetch('/api/hikes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data);

  if (response.length) {
    response.forEach((hike) => {
      const link = document.createElement('a');
      link.textContent = hike.name;
      link.href = `hikes/${hike.id}`;
      document.getElementById('searchDisplay').appendChild(link);
    });
  }
};

searchButton.addEventListener('click', () => {
  searchHikes();
});