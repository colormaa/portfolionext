import React from 'react';

const Item =()=>{
    return(
        <div className="box">
            <div className="drop"></div>
            {/* <div className="activator northwest"></div> */}
            <div className="activator north"></div>
            {/* <div className="activator northeast"></div> */}
            <div className="activator east"></div>
            {/* <div className="activator southeast"></div> */}
            <div className="activator south"></div>
            {/* <div className="activator southwest"></div> */}
            <div className="activator west"></div>
            {/* <div className="overlay northwest">Northwest</div> */}
            <div className="overlay north">North</div>
            {/* <div className="overlay northeast">Northeast</div> */}
            <div className="overlay east">East</div>
            {/* <div className="overlay southeast">Southeast</div> */}
            <div className="overlay south">South</div>
            {/* <div className="overlay southwest">Southwest</div> */}
            <div className="overlay west">West</div>
        </div>
    )
}
export default Item;