import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

// children = component inside <Wrapper>
export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
