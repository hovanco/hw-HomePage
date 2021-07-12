import React, { FC } from 'react';
import { AddPackageBtn, ETypePeriod } from './add-package-btn';
import { DropdownSelectPackage } from './dropdown-select-package';
import { InformationPeriods } from './information-periods';
import { PackagesSelectList } from './packages-select-list';
import { SelectPackageProvider } from './state';

interface Props {
    toggle: () => void;
}

const SelectPackage: FC<Props> = ({ toggle }) => {
    return (
        <SelectPackageProvider toggle={toggle}>
            <div>
                <div className='flex border-b border-gray-200 py-4'>
                    <div className='flex-1'>
                        <div className='grid grid-cols-3 gap-5'>
                            <div>
                                <DropdownSelectPackage />
                            </div>
                            <div className='font-medium'>Theo tháng</div>
                            <div className='font-medium'>Theo năm</div>
                        </div>
                    </div>
                </div>

                <InformationPeriods />

                <PackagesSelectList />

                <div className='grid grid-cols-3 py-4 gap-5 '>
                    <div className='px-4 flex items-center font-medium'></div>
                    <div>
                        <AddPackageBtn type={ETypePeriod.Month} />
                    </div>
                    <div>
                        <AddPackageBtn type={ETypePeriod.Year} />
                    </div>
                </div>
            </div>
        </SelectPackageProvider>
    );
};

export { SelectPackage };
