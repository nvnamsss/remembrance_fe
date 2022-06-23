import React, { ReactElement, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Trade(): ReactElement {
    return (
        <>
            <Header></Header>

            <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar hero-image">
                <h1 className="gutter-spacious font-modern-computer">- Ở đây chưa có giao diện, chưa có cả hệ thống T_T</h1>
                <h1 className="gutter-spacious font-modern-computer">- Đan thanh có thể trade thứ đan thanh có để lấy thứ đan thanh cần</h1>
                <h1 className="gutter-spacious font-modern-computer">- Sẽ có hệ thống lưu trữ cho đan thanh ạ :3</h1>
                <h1 className="gutter-spacious font-modern-computer">- Có cả hệ thống promotion toàn diện, xịn xò gồm những tính năng chỉ có lợi cho đan thanh :3</h1>
                <h1 className="gutter-spacious font-modern-computer">- Có cả hệ thống promotion toàn diện, xịn xò gồm những tính năng chỉ có lợi cho đan thanh :3</h1>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Trade;