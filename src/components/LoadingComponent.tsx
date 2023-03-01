import React from 'react'
import styled from 'styled-components'
import BoxCenterAll from './container/BoxCenterAll'

const StyledLoading = styled(BoxCenterAll)`
  background-color: red;
`

interface LoadingComponentProps {
  className?: string;
}

const LoadingComponent = ({ className }: LoadingComponentProps) => {
  return (
    <BoxCenterAll className={className}>
      <h1>Loading</h1>
    </BoxCenterAll>
  );
};

export default LoadingComponent