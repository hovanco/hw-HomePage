import { ErrorMessage } from '@hookform/error-message';
import { pick, map, get } from 'lodash';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    createStore,
    getUser,
    loginWithEmail,
    signupWithEmail,
    updateUserStorePreference,
} from '../../api';
import { setToken } from '../../api/token';
import { District, Province, useDistricts, useProvices, useWards, Ward } from '../../hook';
import { useAuth, useStore, useToast } from '../../state';
import { getMessageError } from '../../utils';
import { ErrorText } from './error-text';
import { InputPassword } from './input-pasword';
import { ITypeFormAuth, useFormAuth } from './state';
interface FormData {
    name: string;
    email: string;
    password: string;
    nameStore: string;
    address: string;
    province: string;
    district: string;
    ward: string;
    phoneNo: string;
}

const Signup: FC = () => {
    const { loadUserDone } = useAuth();
    const { store, loadStoreDone } = useStore();
    const { toast } = useToast();
    const { setType } = useFormAuth();
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
    } = useForm<FormData>();
    const [loading, setLoading] = useState<boolean>(false);

    const [province, setProvince] = useState<string>();
    const [district, setDistrict] = useState<string | undefined>();

    const { loadingProvince, provinces } = useProvices();
    const { loadingDistrict, districts } = useDistricts(province, true);
    const { loadingWard, wards } = useWards({ province, district, loading: true });

    const onChangeProvince = (value: string) => {
        setProvince(value);
        setDistrict(undefined);
        setValue('district', '-1');
        setValue('ward', '-1');
        setValue('address', '');
    };

    const onChangeDistrict = (value: string) => {
        setDistrict(value);
    };

    const onSubmit = handleSubmit(async (values) => {
        setLoading(true);
        const dataSignup = pick(values, 'name', 'email', 'password');

        signupWithEmail(dataSignup)
            .then(async () => {
                const response: any = await loginWithEmail({
                    ...pick(values, ['email', 'password']),
                });

                if (!response.accessToken) {
                    toast.error('Xảy ra lỗi, vui lòng kiểm tra lại');
                    setType(ITypeFormAuth.LOGIN);
                    return;
                }

                await setToken({ token: response, remember: true });

                const dataCreateStore = {
                    ...pick(values, 'province', 'district', 'ward', 'phoneNo', 'address'),
                    name: values.nameStore,
                };

                createStore(dataCreateStore)
                    .then(async (store) => {
                        await updateUserStorePreference({
                            storeId: store._id,
                            hideNewUserGuide: false,
                        });

                        const user = await getUser();

                        loadUserDone(user);
                        loadStoreDone(store);
                        toast.success('Đăng ký thành công');
                    })
                    .catch((error) => {
                        if (get(error, 'response.status') === 409) {
                            return toast.erro('Tên cửa hàng đã tồn tại. Vui lòng nhập tên khác');
                        }
                        return toast.error('Lỗi tạo cửa hàng');
                    });
            })
            .catch((error) => {
                const messageError = getMessageError(error);
                toast.error(messageError);
            })
            .finally(() => {
                setLoading(false);
            });
    });

    return (
        <div className='w-full px-5' style={{ maxWidth: 700 }}>
            <div className='text-center mb-6'>
                <h3 className='text-3xl'>Tạo tài khoản</h3>
                <div className='mt-1 text-gray-500'>
                    Bạn đã có tài khoản?{' '}
                    <span
                        onClick={() => setType(ITypeFormAuth.LOGIN)}
                        className='text-blue-600 cursor-pointer'
                    >
                        Đăng nhập
                    </span>
                </div>
            </div>
            <form className='grid gap-5' onSubmit={onSubmit}>
                <div className='grid grid-cols-2 gap-5'>
                    <fieldset>
                        <input
                            autoComplete='false'
                            placeholder='Họ và tên'
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
                            autoComplete='false'
                            placeholder='Số điện thoại'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            {...register('phoneNo', {
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
                            placeholder='Email'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            autoComplete='off'
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Không bỏ trống ô này',
                                },
                                pattern: {
                                    value: /\S+@\S+.\S+/,
                                    message: 'Email không đúng',
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name='email'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>
                    <fieldset>
                        <InputPassword
                            autoComplete='off'
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Không bỏ trống ô này',
                                },
                            })}
                            placeholder='Mật khẩu'
                        />
                        <ErrorMessage
                            errors={errors}
                            name='password'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            placeholder='Tên cửa hàng'
                            autoComplete='off'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            {...register('nameStore', {
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
                            disabled={loadingProvince}
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
                            disabled={!province || loadingDistrict}
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
                            disabled={!district || district === '-1' || loadingWard}
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
                        placeholder='Địa chỉ'
                        className='block border border-gray-200 py-3 px-3 w-full'
                        {...register('address', {
                            required: {
                                value: true,
                                message: 'Không bỏ trống ô này',
                            },
                        })}
                        rows={3}
                    ></textarea>

                    <ErrorMessage
                        errors={errors}
                        name='address'
                        render={({ message }) => <ErrorText message={message} />}
                    />
                </fieldset>

                <div className='grid gap-5 max-w-sm mx-auto'>
                    <fieldset className='text-sm'>
                        Bằng cách đăng ký, tôi đồng ý đã đọc và chấp nhận
                        <br className='hidden sm:block' />{' '}
                        <a href="/dieu-khoan-su-dung" target="_blank" rel="noreferrer" className='text-blue-600'>Điều khoản sử dụng</a> và{' '}
                        <a href="/chinh-sach-bao-mat" target="_blank" rel="noreferrer" className='text-blue-600'>Chính sách quyền riêng tư.</a>
                    </fieldset>

                    <fieldset>
                        <button
                            className={`block text-white py-3 px-3 w-full ${
                                loading ? 'bg-gray-500' : 'bg-blue-700'
                            }`}
                            disabled={loading}
                        >
                            Đăng ký
                        </button>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export { Signup };
