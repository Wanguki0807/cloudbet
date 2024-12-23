import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function OtpVerification({ phone }) {
    const { data, setData, post, processing, errors } = useForm({
        phone_number: phone || '',
        otp: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('auth.otp.verify'));
    };

    return (
        <GuestLayout>
            <Head title="Verify OTP" />

            <div className="mb-4 text-sm text-gray-600">
                An OTP has been sent to your phone number { phone }. Please enter the code to complete your login.
            </div>

            <form onSubmit={submit}>


                <TextInput
                    id="otp"
                    type="text"
                    name="otp"
                    value={data.otp}
                    className="mt-4 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('otp', e.target.value)}
                />

                <InputError message={errors.otp} className="mt-2" />

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Verify OTP
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
