import React, { use } from 'react';

const Bottels = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    console.log(bottles);
    return (
        <div>
            
        </div>
    );
};

export default Bottels;