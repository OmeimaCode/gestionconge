import React from 'react'
import { MdEmail } from 'react-icons/md'
import {BsFillUnlockFill} from 'react-icons/bs'
const Admin = () => {
    return (
        <div className='bg-primary h-screen w-screen flex flex-col justify-center items-center'>
            <div className='w-full max-w-[400px] flex flex-col gap-5'>
                <h2 className='font-title text-white text-4xl text-center pb-6'>Authentification</h2>
                <div className="form-control">
                    <label className="input-group w-full">
                        <span>
                            <MdEmail className="text-xl" />
                        </span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group w-full">
                        <span>
                            <BsFillUnlockFill className="text-xl" />
                        </span>
                        <input type="password" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='py-6'></div>
                <button className='btn btn-accent'>Se connecter</button>
            </div>
        </div>
    )
}

export default Admin