import React, { FC } from 'react';
import { EBillingPackageType, packages as packagesConstant } from '../../constants';
import { usePackages } from '../../state';
import { formatMoney } from '../../utils';

const BillingCycle: FC = () => {
    const { period, setPeriods, packages } = usePackages();

    const omniExist = packages.find((item) => item.code === EBillingPackageType.Omni);

    const periodsCycles = omniExist ? omniExist.cycles : packagesConstant[0].cycles;

    return (
        <div className='p-5'>
            {periodsCycles.map((item: any) => {
                const handleClick = () => {
                    setPeriods(item.id);
                };
                return (
                    <div key={item.id} className='flex items-center cursor-pointer'>
                        <input
                            type='radio'
                            id={item.id}
                            name='cycles'
                            value={item.id}
                            onClick={handleClick}
                            checked={period === item.id}
                        />
                        <label htmlFor={item.id} className='ml-2'>
                            {`${formatMoney(item.price)}đ / ${item.name}`}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export { BillingCycle };
