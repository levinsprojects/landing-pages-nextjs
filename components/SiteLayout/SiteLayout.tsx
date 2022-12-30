import { NextPage } from "next";
import { ReactElement } from "react";
import Header from "../Header";
import Footer from "../Footer"

// import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({});

export const SiteLayout = ({ children }:{children:ReactElement}) => {
    return <div className={`contents`}>
        <Header/>
        {
            children
        }
        <Footer/>
    </div>
};