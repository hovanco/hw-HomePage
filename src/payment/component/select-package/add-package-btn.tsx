import React, { FC } from 'react';
import { usePackages } from '../../state';
import { useSelectPackage } from './state';

export enum ETypePeriod {
    Month = 'month',
    Year = 'year',
}

interface Props {
    type?: ETypePeriod;
}

const AddPackageBtn: FC<Props> = ({ type }) => {
    const { addPackages } = usePackages();
    const { packages, toggle } = useSelectPackage();

    const handleClick = () => {
        addPackages(packages);
        toggle();
    };

    return (
        <button className='py-2 px-6 lg:px-20 text-white btn' onClick={handleClick}>
            Thêm gói
        </button>
    );
};

export { AddPackageBtn };
