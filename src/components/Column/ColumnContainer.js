import { connect } from 'react-redux';
import Column from './Column';

export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({
  cards: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(Column);