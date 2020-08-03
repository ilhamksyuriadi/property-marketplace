import React, { useState } from 'react';
import './Detail.scss';
import Love from '../assets/icons/love.svg';
import KamarTidur from '../assets/icons/kamar-tidur.svg';
import KamarMandi from '../assets/icons/kamar-mandi.svg';
import LuasBangunan from '../assets/icons/luas-bangunan.svg';
import LuasTanah from '../assets/icons/luas-tanah.svg';

const Detail = () => {
    const [state, setState] = useState({
        show: true
    })

    const openPopup = (event) => {
        // event.preventDefault();
        console.log('button clicked')
        setState({show : true})
    }

    const closePopup = (event) => {
        // event.preventDefault();
        console.log('button clicked')
        setState({show : false})
    }

    return (
        <div>
            <button className="btn-show" onClick={openPopup}>Lihat Detail</button>
            <div className={"popup-" + (state.show ? 'show' : 'hidden')}>
                <div className={"detail-" + (state.show ? 'show' : 'hidden')}>
                    <button className="btn-close" onClick={closePopup}>x</button>
                    <div className="detail-content">
                        <img className="detail-img" src="https://picsum.photos/400" alt=""/>
                        <div className="detail-tags">
                            <span className="tag">
                                <p className="dijual">Dijual</p>
                                <p className="nego">Nego</p>
                            </span>
                            <span>
                                <img className="love-icon" src={Love} alt=""/>
                            </span>
                        </div>
                        <div className="detail-price">
                            <p className="harga">Rp 326 jt</p>
                            <p className="cicilan">Ciciclan Rp 2,61 jt/bln</p>
                        </div>
                        <div className="detail-desc">
                            <p className="desc">Rumah minimalis dijual di Bandung Jawa Barat</p>
                            <p className="alamat">Jl. Sukajadi No.1 Bandung, Jawa Barat</p>
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
                        <button className="btn-show" >Lihat Peta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail