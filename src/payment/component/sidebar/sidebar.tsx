import React, { FC } from 'react';
import { PackagesList } from './packages-list';

const Sidebar: FC = () => {
    return (
        <div className='bg-white border-r max-w-sm fixed md:relative top-0 left-0 bottom-0 z-50'>
            <div className='border-b pl-10 py-5 pr-5'>
                <a href='/'>
                    <img src='images/logo_v2.png' alt='Insa' className='h-4 block' />
                </a>

                <div className='mt-2 text-sm text-gray-500'>BẠN ĐANG CHỌN</div>
            </div>
            <PackagesList />
        </div>
    );
};

export { Sidebar };
