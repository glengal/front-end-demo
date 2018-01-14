import { connect } from 'react-redux';
import { TodosView } from './view';
import { updateTasks, toggleDisplayStatus } from '../../store/actions';


const withCurrentSelection = (tasks, taskNameToUpdate) =>
  tasks.map(({ name, status }) => name === taskNameToUpdate ?
    { name, status: !status }
    :
    { name, status }
  );

const tasksSelector = ({ app: { tasks = [], shouldshowOnlyCompleted } = {} }) =>
  shouldshowOnlyCompleted ? tasks.filter(({ status }) =>  status === true ) : tasks;

const mapStateToProps = (state) => ({
  tasks: tasksSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTaskChange: (tasks, taskName) => dispatch(updateTasks(withCurrentSelection(tasks, taskName))),
  toggleDisplayStatus: () => dispatch(toggleDisplayStatus())
});

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosView);

export { TodosContainer as Todos };
