import React from 'react'
import Link from 'next/link';
import HeaderDp from '../components/header-dp'
function Header(){
    return(
        <>
        <HeaderDp />
        <header className="wdheader">
            <section className="container">
            <section className="wdheader__info">
                <a className="wdheader__link" href=""><img src="/WMG-logo.svg" className="wdheader__logoimg"/></a>
                <div>
                <div className="wdnavigation">
                    <Link href="/"><a  className="wdnavigation__link">Home</a></Link>
                    <Link href="/vendors" prefetch><a  className="wdnavigation__link">Vendors</a></Link>
                    <Link href="/photos" prefetch><a  className="wdnavigation__link">Photos</a></Link>
                    <Link href="/community" prefetch><a  className="wdnavigation__link">Real Weddings</a></Link>
                    <Link href="/blog" prefetch><a  className="wdnavigation__link">Blogs</a></Link>
                </div>
                </div>
                <section className="wduser__register__login">
                    <span className="wduser__register__login__link wduser__register__login__link--heighlight">Sign Up</span>
                    <span className="wduser__register__login__link">Log In</span>
                </section>
            </section>
            </section>
            <style jsx>
                {
                    `
                    .wdheader{background:#e72e77;margin:0 0 30px;} 
                    .wdheader__info{display:flex;align-items:center; height: 60px;padding:0 15px;} 
                    .wdheader__link{justify-content:flex-end}
                    .wduser__register__login{justify-content:flex-end}
                    .wdheader__logoimg{width:220px;}
                    .wduser__register__login{display:flex;align-items:center;justify-content: flex-end; flex: 1;}
                    .wduser__register__login__link.wduser__register__login__link--heighlight{background-color: #e96150; border: 1px solid #e96150; color: #fff;}
                    .wduser__register__login__link{background-color: #fff; border: none; color: #e96150; text-transform: capitalize;border-radius: 2px;font-weight: 500;font-size: 14px; margin: 0 5px; min-width: 80px; padding: 3px 15px 5px; text-align: center; line-height: 16px;cursor:pointer;}

                    .wdnavigation{display:flex;align-items:center;justify-content:space-between;margin-left:25px;}                        
                        .wdnavigation__link{text-transform: uppercase;color: #fff;text-decoration:none;font-weight: 500;font-size: 15px;margin:0 10px;}
                    `
                }
            </style>
        </header>
        </>
    )
}
export default Header