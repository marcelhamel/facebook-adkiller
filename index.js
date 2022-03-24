const removeFacebookAds = () => {
  chrome.tabs.query({highlighted: true})
  .then((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab[0].id },
      function: function() {
        window.setInterval(() => {
          const feedUnits = [].slice.call(document.querySelectorAll('div[data-pagelet^="FeedUnit"]'));
          feedUnits.forEach(x => { if(x.innerHTML.includes('Sponsored')) x.remove(); });
        }, 1000)
      }
    });
  }).catch(err => console.log('Error in Facebook AdKiller: ', err));
}

const filter = { url: [{ hostContains: '.facebook', schemes: ['http', 'https'] }]};

chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(removeFacebookAds, filter);
});
