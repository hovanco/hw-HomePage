import React, { FC, useRef, useState } from 'react';
import { IPackage, packagesFilter as packagesContants } from '../../constants';
import { useClickOutside } from '../../hook';
import { usePackages } from '../../state';
import { getPackagesFilter, useSelectPackage } from './state';

interface Props {}

const DropdownSelectPackage: FC<Props> = () => {
    const elRef = useRef<any>();
    const [visible, setVisible] = useState<boolean>(false);
    const [packageSelect, setPackageSelect] = useState<IPackage>();
    const { selectAllPackage, selectPackage, packages: packagesSelect } = useSelectPackage();
    const { packages } = usePackages();

    useClickOutside(elRef, () => {
        setVisible(false);
    });

    const packagesFilter = getPackagesFilter(packages);

    return (
        <div className='relative package-select' ref={elRef}>
            <div
                className='inline-block font-medium cursor-pointer package-select-label'
                onClick={() => setVisible(true)}
            >
                {packagesSelect.length === packagesContants.length - 1
                    ? 'Tất cả'
                    : packageSelect
                    ? packageSelect.package
                    : 'Tất cả'}
            </div>

            <ul
                className='absolute left-0 py-1 bg-white border border-gray-200 grid package-list -top-full'
                style={{
                    opacity: visible ? 1 : 0,
                    visibility: visible ? 'visible' : 'hidden',
                    transform: `translateY(${visible ? 0 : 10}px)`,
                }}
            >
                <li
                    className='p-2 cursor-pointer hover:bg-blue-700 hover:text-white'
                    onClick={() => {
                        setVisible(false);
                        selectAllPackage();
                    }}
                >
                    Tất cả
                </li>
                {packagesFilter.map((item) => {
                    const handleClick = () => {
                        setPackageSelect(item);
                        selectPackage(item.code);
                        setVisible(false);
                    };

                    return (
                        <li
                            key={item.code}
                            className='p-2 cursor-pointer hover:bg-blue-700 hover:text-white'
                            onClick={handleClick}
                        >
                            {item.package}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export { DropdownSelectPackage };
