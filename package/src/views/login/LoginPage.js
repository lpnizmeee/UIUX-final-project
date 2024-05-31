import React, { useEffect, useState } from 'react'
import logo from '../assets/react.svg'
import regress from '../assets/regress.svg'
import { Link } from "react-router-dom";
import { GoogleButton, FacebookButton, InputField } from '../components'

const LoginPage = ({ setLoginLogout }) => {
    setLoginLogout(false)
    const [isRememberPassword, setRememberPassword] = useState(false);
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

    const handleLoginClick = () => {
        setLoginLogout(true)
        return (window.location.href = "/")
    }

    return (
        <div className='h-screen w-screen flex'>
            <div className="w-5/12 bg-secondary-100 flex justify-center items-center">
                <img src={regress} alt="Regress Logo" className="w-96 h-96" />
            </div>
            <div className="w-7/12 flex justify-center items-center bg-white">
                <div className="flex-col rounded-lg justify-center">
                    <div className="flex justify-start items-center">
                        <h1 className="text-5xl text-gray-700 mb-20">Chào mừng đã quay trở lại!</h1>
                    </div>
                    <div className='flex-col justify-start'>
                        <InputField label='Email' type='email' placeholder='Email' />
                        <InputField label='Mật khẩu' type='password' placeholder='Mật khẩu' />
                        <div className='flex pb-7'>
                            <input type="checkbox" checked={isRememberPassword} onChange={handleCheckboxChange} className="checked:bg-secondary-100 transition duration-150 ease-in-out" />
                            <label className="pl-2 text-gray-700">Ghi nhớ mật khẩu</label>
                        </div>
                        <button type="submit" onClick={handleLoginClick} className="w-full bg-secondary-300 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-5">Đăng nhập</button>
                    </div>
                    <div className='flex justify-end text-gray-700 text-l mb-4'>
                        <Link to="/for_got_password">Bạn quên mật khẩu?</Link>
                    </div>
                    <div className='flex justify-center pb-5'>
                        <div className='text-gray-700 text-xl pr-2'>Chưa có tài khoản? </div>
                        <Link to="/signup" className=' text-gray-700 text-xl underline '> Đăng ký ngay</Link>
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

export default LoginPage
