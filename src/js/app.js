'use strict';
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
	if ($('#SendMsgSubject').val().length === 0) {
		$('#SendMsgMessageResponse').text('Please input subject.');
	} else if ($('#SendMsgMessage').val().length === 0) {
		$('#SendMsgMessageResponse').text('Please input your message.');
	} else {
		$('#SendMsgSubject').val('');
		$('#SendMsgMessage').val('').keyup();
		$('#SendMsgMessageResponse').text('Your message is sent.');
	}
});
