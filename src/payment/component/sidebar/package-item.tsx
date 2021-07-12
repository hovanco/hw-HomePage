import React, { FC, useState } from 'react';
import { IPackage } from '../../constants';
import { formatDescription, formatMoney } from '../../utils';

interface Props {
    packageItem: IPackage;
}

const PackageItem: FC<Props> = ({ packageItem }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    };

    const desc = formatDescription(packageItem.description);

    return (
        <div className='border-b'>
            <div
                className='flex items-center justify-between pl-10 py-4 pr-4 cursor-pointer hover:bg-gray-50'
                onClick={toggle}
            >
                <div className='flex-1' style={{ color: packageItem.color }}>
                    <div className='text-md xl:text-lg'>
                        {`${packageItem.alias} - ${formatMoney(packageItem.price)}đ/ Tháng`}
                    </div>
                    <span className='text-gray-500 text-sm'>Lập hóa đơn hàng tháng</span>
                </div>
                <div className='ml-8'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                        />
                    </svg>
                </div>
            </div>

            {open && (
                <ul>
                    {desc.map((text: string, index: number) => {
                        const className = `pl-10 py-3 pr-5 flex items-center justify-between ${
                            index % 2 === 0 ? 'bg-gray-100' : ''
                        }`;
                        return (
                            <li className={className} key={text}>
                                <span>{text}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export { PackageItem };
