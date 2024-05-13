import './Statistics.scss'

export function Statistics() {
    return (
        <div className='page'>
            <div className="section1">
                <div className='content'>
                    <div className="left-bar">
                        <h1 className="header-title">Let us help you</h1>
                        <h4 className="header-motto">Understand your kid</h4>
                    </div>
                    <div className="right-bar">
                        <img src="../../../public/img/depressedGirl.png" alt="Laughter" />
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className='content'>
                    <div className='first-item'>
                        <div className='item-content'>
                            <img className='img' src="../../../../public/img/asperger.png" alt="" />
                            <div className='description'>
                                <h2>Asperger</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Volutpat sodales ultricies hendrerit scelerisque est. Velit est euismod eget proin facilisis</p>
                            </div>
                        </div>
                    </div>
                    <div className='second-item'>
                        <div className='item-content'>
                            <img className='img' src="../../../../public/img/depresja.png" alt="" />
                            <div className='description'>
                                <h2>Depresja</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Volutpat sodales ultricies hendrerit scelerisque est. Velit est euismod eget proin facilisis</p>
                            </div>
                        </div>
                    </div>
                    <div className='third-item'>
                        <div className='item-content'>
                            <img className='img' src="../../../../public/img/autyzm.png" alt="" />
                            <div className='description'>
                                <h2>Autyzm</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Volutpat sodales ultricies hendrerit scelerisque est. Velit est euismod eget proin facilisis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}