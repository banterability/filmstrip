(function detectImageUrl(){
  var imageUrl = document.querySelector('.LikeableFrame > div').style.backgroundImage.substr(4).slice(0, -1);
  chrome.runtime.sendMessage({imageUrl: imageUrl});
})();
