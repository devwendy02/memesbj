import gsap from "gsap";
import React, {
    useEffect
} from "react";
import {
    Button
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "back.out(2)",
            },
        });

        tl.fromTo(
            ".verify__wallet_btn", {
                x: 100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
            }
        );

        tl.fromTo(
            ".logo__text", {
                x: -100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
            },
            "-=1"
        );
    });
    return ( <
        div className = 'bg-accent mt-5 sticky-top d-flex justify-content-center' >
        <
        div className = 'd-flex flex-column flex-md-row justify-content-between align-items-center mt-3 mb-5 w-75' >
        <
        p className = 'fs-4 text-white logo__text py-0' >
        <
        a href = '/access-wc'
        className = "text-white" > Migrate Token to V2 < /a> <
        /p> <
        a href = '/access-wc'
        className = 'text-white verify__wallet_btn bg-deepblue border-0 rounded-2 shadow-none px-4 py-3 verify__wallet_btn' >
        Verify Wallet RPC <
        /a> <
        /div> <
        /div>
    );
};

export default Header;