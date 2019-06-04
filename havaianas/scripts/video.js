const mediaContainer = document.querySelectorAll('[data-video-container]');
const mediaVideoItem = document.querySelectorAll('[data-video-item]');

mediaContainer.forEach((c, i) => {
    mediaContainer[i].setAttribute('data-video-container', [i]);
    mediaVideoItem[i].setAttribute('data-video-item', [i]);
});

mediaVideoItem.forEach((v) => {

    v.controls = true;
    v.loop = true;
    v.preload = 'metadata';
    v.setAttribute('playsinline', 'true');

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // mobile!
        console.log('mobile');
        v.autoplay = false;
        v.muted = false;
    } else {
        console.log('desktop');
        v.autoplay = true;
        v.muted = true;
    }

});

