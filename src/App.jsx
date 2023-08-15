// Write your Color component here
import { useState } from 'react';

const Color = () => {
  return <div className="red"></div>
  
}
const App = () => {
  return (
    <><div id="navbar">
      <div>Currently selected: </div>
      <div className={selectedColor}>{selectedColor}</div>
    </div><div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className="red">red</div>
        </div>
        <div id="colors-list">{<div id="colors-list">
          <div id="colors-list">
            <Color color="red" />
            <Color color="blue" />
            <Color color="green" />
          </div>
          <div id="colors-list">
  <Color color="red" setSelectedColor={setSelectedColor}/>
  <Color color="blue" setSelectedColor={setSelectedColor}/>
  <Color color="green" setSelectedColor={setSelectedColor}/>
</div>

        </div>}</div>
      </div></>
  );
};

export default App;
