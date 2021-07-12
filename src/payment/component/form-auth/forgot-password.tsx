import { ErrorMessage } from '@hookform/error-message';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../../api';
import { useToast } from '../../state';
import { ErrorText } from './error-text';
import { ITypeFormAuth, useFormAuth } from './state';

interface FormData {
    email: string;
}

const ForgotPassword: FC = () => {
    const { toast } = useToast();
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
            await forgotPassword({ ...data });

            toast.success('Đã gửi email đến địa chỉ email của bạn');
        } catch (error) {
            toast.error('Đã xảy ra lỗi, vui lòng thử lại');
        } finally {
            setLoading(false);
        }
    });

    return (
        <div className='w-full px-5' style={{ maxWidth: 400 }}>
            <div className='text-center mb-6'>
                <h3 className='text-3xl'>Quên mật khẩu</h3>
                <div className='mt-1 text-gray-500'>Vui lòng điền địa chỉ email của bạn</div>
            </div>
            <form className='grid gap-5' onSubmit={onSubmit}>
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

                <fieldset className='pt-1'>
                    <button
                        className={`block text-white py-3 px-3 w-full ${
                            loading ? 'bg-gray-500' : 'bg-blue-700'
                        }`}
                        disabled={loading}
                    >
                        Gửi yêu cầu
                    </button>
                </fieldset>

                <fieldset className='text-center'>
                    <span
                        className='text-gray-500 cursor-pointer'
                        onClick={() => setType(ITypeFormAuth.LOGIN)}
                    >
                        Đăng nhập
                    </span>
                </fieldset>
            </form>
        </div>
    );
};

export { ForgotPassword };
