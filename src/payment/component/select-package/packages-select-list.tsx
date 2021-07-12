import React, { FC } from 'react';
import { PackageRow } from './package-row';
import { useSelectPackage } from './state';

const PackagesSelectList: FC = () => {
    const { packages } = useSelectPackage();

    return (
        <>
            {packages.map((item) => {
                return <PackageRow packageItem={item} key={item.code} />;
            })}
        </>
    );
};

export { PackagesSelectList };
