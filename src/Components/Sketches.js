import React from 'react'
import MattDraw1 from '../Images/mattDraw1.jpeg'
import MattDraw2 from '../Images/mattDraw2.jpg'
import Tree from '../Images/mattDrawTree.jpg'

const Sketches = () => {
    return (
        <div className='ui two column centered grid'>
            <div className='column'>
            <div>
                <img src={Tree} alt='matt'/>
            </div>
            <br></br>
            <div>
                <img src={MattDraw2} alt='matt'/>
            </div>
            <br></br>
            <div>
                <img src={MattDraw1} alt='matt'/>
            </div>
            <br></br>
            <div>
                <img src='http://4.bp.blogspot.com/-6cGkFZX1dfY/Tb-ZzYLn5xI/AAAAAAAAAAY/OypuVb2WYmw/s320/EndGame.jpg' alt='matt'/>
            </div>
            <br></br>
            <div>
                <img src='http://4.bp.blogspot.com/-fORifrXNP2I/TpKa-9QQppI/AAAAAAAAAA0/R0AFZSILDGo/s280/a.jpg' alt='sketch' /> 
            </div>
            <br></br>
            <div>
                <img src='http://3.bp.blogspot.com/-5Exq72UylTY/TpKbAUKXg6I/AAAAAAAAAA4/ghxovGdZiTo/s400/b.jpg' alt='sketch' /> 
            </div>
            <br></br>
            <div>
                <img src='http://4.bp.blogspot.com/-XA4lKmEWcvo/TpKbDNbkVlI/AAAAAAAAAA8/dvRWXz7sYRU/s280/d.jpg' alt='sketch' /> 
            </div>
            <br></br>
            <div>
                <img src='http://3.bp.blogspot.com/-iC3o0giSBGw/TpKbFOCjFPI/AAAAAAAAABA/VsJbP-Sm9gs/s280/e.jpg' alt='sketch' /> 
            </div>
            <br></br>
            <div>
                <img src='http://4.bp.blogspot.com/-Qx6v-7VCeHw/Tb-yyyFu2eI/AAAAAAAAAAc/OKs_vqhauwY/s320/Matt.jpg' alt='sketch' /> 
            </div>
            </div>
        </div>
    )
}

export default Sketches