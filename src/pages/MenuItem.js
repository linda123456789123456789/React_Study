import React from "react";
import { useParams } from "react-router-dom";
// 可以抓到id
import useFetch from "../hooks/useFetch";

function MenuItem() {
  const { id } = useParams();
  const { data: menuItem } = useFetch(`http://localhost:8000/menu/${id}`);

  return (
    <div className="menu-container box align-items-center">
      {menuItem && (
        <div>
          <img src={menuItem.img} alt={menuItem.title} className="menu-img" />
          <div className="menu-content">
            <p className="menu-title">{menuItem.title}</p>
            <p className="menu-text">NT {menuItem.price || "時價"}</p>
            <p className="menu-text"> {menuItem.intro}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
