import React from 'react';

const withClass = (Wrapped, className) => () => 
        <div className={className}>
            <Wrapped />
        </div>

export default withClass;