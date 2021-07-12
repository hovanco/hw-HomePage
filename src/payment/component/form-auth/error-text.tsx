import React, { FC } from 'react';
import { Message } from 'react-hook-form';

interface Props {
    message: Message;
}

const ErrorText: FC<Props> = ({ message }) => {
    return (
        <span role='alert' className='text-sm text-red-600 mt-1'>
            {message}
        </span>
    );
};

export { ErrorText };
