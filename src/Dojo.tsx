import React, { FC } from 'react';
import './Dojo.css';

type DojoProps = {
  onExit: () => void;
};

const Dojo: FC<DojoProps> = ({ onExit }) => {
  return (
    <div className="dojo-bg">
      <div className="dojo-card">
        <h1 className="dojo-title">🥋 Welcome to the Dojo 🥋</h1>
        <p className="dojo-desc">Prepare yourself. Only the strongest will prevail.</p>
        <div className="dojo-characters">
          <span className="dojo-character left">🛡️</span>
          <span className="dojo-vs">VS</span>
          <span className="dojo-character right">🗡️</span>
        </div>
        <button className="dojo-exit-btn" onClick={onExit}>
          Retreat
        </button>
      </div>
    </div>
  );
};

export default Dojo;