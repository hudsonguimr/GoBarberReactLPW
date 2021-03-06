import styled, {css} from 'styled-components';

import Tooltip from '../tooltip';

interface ContainerProps{
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #f4ede8;

  display: flex;
  align-items: center;

  & + div{
    margin-top:8px;
  }

  ${(props) => props.isErrored
    && css`
      border-color: #c53030;
    `}
  ${(props) => props.isFocused
    && css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${(props) => props.isFilled
    && css`
      color:  #ff9000;

    `}

  input{
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder{
    color: #666368;
    }
  }
  svg{
    margin-right: 16px;
  }

  span{
    background: #53030;
    color: #FFF;

    &:: before{
      border-color:#53030 transparent;
    }
  }


`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left:16px;
  svg{
    margin:0;
  }
`;
