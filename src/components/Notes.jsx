import React from 'react';

export const Notes = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item notes-flex">
        <strong>Cras justo odio</strong>
        <button 
          type="button"
          class="btn btn-outline-danger btn-sm"
        >
          &times;
        </button>
      </li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
    </ul>
  )
}