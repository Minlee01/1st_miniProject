import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import "./Layout.modules.css"
import React from "react"
/*
*레이아웃 내부에 페이지에 해당하는 컴포넌트를 넣을 수 있도록
*property로 컴포넌트를 받도록 반영
*/
function Layout(props){ 

    return (
        <div className="padding-top: 60px">
            <Header />

            <main>
                <h1>is this right?</h1>
            </main>

            <Footer />
        </div>
    )
}

export default Layout