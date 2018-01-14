import { connect } from 'react-redux';
import { AppView } from './view';
import { withRouter } from "react-router";

const showLoginSelector = ({ app: { showLogin = true } } = {}) => showLogin;

const mapStateToProps = (state) => ({
  showLogin: showLoginSelector(state),
});

export default withRouter(connect(
  mapStateToProps,
  null
)(AppView));
