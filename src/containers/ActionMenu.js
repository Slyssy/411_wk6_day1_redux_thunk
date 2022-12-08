import { connect } from 'react-redux';
import ActionMenu from '../components/ActionMenu';
import { deleteMake } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMake: (index) => dispatch(deleteMake(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionMenu);
