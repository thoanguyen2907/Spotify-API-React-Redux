import React, { Component } from 'react';
import {connect} from 'react-redux';
import SpotifyAxios from './../services/SpotifyAxios';
import Album from './../components/Album';
import {actGoArtist} from './../actions/index'; 
class ArtistPage extends Component {
	constructor(props){
        super(props); 
        this.state={
			artist:null,
			albums:[]
        }
    }
	UNSAFE_componentWillMount(){
		let {match} = this.props;
		let id = match.params.id;
		this.loadArtist(id)
		this.loadAlbums(id)
}
loadArtist(id){
	SpotifyAxios.getArtists(id).then((response)=>{
		if(response!==undefined && response.data !== null){ 
		this.setState({
			artist:response.data
		}) 
		this.props.changeBreadcrumb(response.data.name,`/artist/${response.data.id}`)
		}
	})
}
loadAlbums(id){
	SpotifyAxios.getAlbums(id).then((response)=>{
		if(response!==undefined && response.data !== null){
		this.setState({
			albums:response.data.items
		})
		}
	})
}
	render() {
	let artist = {name:'', external_urls:'',geners:[],images:[{url:''}]};
	let albums = [{id:'',images:[{url:''}],name:''}]
	artist = this.state.artist !== null ? this.state.artist:artist;
	albums = this.state.albums !== null ? this.state.albums:albums;
        return (
			<div className="panel panel-info">
				<div className="panel-heading">
		<h3 className="panel-title">{artist.name}</h3>
				</div>
				<div className="panel-body">
					<div className="col-sm-4 col-md-4">
					
						<blockquote style={{ marginTop: 20 }}><p>{artist.name}</p></blockquote>
						<p>
							<i className="glyphicon glyphicon-play-circle" /><a href={artist.external_urls.spotify}
														rel="noopener noreferrer" target="_blank"> View Spotify</a><br /><br />
							<i className="glyphicon glyphicon-play-circle" />
							Genres: 
							<span className="badge badge-secondary">{artist.genres}</span>	
											
						</p>
					</div>
					<div className="col-sm-8 col-md-8">
						<div className="card card-danger">
							<div className="card-heading">
								<h3 className="card-title">List Albums</h3>
							</div>
							<div className="card-body">
							{this.showAlbums(albums)}
 							 </div>
							
						</div>
					</div>
				</div>
			</div>				
)}
showAlbums(albums){
	let xhml = null; 
	if(albums!==null && albums.length >0 ){
		xhml = albums.map((album,index)=>{
			return <Album key={index} album={album} index={index}/>
		})
	}
	return xhml
}
 
// showGenres(genres){
// 	let xhml = null;
// 	if(genres !== null && genres.length > 0 ){
// 		xhml = genres.map((genre,index)=>{
// 		return ( 
// 		<span key={index} className="badge badge-secondary">
// 			{genre}
// 		</span>
// 		)
// 		})
// 	}
// 	return xhml
// }

}
const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		changeBreadcrumb: (name,to)=>{
			dispatch(actGoArtist(name,to))
		}
	}
}
 export default connect(null,mapDispatchToProps)(ArtistPage);