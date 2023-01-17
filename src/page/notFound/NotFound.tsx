import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="me-container">

                <div className="me-not-found pt-6 pb-6 pr-6 pl-6">
                    <div className="b-text pr-6 pl-6">
                        <p>صفحه مورد نظر شما یافت نشد</p>
                        <NavLink to="/" className="text-green has-text-weight-bold mt-6">بازگشت به صفحه اصلی</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotFound;