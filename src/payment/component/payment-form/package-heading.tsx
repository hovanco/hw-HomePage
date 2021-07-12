import React, { FC } from 'react';
import { formatMoney } from '../../utils';

interface Props {
    title: string;
    price: number;
    removePackage: () => void;
}

const PackageHeading: FC<Props> = ({ title, price, removePackage }) => {
    return (
        <div className='flex items-baseline justify-between mb-3'>
            <div>
                <div className='font-medium mb-1'>Gói {title}</div>
                <div>{formatMoney(price)}đ/1 tháng (đã bao gồm thuế)</div>
            </div>

            <span className='block cursor-pointer' onClick={removePackage}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M6 18L18 6M6 6l12 12'
                    />
                </svg>
            </span>
        </div>
    );
};

export { PackageHeading };
