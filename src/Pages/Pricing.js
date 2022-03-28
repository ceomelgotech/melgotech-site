import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Prices from '../Components/Prices';

const Pricing = () => {
  return (
    <>
      <Breadcrumb
          title="Pricing"
          name="Our Pricing"
        />
      <Prices />
    </>
  )
}

export default Pricing;