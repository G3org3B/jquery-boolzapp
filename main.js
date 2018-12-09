
var messagesCont = $('.wrapper_chat .box_chat');

$(document).ready(function()

{

	$('.input_message').keypress(function(e) {

		if (e.which == 13) {

			var thisInput = $(this),
			newMessage = thisInput.val();

			if (newMessage) {

				var messageTemplate = $('.template .message_destinatario').clone();
				messageTemplate.children('.testo_messaggio').text(newMessage);

				messagesCont.append(messageTemplate);

				var clearTemplate = $('.template .clear_both').clone();
				messagesCont.append(clearTemplate);

				thisInput.val('');
			}
		}
	});
});
