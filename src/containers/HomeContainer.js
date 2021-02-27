import {connect} from 'react-redux';
import Home from '../components/Home';
import {addToCart, removeToCart} from '../services/actions/action';

const mapStateToProps = state => ({
    // data:state
    data:state.cardItems.cardData
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;