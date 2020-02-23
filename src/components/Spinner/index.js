import styled from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

const Spinner = styled(AiOutlineLoading).attrs(state => ({
  color: state.color ? state.color : '#fff',
  fontSize: state.fontSize,
}))`
  font-weight: bold;
  background: transparent;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
