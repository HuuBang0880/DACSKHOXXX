import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className=''>
      <div className="flex justify-center items-center h-screen bg-slate-50">
        <div id="error-page">
          <h1 className="lg:text-6xl font-bold text-9xl">404</h1>
          <p className="text-xl ">
            Không tìm thấy trang.
          </p>
          <div className="mt-4">
            <Link
              to="/"
              className="px-5 py-2 rounded-md  hover:bg-primary hover:text-white"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}
