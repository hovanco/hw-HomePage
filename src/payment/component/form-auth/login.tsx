import { ErrorMessage } from '@hookform/error-message';
import { get } from 'lodash';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getUser, loginWithEmail } from '../../api';
import { setToken } from '../../api/token';
import { useAuth, useToast } from '../../state';
import { errorCommon, errorWrongEmailPassword } from './constants';
import { ErrorText } from './error-text';
import { ITypeFormAuth, useFormAuth } from './state';
import { InputPassword } from './input-pasword';

interface FormData {
    email: string;
    password: string;
}

const Login: FC = () => {
    const { toast } = useToast();
    const { loadUserDone } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const { setType } = useFormAuth();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true);
            const response = await loginWithEmail({ ...data });

            if (!response.accessToken) {
                return;
            }

            await setToken({ token: response, remember: true });

            const user = await getUser();

            loadUserDone(user);
            toast.success('Đăng nhập thành công');
        } catch (error) {
            const errorMessage =
                get(error, 'response.data.message') === 'EMAIL_OR_PASSWORD_INCORRECT'
                    ? errorWrongEmailPassword
                    : errorCommon;

            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    });

    return (
        <div className='w-full px-5' style={{ maxWidth: 400 }}>
            <div className='text-center mb-6'>
                <h3 className='text-3xl'>Đăng nhập</h3>
                <div className='mt-1 text-gray-500'>
                    Bạn chưa có tài khoản?{' '}
                    <span
                        onClick={() => setType(ITypeFormAuth.SIGNUP)}
                        className='text-blue-600 cursor-pointer'
                    >
                        Đăng ký
                    </span>
                </div>
            </div>
            <form className='grid gap-5' onSubmit={onSubmit} autoComplete='off'>
                <fieldset>
                    <input
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
                        placeholder='Email'
                        className='block border border-gray-200 py-3 px-3 w-full'
                    />

                    <ErrorMessage
                        errors={errors}
                        name='email'
                        render={({ message }) => <ErrorText message={message} />}
                    />
                </fieldset>

                <fieldset>
                    <InputPassword
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

                <fieldset className='text-right'>
                    <span
                        className='text-blue-600 cursor-pointer'
                        onClick={() => setType(ITypeFormAuth.FORGOT)}
                    >
                        Quên mật khẩu?
                    </span>
                </fieldset>
                <fieldset className='pt-1'>
                    <button
                        className={`block text-white py-3 px-3 w-full ${
                            loading ? 'bg-gray-500' : 'bg-blue-700'
                        }`}
                        disabled={loading}
                    >
                        Đăng nhập
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export { Login };
