import React, { FC, useState } from 'react';
import { formatDescription } from '../../utils';

interface Props {
    content: string;
}

const PackageDetail: FC<Props> = ({ content }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    };

    const styleArrow = open
        ? {
              transform: 'rotate(90deg)',
          }
        : {};

    const stringArr = formatDescription(content);

    return (
        <div className='bg-gray-100'>
            <div className='flex justify-between items-center p-4 cursor-pointer' onClick={toggle}>
                <span className='font-medium text-sm'>Chi tiết gói sản phẩm</span>
                <span style={styleArrow}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path
                            fill-rule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clip-rule='evenodd'
                        />
                    </svg>
                </span>
            </div>

            {open && (
                <div className='px-4 pb-4'>
                    <ul style={{ color: '#222a46' }} className='grid gap-2 text-sm'>
                        {stringArr.map((string) => (
                            <li key={string}>- {string}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export { PackageDetail };
