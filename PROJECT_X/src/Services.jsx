import React, { useState } from "react";
import ServicesSection from "./components/ServicesSection";
import API from "./ServicesAPI";

const Services = () => {
    const[serviceList, setServiceList] = useState(API)    

  return (
    <ServicesSection serviceList={serviceList} />
  )
}

export default Services