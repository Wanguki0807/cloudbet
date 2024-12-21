import React from 'react';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import { Link, useForm } from '@inertiajs/react';

export default function SignUpForm() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name:'',
        email: '',
        password: '',
        password_confirmation: '',
        agePermission: false,
    });

    const submitRegForm = (e) => {
        e.preventDefault();
        post(('/register'),data, {
            onFinish: () => reset('password'),
        });
    };

  return (
   <>
        <div className='w-full'>
            <p className="text-center font-bold px-4">
                <span class="font-inter text-base md:text-xl leading-[120%]">Sign up in seconds</span>
            </p>
            <section className="flex items-center justify-center flex-col p-5 gap-y-2.5">
                <button
                    data-test-id="social-sign-on"
                    className="group/provider-button text-brand-text-color rounded-full overflow-hidden relative disabled:pointer-events-none disabled:opacity-[0.12] w-full bg-surface-1 outline-none focus:outline-on-surface-1 active:outline-none"
                    tabIndex="-1"
                >
                    <div className="rounded-full flex items-center transition-all ease-out duration-300 p-2 gap-x-2 group-hover/provider-button:bg-on-tertiary-2/[0.08] group-active/provider-button:bg-on-tertiary-2/[0.16] group-focus/provider-button:bg-transparent">
                    <div className="size-icon-2xl relative flex items-center justify-center">
                        <div className="relative rounded-full flex justify-center aspect-1 aspect-[1] overflow-hidden w-6 h-6">
                            <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                                <img
                                    alt="google"
                                    loading="eager"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover"
                                    src="https://res.cloudinary.com/betengine/image/upload/f_webp/q_auto/v1/media-cloudbet/auth/providers/google?_a=DATAdtAAZAA0"
                                    style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
                                />
                            </div>
                        </div>
                    </div>
                    <span className="font-inter text-sm leading-[120%] font-medium">Sign in with Google</span>
                    </div>
                </button>
                <button
                    data-test-id="social-sign-on"
                    className="group/provider-button text-on-surface-1 rounded-full overflow-hidden relative disabled:pointer-events-none disabled:opacity-[0.12] w-full bg-surface-1 outline-none focus:outline-on-surface-1 active:outline-none"
                    tabIndex="-1"
                >
                    <div className="rounded-full flex items-center transition-all ease-out duration-300 p-2 gap-x-2">
                    <div className="size-icon-2xl relative flex items-center justify-center">
                        <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden aspect-[1] w-6 h-6">
                        <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                            <img
                            alt="github"
                            loading="eager"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover"
                            src="https://res.cloudinary.com/betengine/image/upload/f_webp/q_auto/v1/media-cloudbet/auth/providers/github?_a=DATAdtAAZAA0"
                            style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
                            />
                        </div>
                        </div>
                    </div>
                    <span className="font-inter text-sm leading-[120%] font-medium">Sign in with Github</span>
                    </div>
                </button>
            </section>
            <section className="px-5 flex justify-center gap-x-2 items-center">
                <div
                    className="w-full h-0.5 bg-gradient-to-r bg-surface-1 from-background to-tertiary-2"
                    role="separator"
                    data-test-id="divider"
                ></div>
                <span className="font-inter text-sm  leading-[120%] text-on-surface-3">Or</span>
                <div
                    className="w-full h-0.5 bg-surface-1 bg-gradient-to-l from-background to-tertiary-2"
                    role="separator"
                    data-test-id="divider"
                ></div>
            </section>
            <section>
                <form onSubmit={submitRegForm}  className='flex flex-col gap-y-5 p-5'>
                    <Input
                        label="Name"
                        type="text"
                        name="name"
                        value={data.name}
                        setValue={(e) => setData('name', e.target.value)}
                    />
                    <Input
                        label="Email"
                        type="text"
                        name="email"
                        value={data.email}
                        setValue={(e) => setData('email', e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={data.password}
                        setValue={(e) => setData('password', e.target.value)}
                    />
                    <Input
                        label="Password Confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        setValue={(e) => setData('password_confirmation', e.target.value)}
                    />
                    <div className='py-2'>
                        <div className='flex items-center gap-4'>
                            <Checkbox
                                id='age'
                                className='bg-transparent pr-3 text-on-surface-3 border-brand-purple checked:ring-0 checked:outline-none checked:border-none focus:ring-0 outline-none focus:outline-none ring-0 focus:border-none'
                                checked={data.agePermission}
                                onChange={(e) => setData('agePermission', e.target.checked)}
                            />
                            <div>
                                <label htmlFor="age" className='text-xs flex flex-col items-start'>
                                    <span>I am at least 18 years old and have read the</span>
                                    <span>
                                        <Link className='hover:text-brand-light-purple'>
                                            <span className='underline'>
                                                Terms and Conditons
                                            </span>
                                        </Link>
                                    </span>
                                </label>
                            </div>

                        </div>
                    </div>
                    <Button
                        type="submit" className='disabled:bg-background-btn-disabled py-2 text-btn-text-color font-semibold bg-brand-yellow'
                        disabled={data.email === '' || data.password === '' || data.password_confirmation === '' || processing}>
                        <span>Join now</span>
                    </Button>
                </form>

            </section>
        </div>
    </>
  )
}
