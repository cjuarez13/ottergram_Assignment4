function addEventClickHandler(links) {
    'use strict';
    links.addEventListener('click', function (event) {
        event.preventDefault();
    });
}

function getLinks() {
    'use strict';
    var links = document.querySelectorAll('a');
    return links;

}

function initializeEvents () {
    var anchorTags = getLinks();
    anchorTags.forEach(addEventClickHandler);
}

initializeEvents();
