import PropTypes from 'prop-types';
import Input from '../Input';
import withScaleAnimation from '../../renderProp/withScaleAnimation';
import s from './Filter.module.scss';

function Filter({ filter, onChange, isShow }) {
  return (
    <div className={s.container}>
      <Input
        label={'Find contacts by name'}
        name={'filter'}
        value={filter}
        onChange={onChange}
        autoComplete={'off'}
      ></Input>
    </div>
  );
}

export default withScaleAnimation(Filter);

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
