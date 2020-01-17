import PropTypes from "prop-types";
import React from "react";

const Work = ({ _body }) => <article className="work">{_body}</article>;

Work.propTypes = {
  _body: PropTypes.node.isRequired
};

Work.defaultProps = {};

export default Work;
