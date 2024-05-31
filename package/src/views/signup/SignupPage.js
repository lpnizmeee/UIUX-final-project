import React, { useEffect, useState } from 'react'
import logo from '../assets/react.svg'
import regress from '../assets/regress.svg'
import { Link } from "react-router-dom";
import { GoogleButton, FacebookButton, InputField, SuccessPopUp } from '../components'
import { Route } from "react-router-dom";


const SignupPage = ({ setLoginLogout }) => {
    setLoginLogout(false)

    const [isRememberPassword, setRememberPassword] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [hideBG, setHideBG] = useState(false);

    const handleCheckboxChange = () => {
        setRememberPassword(!isRememberPassword); // Đảo ngược trạng thái của checkbox
    };

    const handleOAuthLogin = (provider) => {
        switch (provider) {
            case "google":
                window.location.href = `https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dvi&followup=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dvi&hl=vi&ifkv=AaSxoQyTf5uHAch-LVfyGd7uqyutQsdQz-Ootw21hBHlTWD-FmQV6ie8k3H1vyS1kxQHDrLy2VTXbA&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1443482041%3A1715625096580567&ddm=0`
                break;
            case "facebook":
                window.location.href = `https://www.facebook.com/`
                break;
            default:
                break;
        }
    }

    const handleSignupClick = () => {
        setShowSuccessMessage(true);
        setHideBG(true);

        setTimeout(() => {
            window.location.href = "/login";
        }, 3000);
    }

    return (
        <div className='h-screen w-screen flex'>
            {hideBG && (
                <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
            )}
            <div className="w-5/12 bg-secondary-100 flex justify-center items-center">
                <img src={regress} alt="Regress Logo" className="w-96 h-96" />
            </div>
            <div className="w-7/12 pt-10 flex-col justify-center items-center bg-white">
                <div className="flex justify-center items-center">
                    <h1 className="text-6xl text-gray-700 mb-10">Đăng ký tài khoản mới</h1>
                </div>
                <div className="pl-24 pr-24  flex-col rounded-lg justify-center">
                    <div className='flex-col justify-start'>
                        <InputField label='Họ và tên' type='text' placeholder='Họ và tên' />
                        <InputField label='Email' type='email' placeholder='Email' />
                        <InputField label='Mật khẩu (mật khẩu cần ít nhất 8 ký tự)' type='password' placeholder='Mật khẩu' />
                        <InputField label='Nhập lại mật khẩu' type='password' placeholder='Nhập lại mật khẩu' />
                        <div className='flex pb-7'>
                            <input type="checkbox" checked={isRememberPassword} onChange={handleCheckboxChange} className="checked:bg-secondary-100 transition duration-150 ease-in-out" />
                            <label className="pl-2 text-gray-700">Tôi đồng ý với</label>
                            <Link to="/terms_of_service" className='text-gray-700 pl-1 underline'>Điều khoản và chính sách</Link>
                        </div>
                        <button type="submit" onClick={handleSignupClick} className="w-full bg-secondary-300 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-5">Đăng ký</button>
                        {showSuccessMessage && <SuccessPopUp message="Đăng ký thành công!" />}
                    </div>
                    <div className='flex justify-center pb-5'>
                        <div className='text-gray-700 text-xl pr-2'>Đã có có tài khoản? </div>
                        <Link to="/signup" className=' text-gray-700 text-xl underline '> Đăng nhập tại đây</Link>
                    </div>

                    <div className='text-gray-700 text-xl pb-5'>--- Hoặc ---</div>
                    <div className='flex'>
                        <GoogleButton onClick={() => handleOAuthLogin("google")} />
                        <FacebookButton onClick={() => handleOAuthLogin("facebook")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage
