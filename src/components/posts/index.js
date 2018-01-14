import { connect } from 'react-redux';
import { PostsView } from './view';

const showLoginSelector = ({ app: { showLogin = true } } = {}) => showLogin;

const mapStateToProps = (state) => ({
  showLogin: showLoginSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(PostsView);
