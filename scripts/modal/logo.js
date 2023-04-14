const logo = document.querySelector(".logo").cloneNode(true); // Deep clone of logo element node list to add it to modal window
logo.classList.add("logo__hidden"); // Add class to hide logo on start
logo.classList.add("events__none"); // Disable pointer events on logo inside modal window

export default logo;