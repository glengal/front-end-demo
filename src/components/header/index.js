import { connect } from 'react-redux';
import { HeaderView } from './view';
import { logout } from "../../store/actions";

const userSelector = ({ app: { user = {} } } = {}) => user;

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView);
