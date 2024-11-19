import React from "react";

const FontSizeSelector = ({ fontSize, setFontSize }) => {
    return (
        <div>
            <h3>FontSize</h3>
            <button onClick={() => setFontSize("16px")}>Small</button>
            <button onClick={() => setFontSize("20px")}>Medium</button>
            <button onClick={() => setFontSize("24px")}>Large</button>
        </div>
    )
}

export default FontSizeSelector;