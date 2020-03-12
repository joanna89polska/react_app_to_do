import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsFromSearch} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsFromSearch(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResults);