import React from 'react'
import { Link } from '@inertiajs/react'

export default function CustomButton({
    value,
    className = "",
}) {

  return (
    <>
        <Link href="auth/sign-in" >
            <div data-button-size="medium" data-button-style="nav-secondary" 
                className={`max-w-full inline-block cursor-pointer rounded-full border-2 ` + className}
            >
                <div class=" text-[1.125rem] text">
                    <div className="btn_main_text">
                        {value}
                    </div>
                </div>
            </div>
        </Link> 
    </>
  )
}
