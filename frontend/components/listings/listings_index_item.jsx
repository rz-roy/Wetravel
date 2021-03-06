import React from 'react';

const ListingsIndexItem = ({ listing, history }) => {
  const photo = Boolean(listing.photoUrls) ? listing.photoUrls[0] : "";

  return (
    <div className="listing-box">
      <div className="image">
        <img src={photo} alt="Image goes here" />
      </div>

      <div className="textarea" onClick={() => {
        history.push(`listing/${listing.id}`)
      }}>
        <div className="type-bed">
          <div>{listing.listing_type} · {listing.num_bed} bed</div>
        </div>
        
        <div className="title">
          <div>{listing.title}</div>
        </div>

        <div className="price">
          <div>${listing.price} per night</div>
        </div>

        <div className="host">
          <div>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            &nbsp;&nbsp; 
            Hosted by HostId {listing.host_id}</div>
        </div>
      </div>
    </div>
  )
}

export default ListingsIndexItem