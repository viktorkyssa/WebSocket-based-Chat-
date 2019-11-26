import React from 'react';
import PropsTypes from 'prop-types';

import Message from "./Message";

const MessagesList = ({ messages }) => {
	return(
		<section id="messages-list">
			<ul>
				{messages.map(message => <Message key={message.id} {...message} />)}
			</ul>
		</section>
	)
};

MessagesList.propTypes = {
	messages: PropsTypes.arrayOf(
		PropsTypes.shape({
			id: PropsTypes.number.isRequired,
			message: PropsTypes.string.isRequired,
			author: PropsTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default MessagesList;