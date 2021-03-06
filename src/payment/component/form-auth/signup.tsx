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
                    toast.error('X???y ra l???i, vui l??ng ki???m tra l???i');
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
                        toast.success('????ng k?? th??nh c??ng');
                    })
                    .catch((error) => {
                        if (get(error, 'response.status') === 409) {
                            return toast.erro('T??n c???a h??ng ???? t???n t???i. Vui l??ng nh???p t??n kh??c');
                        }
                        return toast.error('L???i t???o c???a h??ng');
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
                <h3 className='text-3xl'>T???o t??i kho???n</h3>
                <div className='mt-1 text-gray-500'>
                    B???n ???? c?? t??i kho???n?{' '}
                    <span
                        onClick={() => setType(ITypeFormAuth.LOGIN)}
                        className='text-blue-600 cursor-pointer'
                    >
                        ????ng nh???p
                    </span>
                </div>
            </div>
            <form className='grid gap-5' onSubmit={onSubmit}>
                <div className='grid grid-cols-2 gap-5'>
                    <fieldset>
                        <input
                            autoComplete='false'
                            placeholder='H??? v?? t??n'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
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
                            placeholder='S??? ??i???n tho???i'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            {...register('phoneNo', {
                                required: {
                                    value: true,
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
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
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
                                },
                                pattern: {
                                    value: /\S+@\S+.\S+/,
                                    message: 'Email kh??ng ????ng',
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
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
                                },
                            })}
                            placeholder='M???t kh???u'
                        />
                        <ErrorMessage
                            errors={errors}
                            name='password'
                            render={({ message }) => <ErrorText message={message} />}
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            placeholder='T??n c???a h??ng'
                            autoComplete='off'
                            className='block border border-gray-200 py-3 px-3 w-full'
                            {...register('nameStore', {
                                required: {
                                    value: true,
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
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
                            placeholder='T???nh/TP'
                            {...register('province', {
                                required: {
                                    value: true,
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
                                },
                                validate: (value) =>
                                    value !== '-1' ? true : 'Kh??ng b??? tr???ng ?? n??y',
                            })}
                            className='block border border-gray-200 py-3 px-3 w-full'
                            onChange={(e: any) => onChangeProvince(e.target.value)}
                            disabled={loadingProvince}
                        >
                            <option value='-1' disabled selected>
                                Ch???n T???nh/TP
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
                            placeholder='Qu???n/Huy???n'
                            {...register('district', {
                                required: {
                                    value: true,
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
                                },
                                validate: (value) =>
                                    value !== '-1' ? true : 'Kh??ng b??? tr???ng ?? n??y',
                            })}
                            className='block border border-gray-200 py-3 px-3 w-full'
                            onChange={(e: any) => onChangeDistrict(e.target.value)}
                            disabled={!province || loadingDistrict}
                        >
                            <option value='-1' disabled selected>
                                Ch???n qu???n/huy???n
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
                            placeholder='X??/Ph?????ng'
                            {...register('ward', {
                                required: {
                                    value: true,
                                    message: 'Kh??ng b??? tr???ng ?? n??y',
                                },
                                validate: (value) =>
                                    value !== '-1' ? true : 'Kh??ng b??? tr???ng ?? n??y',
                            })}
                            className='block border border-gray-200 py-3 px-3 w-full'
                            disabled={!district || district === '-1' || loadingWard}
                            onChange={(e: any) => {
                                // onChangeProvince(e.target.value)
                            }}
                        >
                            <option value='-1' disabled>
                                Ch???n x??/Ph?????ng
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
                        placeholder='?????a ch???'
                        className='block border border-gray-200 py-3 px-3 w-full'
                        {...register('address', {
                            required: {
                                value: true,
                                message: 'Kh??ng b??? tr???ng ?? n??y',
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
                        B???ng c??ch ????ng k??, t??i ?????ng ?? ???? ?????c v?? ch???p nh???n
                        <br className='hidden sm:block' />{' '}
                        <a href="/dieu-khoan-su-dung" target="_blank" rel="noreferrer" className='text-blue-600'>??i???u kho???n s??? d???ng</a> v??{' '}
                        <a href="/chinh-sach-bao-mat" target="_blank" rel="noreferrer" className='text-blue-600'>Ch??nh s??ch quy???n ri??ng t??.</a>
                    </fieldset>

                    <fieldset>
                        <button
                            className={`block text-white py-3 px-3 w-full ${
                                loading ? 'bg-gray-500' : 'bg-blue-700'
                            }`}
                            disabled={loading}
                        >
                            ????ng k??
                        </button>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export { Signup };
