import React, { FC } from 'react';
import { IPackage } from '../../constants';
import { usePackages } from '../../state';
import { PackageDetail } from './package-detail';
import { PackageHeading } from './package-heading';

interface Props {
    item: IPackage;
}

const Package: FC<Props> = ({ item }) => {
    const { removePackage } = usePackages();
    const handleRemovePackage = () => {
        removePackage(item.code);
    };

    return (
        <div className='p-5 border-b'>
            <PackageHeading
                removePackage={handleRemovePackage}
                title={item.alias}
                price={item.price}
            />
            <PackageDetail content={item.description} />
        </div>
    );
};

export { Package };
