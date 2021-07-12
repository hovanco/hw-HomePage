import { ErrorMessage } from '@hookform/error-message';
import { get, map } from 'lodash';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createStore, updateUserStorePreference } from '../../api';
import { District, Province, useDistricts, useProvices, useWards, Ward } from '../../hook';
import { useStore, useToast } from '../../state';
import { ErrorResponse } from '../error-response';
import { ErrorText } from '../form-auth/error-text';

interface FormData {
    name: string;
    address: string;
    province: string;
    district: string;
    ward: string;
    phoneNo: string;
}

const CreateStore: FC = () => {
    const { toast } = useToast();

    const { store, loadStoreDone } = useStore();
    const [province, setProvince] = useState<string>();
    const [district, setDistrict] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const { loadingProvince, provinces } = useProvices();
    const { loadingDistrict, districts } = useDistricts(province, true);
    const { loadingWard, wards } = useWards({ province, district, loading: true });

    const onChangeProvince = (value: string) => {
        setProvince(value);
    };

    const onChangeDistrict = (value: string) => {
        setDistrict(value);
    };

    const {
        handleSubmit,
        register,
        formState: { errors },
        control,
    } = useForm<FormData>();

    const onSubmit = handleSubmit(async (data) => {
        try {
            const result = await createStore(data);

            await updateUserStorePreference({
                storeId: result._id,
                hideNewUserGuide: false,
            });

            loadStoreDone(result);
        } catch (error) {
            if (get(error, 'response.status') === 409) {
                toast.erro('Tên cửa hàng đã tồn tại. Vui lòng nhập tên khác');
                return;
            }

            toast.erro('Lỗi tạo cửa hàng');
            setError('Lỗi tạo cửa hàng');

            return;
        } finally {
            setLoading(false);
        }
    });

    return (
        <div className='w-full px-5 mx-auto' style={{ maxWidth: 760 }}>
            <div className='text-center mb-6'>
                <h3 className='text-3xl'>Tạo cửa hàng</h3>
            </div>
            <form className='grid  gap-5' onSubmit={onSubmit} autoComplete='off'>
                {(error || (error && error?.length > 0)) && (
                    <ErrorResponse message={error} onClose={() => setError('')} />
                )}

                <div className='grid grid-cols-2 gap-5'>
                    <fieldset>
                        <input
                            autoComplete='off'
                            placeholder='Tên cửa hàng'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Không bỏ trống ô này',
                                },
                            })}
                        />

                        <ErrorMessage
                            errors={errors}
                            name='name'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            autoComplete='off'
                            placeholder='Số điện thoại'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            {...register('phoneNo', {
                                required: {
                                    value: true,
                                    message: 'Không bỏ trống ô này',
                                },
                                pattern: {
                                    value: /(09|01[2|6|8|9])+([0-9]{8})\b/g,
                                    message: 'Số điện thoại không đúng',
                                },
                            })}
                        />

                        <ErrorMessage
                            errors={errors}
                            name='phoneNo'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <fieldset>
                        <select
                            placeholder='Tỉnh/TP'
                            {...register('province', {
                                required: {
                                    value: true,
                                    message: 'Không bỏ trống ô này',
                                },
                                validate: (value) =>
                                    value !== '-1' ? true : 'Không bỏ trống ô này',
                            })}
                            className='block border border-gray-200 py-3 px-3 w-full'
                            onChange={(e: any) => onChangeProvince(e.target.value)}
                        >
                            <option value='-1' disabled selected>
                                Chọn Tỉnh/TP
                            </option>
                            {map(provinces, (province: Province) => (
                                <option value={province.code} key={province.code}>
                                    {province.name_with_type}
                                </option>
                            ))}
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name='province'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>
                    <fieldset>
                        <select
                            placeholder='Quận/Huyện'
                            {...register('district', {
                                required: {
                                    value: true,
                                    message: 'Không bỏ trống ô này',
                                },
                                validate: (value) =>
                                    value !== '-1' ? true : 'Không bỏ trống ô này',
                            })}
                            className='block border border-gray-200 py-3 px-3 w-full'
                            onChange={(e: any) => onChangeDistrict(e.target.value)}
                            disabled={!province}
                        >
                            <option value='-1' disabled selected>
                                Chọn quận/huyện
                            </option>
                            {map(districts, (district: District) => (
                                <option value={district.code} key={district.code}>
                                    {district.name_with_type}
                                </option>
                            ))}
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name='district'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>
                    <fieldset>
                        <select
                            defaultValue='-1'
                            placeholder='Xã/Phường'
                            {...register('ward', {
                                required: {
                                    value: true,
                                    message: 'Không bỏ trống ô này',
                                },
                                validate: (value) =>
                                    value !== '-1' ? true : 'Không bỏ trống ô này',
                            })}
                            className='block border border-gray-200 py-3 px-3 w-full'
                            disabled={!district}
                            onChange={(e: any) => {
                                // onChangeProvince(e.target.value)
                            }}
                        >
                            <option value='-1' disabled>
                                Chọn xã/Phường
                            </option>
                            {map(wards, (ward: Ward) => (
                                <option value={ward.code} key={ward.code}>
                                    {ward.name_with_type}
                                </option>
                            ))}
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name='ward'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>
                </div>

                <fieldset>
                    <textarea
                        autoComplete='off'
                        placeholder='Địa chỉ'
                        className='block border border-gray-200 py-3 px-3 w-full'
                        {...register('address', {
                            required: {
                                value: true,
                                message: 'Không bỏ trống ô này',
                            },
                        })}
                        rows={4}
                    ></textarea>

                    <ErrorMessage
                        errors={errors}
                        name='address'
                        render={({ message }) => <ErrorText message={message} />}
                    />
                </fieldset>

                <fieldset>
                    <button
                        className='block bg-blue-700 text-white py-3 px-3 w-full'
                        disabled={loading}
                    >
                        Tạo cửa hàng
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export { CreateStore };
