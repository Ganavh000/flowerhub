document.addEventListener("DOMContentLoaded", function() {
    fetchSectionData('home');
});

function fetchSectionData(section) {
    fetch(`data/${section}.json`)
        .then(response => response.json())
        .then(data => populateSection(data))
        .catch(error => console.error('Error fetching section data:', error));
}

function populateSection(data) {
    const sectionContainer = document.getElementById('section-container');
    sectionContainer.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('section-card');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.description;

        const body = document.createElement('div');
        body.classList.add('card-body');

        const description = document.createElement('p');
        description.textContent = item.description;

        body.appendChild(description);
        card.appendChild(image);
        card.appendChild(body);

        sectionContainer.appendChild(card);
    });
}
