import React from 'react'

const HeadingComponent = ({ children, title }) => {
  return (
    <div className="mainback">
          <div className="page">
            {title && (
              <>
                <h1 id="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
    </div>
  );
}

export default HeadingComponent