import {useState } from 'react';
import styled from 'styled-components';
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: "0",
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible)

    return (
      
      <Button>
          <FaArrowCircleUp onClick={scrollToTop}
              style={{display: visible? "inline": "none"}} />
      </Button>
              
  )
}

const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 30px;
  font-size: 3rem;
  z-index: 99;
  cursor: pointer;
  color: #70859b;
  `;


export default ScrollButton