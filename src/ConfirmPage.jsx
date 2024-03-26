import React from 'react'
import imageMobile from './assets/images/illustration-sign-up-mobile.svg'
import iconSuccess from './assets/images/icon-success.svg'

const ConfirmPage = () => {
    const submittedEmail = localStorage.getItem("submittedEmail");

    const goBack = () => {
        window.history.back();
    }


  return (
    <div className='w-[375px] sm:w-[505px] sm:h-[520px] sm:bg-white sm:rounded-[35px]'>
        <main className="text-Dark-Slate-Grey sm:pt-3 sm:px-[60px]">
            <img className="w-[70px] h-[70px] mt-24 sm:mt-8 sm:w-16" src={iconSuccess} alt="Icon success" />
            <div className="m-3">
                <h1 className="text-[40px] mt-10 font-bold leading-none sm:text-[55px]">Thanks for subscribing!</h1>
                <p className="py-3 mt-5">A confirmation email has been sent to <strong className='lowercase'>{submittedEmail}</strong>. Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <button className="absolute bottom-10 w-[370px] p-4 rounded-md bg-Dark-Slate-Grey font-bold text-White text-sm tracking-wider sm:bottom-[260px] " type="submit" value="Submit" onClick={goBack}>Dismiss message</button>
          
        </main>
    </div>
  )
}

export default ConfirmPage