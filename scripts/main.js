var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
// var ONE_KEY = 1;
// var TWO_KEY = 2;
// var THREE_KEY = 3;
// var FOUR_KEY = 4;
// var FIVE_KEY = 5;
/*Create an array of keys*/
var KEYS = [49,50,51,52,53,54,55,56,57];
var i, tLen;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb (thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb (thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails () {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function addKeyPressHandler (thumbnails) {
    'use strict';
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }

        /*Determine how many images and then assign the keys add one to it*/
        tLen = thumbnails.length;
        for (i = 0; i< tLen; i++) {
            if (event.keyCode === KEYS[i] ) {
                setDetailsFromThumb(thumbnails[i]);
                showDetails();
            }
        }
    });
}


function initializeEvents () {
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler(thumbnails);
}

initializeEvents();
