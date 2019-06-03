const mediaContainer = document.querySelectorAll('[data-video-container]');
const mediaVideoItem = document.querySelectorAll('[data-video-item]');

mediaContainer.forEach((c, i) => {
    mediaContainer[i].setAttribute('data-video-container', [i]);
    mediaVideoItem[i].setAttribute('data-video-item', [i]);
});

mediaVideoItem.forEach((v) => {
    v.autoplay = false;
    v.controls = true;
    v.muted = false;
    v.loop = true;
    v.preload = 'metadata';
    v.setAttribute('playsinline', 'true');
});