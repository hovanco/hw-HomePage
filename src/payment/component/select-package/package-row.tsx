import React, { FC, useState } from 'react';
import { IPackage } from '../../constants';

interface Props {
    packageItem: IPackage;
}

const PackageRow: FC<Props> = ({ packageItem }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className='package social'>
            <div className='flex items-center border-b border-gray-200 cursor-pointer'>
                <div className='flex-1 py-4 package-title' onClick={toggle}>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='flex items-center text-lg font-medium'>
                            <img
                                className='inline-block w-4 h-4 mr-1 icon-plus'
                                src='images/plus.svg'
                                alt=''
                                style={{
                                    transform: `rotate(${open ? '45deg' : '0deg'})`,
                                }}
                            />
                            {packageItem.package}
                        </div>
                        <div>
                            <img
                                className='inline-block w-6 h-6 mr-1'
                                src='images/check.svg'
                                alt=''
                            />
                        </div>
                        <div>
                            <img
                                className='inline-block w-6 h-6 mr-1'
                                src='images/check.svg'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>

            {open && (
                <div className='border-b border-gray-200 package-detail'>
                    {packageItem.features.map((item, index) => {
                        const className = `flex items-center py-3 ${
                            index % 2 === 0 ? 'bg-gray-100' : ''
                        }`;
                        return (
                            <div className={className}>
                                <div className='flex-1'>
                                    <div className='grid grid-cols-3 gap-5'>
                                        <div className='px-5'>{item.label}</div>
                                        <div>
                                            {item.month === 'check' ? (
                                                <img
                                                    className='inline-block w-4 h-4 mr-1'
                                                    src='images/check.svg'
                                                    alt=''
                                                />
                                            ) : (
                                                item.month
                                            )}
                                        </div>
                                        <div>
                                            {item.year === 'check' ? (
                                                <img
                                                    className='inline-block w-4 h-4 mr-1'
                                                    src='images/check.svg'
                                                    alt=''
                                                />
                                            ) : (
                                                item.year
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export { PackageRow };
