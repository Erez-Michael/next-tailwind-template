import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
      <div>
          <div>
              <BsChatSquareDots />
              <h1>Ludmer</h1>
          </div>
          <div>
              <div>
                  <AiOutlineClockCircle />
                  <p>8am-5pm</p>
              </div>
              <div>
                  <AiFillPhone />
                  <p>
                      514-525-2625
                  </p>
              </div>
              <button>Get a Free Quote</button>
          </div>
    </div>
  )
}

export default TopBar;