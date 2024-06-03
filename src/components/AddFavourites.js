import React from 'react';

const AddFavourite = () => {
	const handlefavourites = ()=>{
		console.log("Hello")
	  }
	return (
		<>
		        <button onClick={handlefavourites}><h4>Add to favourites</h4></button>
			
		</>
	);
};

export default AddFavourite;
