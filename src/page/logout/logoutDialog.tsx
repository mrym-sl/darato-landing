import React, { useContext, useEffect, useState } from 'react';
// import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { Context } from '../../context/Context';
import './logoutDialog.css';


const LogoutDialog = () => {
    // const history = useHistory();
    const context = useContext(Context);
    const { windowSize, logoutDiakog, setLogoutDiakog } = context;

 
    return (
        <>
            {/* <div className={`modal ${logoutDiakog ? "is-active" : ""} logout-modal`} >
                <div className="modal-background"></div>
                <div className="modal-card" style={windowSize > 510 ? { width: "445px" } : { width: "344px" }}>
                    <section className="modal-card-body has-text-centered" style={windowSize > 510 ? { padding: "16px 60px 24px" } : { padding: "16px 8px 12px" }}>
                        <img src="../img/logout-popup.svg" />
                        <p className="d-head-text7 text-black has-text-weight-bold mb-2 mt-5"> از خارج‌شدن حساب‌کاربری اطمینان دارید؟</p>
                        <p className="d-text3 text-gray1 mb-1">در صورت خارج شدن از حساب کاربری، برای استفاده دوباره باید وارد اپلیکیشن شوید </p>
                        <button className="darato-btn secondary-btn-sm is-inline mt-4" onClick={() => setLogoutDiakog(false)}>خیر</button>
                        <button className={`darato-btn secondary-btn-sm is-inline mr-1 bg-error text-white`} onClick={() => history.push('/logout')}>خروج</button>
                    </section>
                </div>
            </div> */}
        </>
    )
}
export default LogoutDialog;