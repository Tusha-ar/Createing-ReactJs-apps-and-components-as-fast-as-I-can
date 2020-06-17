import React, { useEffect } from 'react';


const Nav = () =>{

    useEffect(()=>{
        const nav = document.querySelector('ul')
        const btn = document.getElementById('btn')
        btn.addEventListener('click',()=>{
            nav.classList.toggle('over')
        } )
    }, [])
    return(
        <div className='nav'>
            <span>LOGO</span>
            <ul>
                <li>Home</li>
                <li>Our work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div id='btn'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
            </div>
        </div>
    )
}

export default Nav