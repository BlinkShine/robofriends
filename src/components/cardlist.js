import React from 'react';
import Card from './card';

const Cardlist = ({ robots }) => {
    return (
        <div>  
			{
				robots.map( (user,num) => {
				return 	(
					<Card 
					key={num}
					id={robots[num].id} 
					name={robots[num].name} 
					email={robots[num].email}
					/>
				);
				})
			}	
		</div>
    );
};

export default Cardlist;
