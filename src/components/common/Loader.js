import React from 'react';
import styled from 'styled-components';

const getColor = (p) => {
  switch (p.status) {
    case 'SUCCESS':
      return 'white';

    case 'REQUEST':
      return  'gray'

    case 'WARNING':
      return 'yellow';

    case 'ERROR':
      return 'red';

    default:
    return 'white';
  }
}

const LoadingMessage = styled.h3`
  color: ${p => getColor(p)};
  text-align: center;
`

export const Loader = ({status, message}) => <LoadingMessage status={status}>{message}</LoadingMessage>
