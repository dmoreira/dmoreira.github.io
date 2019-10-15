var toggleMenu = function () {
  $('#toggle').toggle('slide');
  $('#overlay-main').toggle();
};

var BLUES = 'visma.com_1uj1dfbn5jtgu8bfcis9terc8s@group.calendar.google.com';
var SOUL = 'visma.com_sbg788eh8qlj1d5ipbvk0pghm8@group.calendar.google.com';
var JAZZ = 'visma.com_f62kg5sc74kmcfcs6kt61939ro@group.calendar.google.com';
var ROCK = 'visma.com_9bql35s40br3mdlngd8glo0sek@group.calendar.google.com';
var JOIKU = 'visma.com_2vdf38fprd1c94m8j1q0bm4prg@group.calendar.google.com';
var TEKNO = 'visma.com_kbbu7dto92de9qe51hnnmb5830@group.calendar.google.com';
var rooms = [{
  id: SOUL,
  name: 'SOUL'
}, {
  id: JAZZ,
  name: 'JAZZ'
}, {
  id: BLUES,
  name: 'BLUES'
}, {
  id: ROCK,
  name: 'ROCK'
}, {
  id: JOIKU,
  name: 'JOIKU'
}, {
  id: TEKNO,
  name: 'TEKNO'
}];
$(function () {
  if ('WakeLock' in window) {
    const requestWakeLock = () => {
      const controller = new AbortController();
      const signal = controller.signal;
      window.WakeLock.request('screen', {
        signal
      }).catch(e => {
        if (e.name === 'AbortError') {
          wakeLockCheckbox.checked = false;
          console.log('Wake Lock was aborted');
        } else {
          console.error(`${e.name}, ${e.message}`);
        }
      });
      wakeLockCheckbox.checked = true;
      console.log('Wake Lock is active');
      return controller;
    };
    $("#awake").html('awakey!');
    requestWakeLock();
  } else {
    console.log('not awakey');
    $("#awake").html('not awakey :(');
  }
});
