import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Card = styled.div`
  margin-bottom: ${props => (props.marginBottom ? "1rem" : "0")};
  @media only screen and (min-width: 1024px) {
    border: ${props => props.border ? "1px solid #cedfef" : "none"};
  }
`;

Card.propTypes = {
  ...Card.propTypes,
  border: PropTypes.bool,
  marginBottom: PropTypes.bool
};

Card.defaultProps = {
  ...Card.defaultProps,
  border: true,
  marginBottom: false
};

export default Card;
