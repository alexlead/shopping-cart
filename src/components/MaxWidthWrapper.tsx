import React from 'react';


interface IMaxWidthWrapperProps {
    children: React.ReactNode;
}

const MaxWidthWrapper: React.FunctionComponent<IMaxWidthWrapperProps> = ({ children }) => {
    return (
        <div className="mx-auto px-10 container my-5">
            {children}
        </div>
    );
}
export default MaxWidthWrapper;