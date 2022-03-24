import { MouseEventHandler } from 'react';
import BlinklistSvg from './Logo.png';
import './style.css'
type LogoProps = {
    handleClick?:MouseEventHandler<HTMLImageElement>,
}
export default function Logo({handleClick}:LogoProps){
    return (
           <img className='logo' src={BlinklistSvg} alt='Blinklist' title="Logo" onClick={handleClick}/>
    );
}