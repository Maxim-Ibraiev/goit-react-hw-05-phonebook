import { CSSTransition } from 'react-transition-group';
import fade from './withScaleAnimation.module.scss';

const withScaleAnimation = WrappedComponent => props => {
  return (
    <CSSTransition
      in={props.isShow}
      timeout={250}
      classNames={fade}
      unmountOnExit
    >
      <WrappedComponent {...props}></WrappedComponent>
    </CSSTransition>
  );
};

withScaleAnimation.defaultProps = {
  isShow: true,
};

export default withScaleAnimation;
