import React, { FC, useEffect } from 'react';
import { EBillingPackageType, packagesFilter as packagesContants } from '../../constants';
import { usePackages } from '../../state';
import { formatMoney } from '../../utils';
import { AddMorePackage } from '../add-more-package';
import { BillingCycle } from './billing-cycle';
import { Package } from './package';
import { SubmitBilling } from './submit-billing';

const PaymentForm: FC = () => {
    const { packages, transactionCode, genTransationCode, period, success } = usePackages();

    useEffect(() => {
        if (packages.length > 0) {
            genTransationCode();
        }
    }, [packages]);

    const totalPrice = formatMoney(
        packages.reduce((value, item) => {
            return (period || 0) * item.price + value;
        }, 0),
    );

    const existOmniPackage = packages.find((item) => item.code === EBillingPackageType.Omni);
    const isShowAddPackage = !existOmniPackage && packagesContants.length - 1 > packages.length;

    return (
        <div className='max-w-xl md:max-w-7xl bg-ink mx-4 md:mx-14 scale-0'>
            <div className='mb-8 text-xl'>Hình thức thanh toán</div>

            {success ? (
                <div className='text-center max-w-lg mx-auto px-5'>
                    <img
                        src='/images/success-payment.png'
                        alt=''
                        className='mx-auto block m-w-full mb-8'
                    />
                    <div className='text-4xl font-medium text-blue-700 mb-6'>
                        Thanh toán thành công
                    </div>
                    {/* <p className='font-light mb-8'>
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form.
                    </p> */}

                    <a
                        className='inline-block  bg-blue-700 px-20 py-3 text-white mx-auto '
                        href='/'
                    >
                        Xác nhận
                    </a>
                </div>
            ) : (
                <div>
                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 gap-8'>
                        <div>
                            <div className='border'>
                                <div className='font-medium py-4 border-b text-center bg-gray-100 font=semibold'>
                                    Chi tiết thanh toán
                                </div>

                                <div>
                                    {packages.map((item) => (
                                        <Package item={item} />
                                    ))}
                                </div>
                                {isShowAddPackage && (
                                    <div className='py-4 px-5'>
                                        <AddMorePackage />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='border'>
                                    <div className='font-medium py-4 border-b text-center bg-gray-100 font=semibold'>
                                        Chọn chu kì thanh toán
                                    </div>
                                    <div className='p-5'>
                                        <BillingCycle />
                                    </div>
                                </div>

                                <div className='border mt-8'>
                                    <div className='font-medium py-4 border-b text-center bg-gray-100'>
                                        Thanh toán
                                    </div>

                                    <div className='bg-gray-100 p-5'>
                                        <ul className='grid gap-2'>
                                            <li className='grid grid-cols-2'>
                                                <div>Mã đơn hàng</div>
                                                <div>
                                                    :{' '}
                                                    <span className='text-color-main'>
                                                        {transactionCode}
                                                    </span>
                                                </div>
                                            </li>
                                            <li className='grid grid-cols-2'>
                                                <div>Tạm tính</div>
                                                <div>: {totalPrice}đ</div>
                                            </li>
                                            <li>
                                                <div className='mb-3'>Code giảm giá/ Coupon</div>
                                                <div className='flex'>
                                                    <input
                                                        className='py-2 px-3 md:py-2 md:px-5 border-none flex-1 border-gray-200'
                                                        placeholder='Coupon/code'
                                                    />
                                                    <button className='py-2 px-3 md:py-2 md:px-5 bg-color-main ml-4 text-white'>
                                                        Áp dụng
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='py-4 border-t text-center bg-gray-100'>
                                        TỔNG THANH TOÁN: {totalPrice}đ
                                    </div>
                                </div>
                                <div className='border border-blue-100 bg-blue-50 mt-8'>
                                    <div className='font-medium py-4 border-b border-blue-100 bg-blue-100 text-center cursor-pointer'>
                                        Chuyển khoản ngân hàng
                                    </div>

                                    <div className='p-5'>
                                        <div className='mb-4'>
                                            <div className='font-medium'>
                                                Khách hàng chuyển khoản theo cú pháp:
                                            </div>

                                            <span className='text-color-main'>
                                                Mã đơn hàng + SĐT đặt hàng
                                            </span>
                                        </div>

                                        <div className='grid gap-3'>
                                            <div className='font-medium'>
                                                Thông tin chuyển khoản ngân hàng
                                            </div>

                                            <div>
                                                <div className='font-medium mb-2'>
                                                    Trần Hoàng Hiệp
                                                </div>

                                                <ul
                                                    className='grid gap-1'
                                                    style={{ color: '#222a46' }}
                                                >
                                                    <li>
                                                        - Ngân hàng: Techcombank chi nhánh Đà Nẵng
                                                    </li>
                                                    <li>- Số tài khoản: 19033620454213</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className='font-medium mb-2'>
                                                    Trần Hoàng Hiệp
                                                </div>

                                                <ul
                                                    className='grid gap-1'
                                                    style={{ color: '#222a46' }}
                                                >
                                                    <li>
                                                        - Ngân hàng: Vietcombank chi nhánh Đà Nẵng
                                                    </li>
                                                    <li>- Số tài khoản: 041000555475</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-t py-8 text-right mt-8'>
                        <a href='/' className='inline-block py-2 px-6 md:py-4 md:px-10 mr-4 border'>
                            Hủy
                        </a>
                        <SubmitBilling />
                    </div>
                </div>
            )}
        </div>
    );
};

export { PaymentForm };
