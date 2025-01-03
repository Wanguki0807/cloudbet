import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SignInForm from '@/Components/SignInForm';
import SignUpForm from '@/Components/SignUpForm';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {

    const [isLogin, setIsLogin] = useState(true);

    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };


    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className=''>
                <div className='inset-0 z-modalInner min-h-screen w-full max-h-[100dvh] fixed flex items-center justify-center sm:p-5'>
                    <div className='relative z-modalOuter w-full h-full sm:max-w-[25rem] border border-surface-1 rounded-3xl sm:max-h-4xl md:flex-auto opacity-100 translate-y-0 md:scale-100'>
                        <div className="relative rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 h-full max-sm:p-0">
                            <div className='w-full h-full relative bg-background rounded-3xl max-sm:rounded-none'>
                                <div className='w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-0.5 max-sm:rounded-none'>
                                    <div className='w-full h-full transition-all ease-out duration-300 bg-surface-2 !bg-background max-sm:rounded-none'>
                                    </div>
                                </div>
                                <div className='w-full h-full relative'>
                                    <div className='flex h-full overflow-hidden justify-center'>
                                        <div className='flex h-full max-h-[100dvh] overflow-auto w-full flex-col scrollbar-hide '>
                                            <div className='text-brand-text-color '>
                                                <header class="flex flex-col items-center justify-center h-12 px-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 775 64" class="w-52 h-8 text-brand-purple">
                                                    <path fill="currentColor" d="M727.561 62.773h22.035V16.089H775V1.235h-72.843V16.09h25.404zm-97.186 0h63.608V47.919h-42.201v-9.316h41.222V25.154h-41.222v-9.057h42.201V1.235h-63.608zm-35.887-13.716h-22.475V38.16h22.475c3.639 0 5.866 1.76 5.866 5.102v.703c0 3.342-2.219 5.102-5.866 5.102m-.53-24.436h-21.945V14.96h21.945c3.198 0 5.066 1.67 5.066 4.569v.436c0 2.898-1.868 4.658-5.066 4.658m16.259 5.804v-.88c5.686-1.146 10.214-5.974 10.214-12.924 0-8.792-7.016-15.387-21.497-15.387h-56.942c7.815 7.031 12.261 17.227 12.261 29.974v1.493c0 12.836-4.438 23.032-12.261 30.063h54.813c17.409 0 25.323-7.298 25.323-18.72 0-7.912-5.067-11.956-11.903-13.627M507.084 46.15h-16.52v-28.3h16.52c8.884 0 13.681 4.658 13.681 12.391v3.342c0 7.734-4.797 12.57-13.681 12.57Zm-38.555 16.614h40.684c21.145 0 33.937-10.729 33.937-30.063V31.21c0-19.342-12.792-29.974-33.937-29.974h-40.684v61.538-.008Zm-53.834 1.227h10.923c19.897 0 31.8-11.076 31.8-29.715V1.234h-22.206v33.05c0 8.177-4.617 12.658-12.612 12.658h-4.887c-7.995 0-12.612-4.48-12.612-12.658V1.235h-22.116v33.05c0 18.64 11.812 29.715 31.718 29.715m-76.31-16.88H328c-8.175 0-13.591-4.569-13.591-13.974v-2.284c0-9.494 5.416-13.974 13.591-13.974h10.393c8.174 0 13.591 4.48 13.591 13.974v2.284c0 9.405-5.417 13.974-13.591 13.974M324.892 64h16.519c19.098 0 32.869-11.778 32.869-31.298V31.21C374.28 11.778 360.509 0 341.411 0h-16.438c-19.187 0-32.958 11.778-32.958 31.209v1.493c0 19.512 13.771 31.298 32.868 31.298M287.3 62.773V45.715h-36.336V1.235h-22.035v61.538zM173.683 64h14.84c18.298 0 30.47-11.164 31.889-25.493l.09-.792h-22.475l-.18.792c-1.24 5.449-5.955 8.613-12.522 8.613H176.8c-7.905 0-13.412-4.747-13.412-14.151V31.03c0-9.404 5.507-14.151 13.412-14.151h8.525c6.575 0 11.282 3.164 12.522 8.613l.18.792h22.475l-.09-.792C218.993 11.253 207.262 0 188.523 0h-14.66c-19.008 0-32.869 11.778-32.869 31.209v1.493c0 19.512 13.771 31.298 32.689 31.298m-88.66-1.227h19.097c-4.886-7.475-7.554-17.671-7.554-30.765 0-13.094 2.668-23.209 7.554-30.765H85.022c-2.757 8.267-3.997 18.462-3.997 30.765s1.24 22.507 3.997 30.765Zm-29.32 0h21.145c-2.04-8.525-2.757-18.72-2.757-30.765 0-12.044.71-22.24 2.757-30.765H55.703c2.04 8.525 2.757 18.72 2.757 30.765 0 12.044-.71 22.24-2.757 30.765m-27.272 0h19.097c2.758-8.266 3.998-18.462 3.998-30.765s-1.24-22.506-3.998-30.765H28.431c4.886 7.556 7.554 17.76 7.554 30.765 0 13.005-2.668 23.298-7.554 30.765M0 62.773h20.077c5.596-7.209 8.794-17.405 8.794-30.765S25.673 8.541 20.077 1.243H0C7.815 7.75 12.523 17.946 12.523 32.008c0 14.063-4.708 24.267-12.523 30.765m112.466 0h20.077c-7.816-6.507-12.523-16.702-12.523-30.765 0-14.063 4.707-24.266 12.523-30.765h-20.077c-5.596 7.298-8.794 17.494-8.794 30.765s3.198 23.556 8.794 30.765"></path>
                                                    </svg>
                                                </header>
                                                <div className={`flex relative overflow-hidden `}>
                                                    <div className='relative flex-shrink-0 flex-grow-0 basis-full focus-within:outline-none'>
                                                        <div className={`form-container ${isLogin ? "login-active" : "signup-active"}`}>
                                                            <SignInForm/>
                                                            <SignUpForm/>
                                                        </div>
                                                        <div className='py-2'></div>
                                                        <div>
                                                            <div className='button-container flex items-center justify-center'>
                                                                {
                                                                    isLogin ? 
                                                                    <div className={`gap-2 flex justify-center items-center flip-button flip-up font-inter`} >
                                                                    <span className='text-on-tertiary-3 font-semibold text-xs '>
                                                                        Don't have an account?
                                                                    </span>
                                                                    <span>
                                                                        <Button  onClick={toggleAuth} className='bg-swatch-tertiary-1 text-brand-light-purple font-bold py-1 text-xs px-3' type='button'>
                                                                            <span>
                                                                                Join Now
                                                                            </span>
                                                                        </Button>
                                                                    </span>
                                                                </div>:
                                                                <div className={`gap-2 flex justify-center items-center flip-button flip-down font-inter`} >
                                                                    <span className='text-on-tertiary-3 font-semibold text-xs '>
                                                                        Already have an account?
                                                                    </span>
                                                                    <span>
                                                                        <Button  onClick={toggleAuth} className='bg-swatch-tertiary-1 text-brand-light-purple font-bold py-1 text-xs px-3' type='button'>
                                                                            <span>
                                                                                Sign in
                                                                            </span>
                                                                        </Button>
                                                                    </span>
                                                                </div>
                                                                }
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                        <div className='mt-4'>
                                                            <div className='flex items-center justify-center'>
                                                                <div className='  rounded-t-xl relative bg-swatch-tertiary-1 text-xs text-on-tertiary-3 font-inter font-semibold'>
                                                                    <div className='px-4 pt-2 pb-3'>
                                                                        <span className=' border-b  border-on-tertiary-3'>Terms and Servicies </span>

                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        
                        </div>
                    
                    </div>
                </div>

            </div>
        </GuestLayout>
    );
}
