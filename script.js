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
    sectionContainer.innerHTML = ''; // Clear existing content
    
    data.forEach(item => {
        const section = document.createElement('section');
        
        const image = document.createElement('img');
        image.src = item.image;
        section.appendChild(image);
        
        const description = document.createElement('p');
        description.textContent = item.description;
        section.appendChild(description);
        
        sectionContainer.appendChild(section);
    });
}
