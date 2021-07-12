import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { SelectPackage } from '../select-package';

const customStyles = {
    overlay: {
        background: 'rgb(17 17 17 / 25%)',
    },
    content: {
        border: 'none',
        borderRadius: 0,
        padding: 0,
        width: '100%',
        maxWidth: 960,
        left: '50%',
        bottom: 40,
        transform: 'translateX(-50%)',
        zIndex: 100,
    },
};

Modal.setAppElement('#paymentRoot');

const AddMorePackage: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className='flex text-color-main cursor-pointer' onClick={toggle}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                        clip-rule='evenodd'
                    />
                </svg>
                <span className='ml-1'>Mua thêm gói </span>
            </div>

            <Modal
                isOpen={open}
                onAfterOpen={() => {}}
                onRequestClose={toggle}
                contentLabel='Example Modal'
                style={customStyles}
            >
                <div className='bg-gray-100 relative text-center py-3'>
                    <span>Mua thêm gói</span>

                    <span className='absolute right-4' onClick={toggle}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clip-rule='evenodd'
                            />
                        </svg>
                    </span>
                </div>

                <div className='p-5'>
                    <SelectPackage toggle={toggle} />
                </div>
            </Modal>
        </>
    );
};

export { AddMorePackage };
