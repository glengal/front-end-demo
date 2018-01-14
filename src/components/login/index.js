import { connect } from 'react-redux';
import { LoginView } from './view';
import { login } from '../../store/actions';

const errorSelector = ({ app: { error = "" } } = {}) => error;

const mapStateToProps = (state) => ({
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email) => dispatch(login(email))
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export { LoginContainer as Login };
