chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason !== 'install') return;

  // Set up initial storage values when the extension is first installed
  chrome.storage.sync.set({ interval: '10', isPaused: false, streak: 0, selectedRegions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'], onboardingComplete: false }, function() {
    console.log('Initial values set');
    chrome.alarms.create('Refresh', { periodInMinutes: 10 });
    console.log('Alarm created');
  });
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === 'Refresh') {
    chrome.storage.session.get('activePopupTabId', function(result) {
      if (result.activePopupTabId) return;
      chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') }, function(tab) {
        chrome.storage.session.set({ activePopupTabId: tab.id });
      });
    });
  }
});

chrome.tabs.onRemoved.addListener(function(tabId) {
  chrome.storage.session.get('activePopupTabId', function(result) {
    if (result.activePopupTabId === tabId) {
      chrome.storage.session.remove('activePopupTabId');
    }
  });
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === 'interval') {
      chrome.storage.sync.get('isPaused', function(result) {
        if (result.isPaused) return;
        chrome.alarms.clear('Refresh', function() {
          console.log('Alarm cleared');
          chrome.alarms.create('Refresh', { periodInMinutes: parseInt(newValue) });
          console.log('Alarm created with interval ' + newValue + ' minutes');
        });
      });
    }
  }
});
