const PRESETS = ['10', '30', '60', '120', '180'];
const ALL_REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function formatInterval(val) {
  let mins = parseInt(val);
  if (mins < 60) return mins + ' minute' + (mins !== 1 ? 's' : '');
  let hours = mins / 60;
  let rounded = Math.round(hours * 10) / 10;
  return rounded + ' hour' + (rounded !== 1 ? 's' : '');
}

function applyInterval(val) {
  document.getElementById('intervalDisplay').innerText = formatInterval(val);
}

document.addEventListener('DOMContentLoaded', function() {

  // ── Load saved settings ──
  chrome.storage.sync.get(['interval', 'isPaused', 'selectedRegions', 'onboardingComplete'], function(items) {
    let interval = items.interval || '60';

    // Interval dropdown
    if (PRESETS.includes(interval)) {
      document.getElementById('intervals').value = interval;
      document.getElementById('customWrapper').classList.add('hidden');
    } else {
      document.getElementById('intervals').value = 'custom';
      document.getElementById('customMinutes').value = interval;
      document.getElementById('customWrapper').classList.remove('hidden');
    }
    applyInterval(interval);

    // Play/pause button
    let paused = items.isPaused || false;
    document.getElementById('toggleButton').innerHTML = paused ? '&#9654;' : '&#9208;';
    document.getElementById('toggleButton').setAttribute('data-playing', !paused);

    // Region checkboxes
    let selectedRegions = items.selectedRegions || ALL_REGIONS;
    document.querySelectorAll('.region-check').forEach(cb => {
      cb.checked = selectedRegions.includes(cb.value);
    });

    // Onboarding
    if (!items.onboardingComplete) {
      document.getElementById('onboarding').classList.remove('hidden');
    }
  });

  // ── Onboarding dismiss ──
  document.getElementById('onboardingDone').addEventListener('click', function() {
    chrome.storage.sync.set({ onboardingComplete: true });
    document.getElementById('onboarding').classList.add('hidden');
  });

  // ── Interval dropdown ──
  document.getElementById('intervals').addEventListener('change', function() {
    let val = this.value;
    if (val === 'custom') {
      document.getElementById('customWrapper').classList.remove('hidden');
      document.getElementById('customMinutes').focus();
      return;
    }
    document.getElementById('customWrapper').classList.add('hidden');
    chrome.storage.sync.set({ interval: val });
    applyInterval(val);
  });

  // ── Custom interval ──
  function setCustomInterval() {
    let raw = document.getElementById('customMinutes').value;
    let val = parseInt(raw);
    if (isNaN(val) || val < 1) return;
    let strVal = String(val);
    chrome.storage.sync.set({ interval: strVal });
    applyInterval(strVal);
  }

  document.getElementById('customSet').addEventListener('click', setCustomInterval);
  document.getElementById('customMinutes').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') setCustomInterval();
  });

  // ── Region checkboxes ──
  document.querySelectorAll('.region-check').forEach(cb => {
    cb.addEventListener('change', function() {
      let selected = Array.from(document.querySelectorAll('.region-check:checked')).map(el => el.value);
      if (selected.length === 0) {
        this.checked = true;
        return;
      }
      chrome.storage.sync.set({ selectedRegions: selected });
    });
  });

  // ── Play/pause toggle ──
  document.getElementById('toggleButton').addEventListener('click', function() {
    let isPlaying = this.getAttribute('data-playing') === 'true';
    this.innerHTML = isPlaying ? '&#9654;' : '&#9208;';
    this.setAttribute('data-playing', isPlaying ? 'false' : 'true');

    if (!isPlaying) {
      let interval = document.getElementById('intervals').value;
      if (interval === 'custom') {
        interval = document.getElementById('customMinutes').value || '60';
      }
      chrome.alarms.create('Refresh', { periodInMinutes: parseInt(interval) });
      chrome.storage.sync.set({ isPaused: false });
    } else {
      chrome.alarms.clear('Refresh');
      chrome.storage.sync.set({ isPaused: true });
    }
  });

});
