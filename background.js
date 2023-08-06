chrome.runtime.onInstalled.addListener(function() {
  // Set up initial storage values when the extension is installed
  chrome.storage.sync.set({ interval: '10', isPaused: false }, function() {
    console.log('Initial values set');
  });

  chrome.storage.sync.get('interval', function(result) {
    chrome.alarms.create('Refresh', { periodInMinutes: parseInt(result.interval) });
    console.log('Alarm created'); 
  });
});  
 
chrome.alarms.onAlarm.addListener(function(alarm) { 
  if (alarm.name === 'Refresh') {
    console.log("Interval triggered at " + new Date().toString());
    chrome.tabs.create({url: chrome.runtime.getURL('popup.html')});
    chrome.runtime.sendMessage({alarmFired: true});
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === 'interval') {
      chrome.alarms.clear('Refresh', function() {
        console.log('Alarm cleared');
      });

      chrome.alarms.create('Refresh', { periodInMinutes: parseInt(newValue) });
      console.log('Alarm created with interval ' + newValue + ' seconds');
    }
  }
});
