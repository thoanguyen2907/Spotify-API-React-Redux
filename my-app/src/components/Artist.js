import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FormSearch from './../components/FormSearch';
class Artist extends Component {
    render() { 
        let item   = {
            id: '',
            name: '',
            genres: [],
            images: [{url: ''},{url: ''}]
        }
        item = this.props.item !== null ? this.props.item : item;
        
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    {this.showImage(item)}
                    <div className="caption">
                        <h3>
                            <Link to={`artist/${item.id}`}>{item.name}</Link>
                        </h3>
                            <p>{this.showGenres(item.genres)}</p>
                    </div>
                </div>
            </div>
        )
      }
      showGenres(genres){
        let xhml = null;
        if(genres !== null && genres.length > 1){
            xhml = genres.map((genre,index)=>{
            return <span key={index} className="badge badge-secondary">{genre}</span>
            })
        }
        return xhml
    }
      showImage(item){
          let xhml = null;
          if(item.images !== null && item.images.length > 1){
              xhml = <img src ={item.images[1].url} alt={item.name}/>
          }
          return xhml
      }
  
}
      export default Artist;