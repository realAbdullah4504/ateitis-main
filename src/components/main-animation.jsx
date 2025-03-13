import React from "react";

import styled from "styled-components";

const StyledMainAnimation = styled.div`
  /* width: 80%; */
  /* height: 80%; */
  /* display: flex; */
  /* align-items: end; */
  /* margin: auto; */
  /* margin-top: 11em; */
`;

function MainAnimation() {
  return (
      <object
        type="image/svg+xml"
        data="/animation.svg"
        className="svg"
        aria-label="Intro main page welcome"
      >
        svg-animation
      </object>
  );
}
export default MainAnimation;
