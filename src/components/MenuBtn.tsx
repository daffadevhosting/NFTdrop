import react, { useState, useEffect } from 'react'
import "../styles/Home.css"

export default function MenuBtn() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

function goDown() {
  window.scrollBy(0, 1250);
}

  return (
    <div>
      {isVisible && (
    <div className="menu_btn" id="Button">
        <button onClick={goDown} title="Go to Menu">Go
        </button>
    </div>
      )}
    </div>
  );
}
