import { connect } from 'react-redux';
import { fetchProfile } from '../actions/actions_profile';

import ProfileComponent from '../components/Profile';

const mapStateProps = state => {
    return {
        profile : state.profile
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProfile : () => {
            dispatch(fetchProfile());
        }
    }
}

const Profile = connect(
    mapStateProps,
    mapDispatchToProps
)(ProfileComponent)

export default Profile;