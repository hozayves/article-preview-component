const shareBtn = document.getElementsByClassName('share-container');
const shareContent = document.getElementsByClassName('share-content');
const articleShare = document.getElementsByClassName('article-share');
shareBtn[0].addEventListener('click', () => {
    if(shareContent[0].classList.contains('hide-share-content')) {
        shareContent[0].classList.remove('hide-share-content');
        shareContent[0].classList.add('show-share-content');
    } else {
        shareContent[0].classList.add('hide-share-content')
        shareContent[0].classList.remove('show-share-content')
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('share-container') || 
        e.target.classList.contains('share-content') ||
        e.target.classList.contains('shareIcon') ||
        e.target.classList.contains('article-share')) {
        shareContent[0].classList.add('show-share-content')
        shareContent[0].classList.remove('hide-share-content');
    } else {
        shareContent[0].classList.remove('show-share-content');
        shareContent[0].classList.add('hide-share-content');
    }
})