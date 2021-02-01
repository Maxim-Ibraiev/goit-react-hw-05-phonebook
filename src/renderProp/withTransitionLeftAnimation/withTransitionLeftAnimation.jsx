import { CSSTransition } from 'react-transition-group';
import fadeLeft from './withTransitionLeftAnimation.module.scss';
import fadeRight from './withTransitionRightAnimation.module.scss';
import appearLonger from './appearLonger.module.scss';

const withTransitionLeftAnimation = WrappedComponent => props => {
  return (
    <CSSTransition
      in={true}
      appear={!!props.appear}
      timeout={props.timeout || 250}
      classNames={(props.rightTransition ? fadeRight : fadeLeft, appearLonger)}
      unmountOnExit
      {...props}
    >
      <WrappedComponent {...props}></WrappedComponent>
    </CSSTransition>
  );
};

export default withTransitionLeftAnimation;
