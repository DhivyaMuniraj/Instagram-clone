//FILTER

import { useContext, useState } from 'react';
import { contextElem } from '../Home';

export const Filter = () => {
	const { modalActiveView } = useContext(contextElem);
	const { setModalActiveView } = useContext(contextElem);
	const { imageURL } = useContext(contextElem);
	const { setImageURL } = useContext(contextElem);
	const { imageFilter } = useContext(contextElem);
	const { setImageFilter } = useContext(contextElem);

	const filtersList = [
		'clarendon',
		'gingham',
		'moon',
		'lark',
		'reyes',
		'walden',
		'slumber',
		'xpro2',
		'valencia',
		'aden',
		'perpetua',
	];

	return (
		<div className="post_filter">
			<h1>FILTER</h1>
			
			<div className="filter-page">
			
					<div style={{width:"40%",textAlign:"center",margin:"auto",padding:"4px"}}>
					
							<img src={imageURL} className={imageFilter} style={{width:"100%",height:"150px",objectFit:"contain"}}></img>
						
					</div>
			
				<div className="filters-container">
					{filtersList.map((item, index) => {
						return (
							<div
								key={index}
								id="filter-container-sub"
								onClick={() => {
									setImageFilter(item);
								}}
							>
							
									<img src={imageURL}className={item}></img>
								
								<p>{item}</p>
							</div>
						);
					})}
					{/* </div> */}
				</div>
			</div>
			<div style={{paddingTop:"20px"}}>
     
				<button onClick={() => setModalActiveView(modalActiveView + 1)}>
					NEXT  
				</button>
        &nbsp; &nbsp;
				<button onClick={() => setModalActiveView(modalActiveView - 1)}>
					BACK
				</button>
			</div>
		</div>
	);
};
