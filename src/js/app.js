'use strict';
require('!style!css!../style/main.css');
require('!style!css!sass!../style/base.sass');
const $ = require('jquery');
const main = require('../template/main.jade')();

$('body').html(main);

$('#SendMsgMessage').keypress(function (e) {
  let msgLength = e.target.value.length;
  if (msgLength >= 140) {
    e.preventDefault();
  }
}).keyup(function (e) {
  let msgLength = e.target.value.length;
  $('#SendMsgMessageCount').text(msgLength + '/140');
});

$('.send-me-msg .btn').click(function (e) {
  e.preventDefault();
  $('#SendMsgSubject').val('');
  $('#SendMsgMessage').val('').keyup();
});
