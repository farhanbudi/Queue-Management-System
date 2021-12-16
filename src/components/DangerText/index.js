import React from 'react'
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

export const DangerText = (props) => {
  return (
        <div className="danger-text">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <p> {props.children}</p>
        </div>
  );
};
