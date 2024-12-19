import React, { useState } from 'react'

export default function Input({label, type, name}) {

    const [value, setValue] = useState()

  return (
    <>
        <div className="flex flex-col gap-y-1">
            <div className="w-full h-10 relative flex items-center rounded-xl border-2 border-surface-1 text-on-surface-3 focus-within:text-brand-yellow focus-within:border-brand-yellow transition-colors ease-out duration-200 hover:not(:focus-within):border-surface-3">
                <input
                    className="input w-full h-full text-on-surface-1 appearance-none font-inter text-sm peer px-4 leading-14 input-reset bg-transparent read-only:text-on-surface-1 ring-transparent outline-transparent border-none focus:border-none focus:ring-transparent focus:placeholder-transparent placeholder-on-surface-3 "
                    name={name}
                    type={type}
                    value={value}
                    tabIndex="0"
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className="font-inter absolute text-xs z-40 text-on-surface-3 opacity-1 pointer-events-none transition-all ease-out duration-300 h-4 rounded-sm top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap w-full truncate text-left pr-4 pl-4 peer-focus:opacity-0 peer-focus:-translate-y-8 peer-focus:text-xs">
                    {label}
                </span>
                <label
                    className="absolute text-brand-yellow opacity-0 transition-all ease-out duration-300 h-6 rounded-sm bg-on-surface-2 -top-4 left-4 p-0.5 translate-y-1/2 peer-focus:text-primary flex justify-center pointer-events-none peer-read-only:!text-on-surface-2 peer-focus:opacity-100 peer-focus:translate-y-0"
                    htmlFor="email"
                >
                    <span className="font-inter text-xs !leading-6">{label}</span>
                </label>
            </div>
        </div>
    </>
  )
}
