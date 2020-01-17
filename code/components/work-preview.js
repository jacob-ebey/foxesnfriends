import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import Card from "./card";

const ImgAnchor = styled.a`
  display: block;
`;

const Img = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  ${props =>
    props.large
      ? `
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  `
      : `
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  `}
`;

const TitleAnchor = styled.a`
  display: block;
  padding: 1rem;
  color: #003366;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const WorkPreview = ({
  title,
  href,
  image,
  large,
  marginBottom,
  border,
  children
}) => (
  <Card marginBottom={marginBottom} border={border}>
    {image && (
      <ImgAnchor href={href}>
        <Img src={image} alt={title} />
      </ImgAnchor>
    )}
    <Title large={large} marginBottom={marginBottom && children}>
      <TitleAnchor href={href}>{title}</TitleAnchor>
    </Title>

    {children}
  </Card>
);

WorkPreview.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string,
  border: PropTypes.bool,
  large: PropTypes.bool,
  marginBottom: PropTypes.bool,
  children: PropTypes.node
};

WorkPreview.defaultProps = {
  image: null,
  border: true,
  large: false,
  marginBottom: false,
  children: null
};

export default WorkPreview;
