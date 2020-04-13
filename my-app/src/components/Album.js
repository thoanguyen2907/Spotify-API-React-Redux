import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Album extends Component {
    render() {
        let album = {name:'',images:[{url:''}],id:''}
        album = this.props.album !==null ?  this.props.album : album
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src={album.images[0].url} alt={album.name} className="img-responsive" />
                    <div className="caption">
                        <h5><Link to={`/album/${album.id}`}>{album.name}</Link></h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;



