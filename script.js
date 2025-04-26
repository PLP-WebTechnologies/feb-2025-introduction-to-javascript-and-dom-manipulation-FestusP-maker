// Select elements
const heading = document.getElementById('main-heading');
const paragraph = document.getElementById('info-paragraph');
const changeTextBtn = document.getElementById('change-text-btn');
const toggleElementBtn = document.getElementById('toggle-element-btn');
const dynamicContent = document.getElementById('dynamic-content');

let serviceAdded = false;

// Change text content and style dynamically
changeTextBtn.addEventListener('click', () => {
    heading.textContent = "Boost Your Connectivity with Mobi & Co Telecoms!";
    paragraph.textContent = "Congratulations! Your telecom service information has been updated dynamically.";

    // Modify CSS styles via JavaScript
    heading.style.color = "#00796b";
    heading.style.fontFamily = "Verdana, sans-serif";
    heading.style.textAlign = "center";
    paragraph.style.fontSize = "1.3em";
});

// Add or remove telecom service dynamically
toggleElementBtn.addEventListener('click', () => {
    if (!serviceAdded) {
        const serviceBanner = document.createElement('div');
        serviceBanner.id = 'service-banner';
        serviceBanner.textContent = "📱 Exclusive Offer: Get Your DStv Installation Today!";
        serviceBanner.style.padding = "15px";
        serviceBanner.style.marginTop = "20px";
        serviceBanner.style.backgroundColor = "#c8e6c9";
        serviceBanner.style.border = "1px solid #388e3c";
        serviceBanner.style.borderRadius = "8px";
        serviceBanner.style.textAlign = "center";
        dynamicContent.appendChild(serviceBanner);
        serviceAdded = true;
    } else {
        const existingService = document.getElementById('service-banner');
        if (existingService) {
            dynamicContent.removeChild(existingService);
        }
        serviceAdded = false;
    }
});
