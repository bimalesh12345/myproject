import React from 'react';


//import { Container } from 'reactstrap';



const Content = ({ tag: Tag, className, ...restProps }) => {
  const classes = "content";

  return <Tag className={classes} {...restProps} />;
};

Content.defaultProps = {
  tag: "Container1",
};

export default Content;
