import React from 'react';
import ReactDom from 'react-dom';

export class Content extends React.Component{
	render () {
	var contacts=this.props.contact;
		return (
		 <div>
		    <div className="card-header text-success">

		       <div className="card-body">
		          <h5 className="card-text"> Id:{contacts.id}</h5>
		                  
		         <div>
		            <h5 className="card-title"> Name:{contacts.name}</h5>
		            <h6 className="card-subtitle mb-2 "> Email: {contacts.email}</h6>
		            <h6 className="card-subtitle mb-2 "> Phone:{contacts.phone}</h6>
		         </div>

		         <div>
		            <h6 className="card-subtitle mb-2 text-muted">Username: {contacts.username}</h6>
		         </div>

		         <div>
		           <p className="card-subtitle mb-2 text-info"> Address:{contacts.address.street},{contacts.address.city},{contacts.address.zipcode}</p>
		         </div>

		         <div>
		            <p className="card-subtitle mb-2 text-muted"> Lat:{contacts.address.geo.lat}</p>
		            <p className="card-subtitle mb-2 text-info"> Lng:{contacts.address.geo.lng}</p>
		         </div>

		         <div>
		            <p className="card-subtitle mb-2 text-danger"> Company:{contacts.company.catchPhrase}</p>
		            <p className="card-subtitle mb-2 text-warning"> Website:{contacts.website}</p>
		         </div>

		       </div>
		    
		    </div>
		 </div>
		);  	
	}
}