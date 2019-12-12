import React from 'react';
import PropsTypes from 'prop-types';

const Message = ({author, message}) => (
    <p>
        <i>{author}:</i>
        {message}
    </p>
);

Message.propsTypes = {
    author: PropsTypes.string.isRequired,
    message: PropsTypes.string.isRequired
};

export default Message;