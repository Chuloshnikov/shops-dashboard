import React, { useState } from 'react'
import CompactCard from './CompactCard';
import ExpandedCard from './ExpandedCard';
import { AnimateSharedLayout } from 'framer-motion';


const Card = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            { expanded ?  <ExpandedCard param={props} expanded={expanded} setExpanded={setExpanded}/> : <CompactCard param={props} expanded={expanded} setExpanded={setExpanded}/>}
        </AnimateSharedLayout>
    )
}



export default Card;