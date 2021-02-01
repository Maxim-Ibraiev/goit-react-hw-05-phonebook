import { CSSTransition } from 'react-transition-group';
import fade from './InputTextAnimation.module.scss';

const InputTextAnimation = WrappedComponent => props => {
  return (
    <CSSTransition in={true} classNames={fade} timeout={250}>
      <WrappedComponent {...props} />
    </CSSTransition>
  );
};

export default InputTextAnimation;
