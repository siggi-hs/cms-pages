const mediaContainer = document.querySelectorAll('[data-video-container]');
const mediaVideoItem = document.querySelectorAll('[data-video-item]');

mediaContainer.forEach((c, i) => {
    mediaContainer[i].setAttribute('data-video-container', [i]);
    mediaVideoItem[i].setAttribute('data-video-item', [i]);
});

mediaVideoItem.forEach((v) => {
    v.controls = true;
    v.preload = 'metadata';
    v.setAttribute('playsinline', 'true');
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        v.autoplay = false;
        v.muted = false;
        v.loop = false;
    } else {
        v.autoplay = false;
        v.muted = true;
        v.loop = false;
    }
    v.onended = function(e) {
        this.currentTime = 0;
    };
});
