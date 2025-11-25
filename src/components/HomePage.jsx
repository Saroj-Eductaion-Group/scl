import { useEffect, useState } from "react";
import SarojCollegeOfLaw from "./SCL";


const HomePage = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    setParticles(Array.from({ length: 80 }, (_, i) => i));
  }, []);

  return (
    <div className="font-sans text-gray-800">
     
      <SarojCollegeOfLaw />
       
       
    </div>
  );
};

export default HomePage;