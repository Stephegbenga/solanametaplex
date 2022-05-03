import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'https://code.jquery.com/jquery-3.6.0.min.js'
import '../../../styles/header.css'
import logo from '../../../images/logo.png'
import team from '../../../images/team.jpg'
import {BsChevronDown} from 'react-icons/bs'
import {  AiOutlineMenu } from "react-icons/ai"
import { MenuList } from '../../../mainComponents/MenuList'
import { useState } from 'react'
import { CircledImage } from '../../utils/CircledImage'



export const Header = () =>{
    const [menuBarState, setMenuBarState] = useState('none')
    const [connected, setConnected] = useState(false)
   
    const closeMenuList = function (){
        setMenuBarState("none")
    }

    const openMenuList = function(){
      setMenuBarState("block")

    }
   
   
    return(
        <header className="container-fluid p-2">
            <div className='row'>
            <a className="logo-wrapper col col-sm-3 col-md-2" href='#' style={{
                fontWeight: 'bold',
                fontSize: 25
            }}>
                <img src={logo} alt='' style={{
                    width: 180,
                    height : 80
                }}/>
              
            </a>
            {/* MOBILE VIEW */}
            <div className='col col-sm-9 d-md-none s d-flex justify-content-end align-items-center'>
                <AiOutlineMenu className="menu-bar" onClick={() => setMenuBarState("block")}/>
              
            </div>

            {/* Menu list */}
            <MenuList menuBarState={menuBarState} setMenuBarState={setMenuBarState}/>
           
            {/* TABLET AND DESKTOP VIEW */}
            <div className='d-none col-md-10 d-md-flex'>
            <nav className="nav ms-auto gap-5 justify-content-end align-items-center w-100">
                <a className="nav-link " href={`${window.location.origin}/mint`}>Mint Nfts</a>
                <a className="nav-link" href="#">About <BsChevronDown /></a>
                <a className="nav-link " href="#">Help <BsChevronDown /></a>
                <a className="nav-link  rounded-pill d-flex justify-content-center align-items-center connect py-2" href="#" role='button' >{connected ? <CircledImage width="40px" height="40px" imageSrc={team}/> : "Connect"}</a>
                
            </nav>
            </div>
            </div>

            
        </header>

    )
}