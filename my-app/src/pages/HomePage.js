import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actGoHome,actChangeQuery} from './../actions/index';
import ArtistList from '../components/ArtistList';
import FormSearch from '../components/FormSearch';
class HomePage extends Component {
componentDidMount(){
		this.props.changeBreadcrumb();
	}
    render() {

		return (
<div className="panel panel-info">
				<div className="panel-heading">
					<FormSearch />
				</div>
				<div className="panel-body">
					<ArtistList />
				</div>
			</div>
        )
        }
	}
	const mapDispatchToProps=(dispatch,ownProps)=>{
		return {
			changeBreadcrumb: ()=>{
				dispatch(actGoHome())
			},
			handleSearch: (query) => {
				dispatch(actChangeQuery(query))
			}
		}
	}
	 export default connect(null,mapDispatchToProps)(HomePage);