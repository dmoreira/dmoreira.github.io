var toggleMenu = function() {
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

$(function() {
  navigator.getWakeLock("screen").then(function(wakeLock) {
    var request = wakeLock.createRequest();    
});
