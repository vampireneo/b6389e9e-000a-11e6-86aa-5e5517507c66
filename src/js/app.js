'use strict';
require('!style!css!../style/main.css');
const $ = require('jquery');

$('#SendMsgMessage').keypress(function (e) {
  let msgLength = e.target.value.length;
  if (msgLength >= 140) {
    e.preventDefault();
  }
}).keyup(function (e) {
  let msgLength = e.target.value.length;
  $('#SendMsgMessageCount').text(msgLength);
});

$('.send-me-msg .btn').click(function (e) {
  e.preventDefault();
  $('#SendMsgSubject').val('');
  $('#SendMsgMessage').val('').keyup();
});
