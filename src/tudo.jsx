import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Tudo() {
    return (
    <div>
        <div className='about'>
            <img src="./assets/perfilia.png" alt="" />
        
            <h1>Hélio Sales Jr.</h1>
            <h2>React Developer</h2>
        </div>
        <div>
            <button>e-mail</button>
            <button>linkedln</button>
        </div>
        <div className='info'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum mollitia perspiciatis quas aliquam deleniti animi nam. Architecto animi nobis libero ullam autem, enim ipsam consequatur impedit alias veniam necessitatibus?</p>
            <h3>Interests</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt, blanditiis ducimus sunt nesciunt debitis cupiditate laborum beatae, saepe temporibus aliquid consequuntur deleniti, voluptas necessitatibus omnis laudantium natus voluptatum? Adipisci!</p>
        </div>

        <div className='footer'>
            <p>This is the Footer</p>
        </div>
    </div>

    )
}