import { connect } from 'react-redux';
import SliderComponent2 from '../components/Slider';

const mapStateProps = state => {
    return {
        profile : state.profile
    };
}

const SliderComponent = connect(
    mapStateProps
)(SliderComponent2)

export default SliderComponent;