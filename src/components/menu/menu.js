import {NavLink} from "react-router-dom";
import "./menu.scss";
import {useState} from "react";

const Menu = ({isOpen, menuList, shownItem, setShownItem, onMenuClick}) => {
    const menuItems = menuList.map((menuItem, index) => (
        <li className={"menu__item"} key={index} onClick={() => setShownItem(menuItem)}>
            <NavLink key={index} to={menuItem.link}>{menuItem.name}</NavLink>
        </li>)
    )
    const className = isOpen ? 'menu' : 'menu hiden';

    return (
        <div className={className}>
            <div className={`menu__button menu__button${isOpen ? '--checked' : ''}`}
                 onClick={onMenuClick}>
                <p>{shownItem.name}</p>
                {
                    isOpen ?  <span>&#x2B9F;</span> : <span>&#x2B9E;</span>
                }
            </div>
            {
                isOpen &&
                <ul className="menu__list">
                    {menuItems}
                </ul>
            }
        </div>
    )
}

export default Menu;