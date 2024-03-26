import React from 'react'
import imageMobile from './assets/images/illustration-sign-up-mobile.svg'
import imageDesktop from './assets/images/illustration-sign-up-desktop.svg'
import iconList from './assets/images/icon-list.svg'
import { useState } from 'react'

const Inicio = () => {

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true); // Estado para indicar si el correo es válido
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
    event.preventDefault();

    // Validacion correo electronico
    if(!isValidEmailFormat(email)){
      setIsValid(false);
      return;
    }

    // Envio exitoso
    setIsSubmitted(true);
  };

  const isValidEmailFormat = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValid(true);
  }

  localStorage.setItem('submittedEmail', email);

  if(isSubmitted){
    window.location.href = "/newsletter/confirm-page";
    return null;
  }



  return (
    <>
        <main className="w-[375px] text-Dark-Slate-Grey sm:w-[930px] sm:h-[642px] sm:flex sm:bg-white sm:p-6 sm:rounded-[30px]">
            <img className="w-[375px] h-[284px] sm:hidden" src={imageMobile} alt="Illustration sign up mobile" />
            <div className="p-10 mr-7">
                <h1 className="text-[40px] font-bold sm:text-[50px]">Stay updated!</h1>
                <p className="py-3">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="mt-3">
                    <li className="flex items-start space-x-3 mb-3">
                    <img className="" src={iconList} alt="icon list"/>
                    <p>Product discovery and building what matters</p>
                    </li>
                    <li className="flex items-start space-x-3 mb-3">
                    <img  src={iconList} alt="icon list" />
                    <p>Measuring to ensure updates are a success</p>
                    </li>
                    <li className="flex items-center space-x-3 mb-3">
                    <img src={iconList} alt="icon list" />
                    <p>And much more!</p>
                    </li>
                </ul>          
                <form className="mt-9" onSubmit={handleSubmit}  method="post" >
                    <div className="flex justify-between">
                    <div><label className="font-bold text-xs">Email address</label></div>
                    <div> {isValid ? "" : <label className="font-bold text-xs text-Tomato ">Valid email required</label> }</div>
                    </div>
                    {isValid ? <input className="rounded-md border-[1px] mt-1 p-3 pl-6 w-full focus:outline-none focus:border-Tomato focus:ring-1 focus:ring-Tomato border-Grey" type="email" name="email_address" placeholder="email@company.com" value={email} onChange={handleEmailChange} required/> : <input className="rounded-md border-[1px] mt-1 p-3 pl-6 w-full border-Tomato focus:outline-none focus:border-Tomato focus:ring-1 focus:ring-Tomato bg-Tomato/15 text-Tomato" type="email" name="email_address" placeholder="email@company.com" value={email} onChange={handleEmailChange}/>}
                    <button className="rounded-md bg-Dark-Slate-Grey p-4 w-full mt-7 font-bold text-White text-sm tracking-wider" type="submit" value="Submit">Subscribe to monthly newsletter</button>
                </form>
            </div>
            <img className="hidden sm:flex" src={imageDesktop} alt="Illustration sign up desktop" />
        </main>
    </> 
  )
}

export default Inicio