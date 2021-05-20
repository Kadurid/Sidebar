import React from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext } from 'react-icons';
import {InputText} from 'primereact/inputtext';

class Navbar extends React.Component{
  constructor(){
    super();
    this.state = {
      sidebar: false
    };
     
  }
  
  render(){
    return(
      <div>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className='row'>
          <div className ="navbar">
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={() => this.setState({sidebar: !this.state.sidebar})}/>
            </Link>
            <div className='col-2'>
              <span className="p-float-label">
                <InputText id="in" value={ 'Pesquise aqui'}/>
              </span>
            </div>
          </div>
        </div>
        
      <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className= 'nav-menu-items' onClick={()=> this.setState({sidebar: !this.state.sidebar})}>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key = {index} className = {item.cName}>
                <Link to= {item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        
      </nav>
      </IconContext.Provider>
     
      </div>
      
    );
  }
}

export default Navbar
