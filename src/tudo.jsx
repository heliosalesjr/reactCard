import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Tudo() {
    return (
    <div className='main'>
        <div className='about'>
            <img src='./src/assets/perfilia.jpg' className='imagem'/>
        
            <h1>Hélio Sales Jr.</h1>
            <h2>React Developer</h2>
            <h4>helio@ornitorrinco.com.br</h4>

            <div className='btn'>
                <button className='btn1'><img src={"./src/assets/email_btn.png"} className='icon'/>Email</button>
                <button className='btn2'><img src={"./src/assets/lqln_btn.png"} className='icon'/>Linkedln</button>
            </div>
        </div>
        <div className='rest'>

       
            <div className='info'>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum mollitia perspiciatis quas aliquam deleniti animi nam. Architecto animi nobis libero ullam autem, enim ipsam consequatur impedit alias veniam necessitatibus?</p>
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt, blanditiis ducimus sunt nesciunt debitis cupiditate laborum beatae, saepe temporibus aliquid consequuntur deleniti, voluptas necessitatibus omnis laudantium natus voluptatum? Adipisci!</p>
            </div>

            <div className='footer'>
            <a href="http://www.instagram.com/heliosalesjr"><img src='./src/assets/Twitter.png' /></a>
            <a href="http://www.instagram.com/heliosalesjr"><img src='./src/assets/Facebook.png' /></a>
            <a href="http://www.instagram.com/heliosalesjr"><img src='./src/assets/Instagram.png' /></a>
            <a href="http://www.instagram.com/heliosalesjr"><img src='./src/assets/Github.png' /></a>
            </div>
        </div>
    </div>

    )
}