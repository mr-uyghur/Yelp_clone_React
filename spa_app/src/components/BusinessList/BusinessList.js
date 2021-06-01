import React, { useState } from 'react';
import './BusinessList.css'
import Business from '../Business/Business'

const BusinessList = (props) => {
    const { businesses } = props



    return (
        <>
            <div class="BusinessList">
                {
                    businesses.map(business =>{
                    return <Business business={business}/>
                    })
                }

            </div>
        </>
    )
}

export default BusinessList