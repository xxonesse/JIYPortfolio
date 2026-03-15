

import Studioroom from "../assets/studiofalls.svg"; 

const Homeroom = () => {   
  return (     
    <div className="room">       
      <img 
        src={Studioroom}         
        alt="Homeroom"         
        className="room-img"       
      />     
    </div>  
  );
}; 

export default Homeroom;