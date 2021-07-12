import React, { FC } from 'react';

interface Props {
    full?: boolean;
}

const LoadingCom = () => (
    <div className='lds-ripple'>
        <div></div>
        <div></div>
    </div>
);

const Loading: FC<Props> = ({ full = true }) => {
    if (full) {
        return (
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-pink flex items-center justify-center'>
                <LoadingCom />
            </div>
        );
    }

    return <LoadingCom />;
};

export { Loading };
