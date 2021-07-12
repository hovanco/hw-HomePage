import React, { FC } from 'react';
import { usePackages } from '../../state';
import { PackageItem } from './package-item';

const PackagesList: FC = () => {
    const { packages } = usePackages();

    if (packages.length === 0) {
        return (
            <div className='text-center px-2 py-4 text-xs text-gray-400'>Bạn chưa chọn gói nào</div>
        );
    }

    return (
        <>
            {packages.map((item) => (
                <PackageItem key={item.id} packageItem={item} />
            ))}
        </>
    );
};

export { PackagesList };
