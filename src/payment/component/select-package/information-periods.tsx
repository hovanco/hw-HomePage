import React, { FC } from 'react';
import { useSelectPackage } from './state';
import { EBillingPackageType, IPackage, packagesFilter as packagesContants } from '../../constants';
import { formatMoney } from '../../utils';

const InformationPeriods: FC = () => {
    const { packages } = useSelectPackage();

    const existOmniPackage = packagesContants.find(
        (item) => item.code === EBillingPackageType.Omni,
    );

    const isOminiPackage = packages.length === packagesContants.length - 1;

    const totalPriceMonth = isOminiPackage
        ? (existOmniPackage as IPackage).price
        : packages.reduce((value, item) => {
              return item.price + value;
          }, 0);

    const totalPriceYear = isOminiPackage
        ? (existOmniPackage as IPackage).price * 12
        : packages.reduce((value, item) => {
              return item.price * 12 + value;
          }, 0);

    return (
        <div className='flex border-b border-gray-200 py-4'>
            <div className='flex-1'>
                <div className='grid grid-cols-3 gap-5'>
                    <div></div>
                    <div>
                        <div
                            className='inline-flex inline-block bg-purple-50 text-color-main px-2 py-2 md:px-10 font-medium '
                            id='price-month'
                        >
                            {formatMoney(totalPriceMonth)}
                            <sup className='top-0'>đ</sup>
                        </div>
                        <div className='font-light text-sm my-4' id='price-month-describe'>
                            Thanh toán định kỳ hàng tháng {formatMoney(totalPriceMonth)}đ
                        </div>
                    </div>
                    <div>
                        <div
                            className='inline-flex inline-block bg-purple-50 text-color-main px-2 py-2 md:px-10 font-medium '
                            id='price-year'
                        >
                            {formatMoney(totalPriceYear)}
                            <sup className='top-0'>đ</sup>
                        </div>
                        <div className='font-light text-sm my-4' id='price-year-describe'>
                            Thanh toán định kỳ hàng năm {formatMoney(totalPriceYear)}đ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { InformationPeriods };
