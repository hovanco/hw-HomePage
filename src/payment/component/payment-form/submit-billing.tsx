import React, { FC, useState } from 'react';
import { EBillingPaymentType } from '../../constants';
import { createBuyOrder, FormBuy } from '../../api';
import { usePackages, useStore, useToast } from '../../state';

const SubmitBilling: FC = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState<boolean>(false);
    const { store } = useStore();

    const { packages, period, transactionCode, changeSuccess } = usePackages();

    const handleClick = async () => {
        if (store._id && period && transactionCode) {
            setLoading(true);

            const data: FormBuy = {
                paymentType: EBillingPaymentType.BankTransfer,
                period,
                transactionCode,
                packageType: packages.reduce((prevValue: number, item) => prevValue + item.code, 0),
            };

            try {
                await createBuyOrder(store._id, data);
                changeSuccess(true);
                toast.success('Thanh toán thành công');
            } catch (error) {
                toast.error('Đã xảy ra lỗi, vui lòng thử lại');
            } finally {
                setLoading(false);
            }
        }
    };

    const disabled = packages.length === 0 || !period || loading;

    const className = `py-2 px-4 md:py-4 md:px-10  text-white ${
        disabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-color-main cursor-pointer'
    }`;

    return (
        <button className={className} disabled={disabled} onClick={handleClick}>
            Xác nhận chuyển khoản
        </button>
    );
};

export { SubmitBilling };
