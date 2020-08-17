import React from 'react';
import './Carousel.scss';
// import ArrowLeft from '../assets/icons/arrow-left.svg';
// import ArrowRight from '../assets/icons/arrow-right.svg';
import Love from '../assets/icons/love.svg';
import KamarTidur from '../assets/icons/kamar-tidur.svg';
import KamarMandi from '../assets/icons/kamar-mandi.svg';
import LuasBangunan from '../assets/icons/luas-bangunan.svg';
import LuasTanah from '../assets/icons/luas-tanah.svg';
import Detail from './Detail';

// const leftArrowClicked = (event) => {
//     event.preventDefault()
//     console.log('left clicked')
// }

// const rightArrowClicked = (event) => {
//     event.preventDefault()
//     console.log('right clicked')
// }

const Carousel = () => {
    return (
        <section className="carousel">
            <div className="nav-container">
                {/* <a href="blank" onClick={leftArrowClicked} className="btn-left">
                    <img src={ArrowRight} alt=""/>
                </a> */}
            </div>
            <div className="viewport">
                <div className="card">
                    <img className="main-img" src="https://picsum.photos/400" alt=""/>
                    <div className="tags">
                        <span className="tag">
                            <p className="dijual">Dijual</p>
                            <p className="nego">Nego</p>
                        </span>
                        <span>
                            <img className="love-icon" src={Love} alt=""/>
                        </span>
                    </div>
                    <div className="price">
                        <p className="harga">Rp 326 jt</p>
                        <p className="cicilan">Ciciclan Rp 2,61 jt/bln</p>
                    </div>
                    <div className="details">
                        <span>
                            <img src={KamarTidur} alt=""/>
                            <p>2 K. Tidur</p>
                        </span>
                        <span>
                            <img src={KamarMandi} alt=""/>
                            <p>2 K. Mandi</p>
                        </span>
                        <span>
                            <img src={LuasBangunan} alt=""/>
                            <p>65m2</p>
                        </span>
                        <span>
                            <img src={LuasTanah} alt=""/>
                            <p>65m2</p>
                        </span>
                    </div>
                    {/* <div className="see-detail"></div> */}
                    <Detail></Detail>
                </div>
            </div>
            <div className="nav-container">
                {/* <a href="blank" onClick={rightArrowClicked} className="btn-right">
                    <img src={ArrowLeft} alt=""/>
                </a> */}
            </div>
        </section>
    )
}

export default Carousel