document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(['interval', 'isPaused'], function(items) {
    document.getElementById('intervals').value = items.interval || '60';
    document.getElementById('toggleButton').innerHTML = items.isPaused ? '&#9654;' : '&#9208;';
    document.getElementById('toggleButton').setAttribute('data-playing', !items.isPaused);
  });

  document.getElementById('intervals').addEventListener('change', function() {
    let intervalValue = this.value;
    chrome.storage.sync.set({ interval: intervalValue }, function() {
      console.log('Interval set to ' + intervalValue);
    });
  });

  document.getElementById('toggleButton').addEventListener('click', function() {
    let isPlaying = this.getAttribute('data-playing') === 'true';
    this.innerHTML = isPlaying ? '&#9654;' : '&#9208;';
    this.setAttribute('data-playing', isPlaying ? 'false' : 'true');

    if (!isPlaying) {
      let interval = document.getElementById('intervals').value;
      chrome.alarms.create('Refresh', { periodInMinutes: parseInt(interval) });
      console.log('Alarm started with interval ' + interval + ' minutes');
      chrome.storage.sync.set({ isPaused: false }, function() {
        console.log('Pause state set to false');
      });
    } else {
      chrome.alarms.clear('Refresh');
      console.log('Alarm stopped');
      chrome.storage.sync.set({ isPaused: true }, function() {
        console.log('Pause state set to true');
      });
    }
  });
});

chrome.runtime.onMessage.addListener(function(message) {
  if (message.alarmFired) {
    console.log('Alarm fired at ' + new Date().toString());
  }
});
