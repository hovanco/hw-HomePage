import React, { FC, useEffect, useState } from 'react';
import { AuthProvider, PackageProvider, StoreProvider, ToastProvider } from '../../state';
import { Sidebar } from '../sidebar';
import { PaymentContent } from './payment-content';

const Payment: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(window.innerWidth);

    const toggle = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const isMobile = width < 768;

    const renderSidebar = () => {
        if (isMobile) {
            if (visible) {
                return <Sidebar />;
            }

            return <></>;
        }
        return <Sidebar />;
    };

    return (
        <ToastProvider>
            <AuthProvider>
                <StoreProvider>
                    <PackageProvider>
                        {isMobile && (
                            <div className='border-b px-5 py-6'>
                                <div className='flex items-center justify-between'>
                                    <img
                                        src='images/logo_v2.png'
                                        alt='Insa'
                                        className='h-4 block'
                                    />
                                    <div onClick={toggle}>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-6 w-6'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='M4 6h16M4 12h16M4 18h16'
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='flex min-h-screen'>
                            {renderSidebar()}

                            {isMobile && visible && (
                                <div
                                    className='fixed z-20 top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-70'
                                    onClick={toggle}
                                />
                            )}

                            <div className='flex-1 '>
                                <div className='pt-16'>
                                    <PaymentContent />
                                </div>
                            </div>
                        </div>
                    </PackageProvider>
                </StoreProvider>
            </AuthProvider>
        </ToastProvider>
    );
};

export { Payment };
