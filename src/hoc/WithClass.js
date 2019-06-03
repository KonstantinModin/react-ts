import React from 'react';

const withClass = (Wrapped, className) => {
    return () => (
        <div className={className}>
            <Wrapped />
        </div>
    );

};

export default withClass;