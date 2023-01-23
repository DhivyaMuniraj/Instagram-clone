import { useContext } from 'react';
import { contextElem } from '../Home';

export const Crop = () => {
	const { modalActiveView } = useContext(contextElem);
	const { setModalActiveView } = useContext(contextElem);
	const { imageURL } = useContext(contextElem);

	return (
		<div className='post'>
			<h1>CROP IMAGE</h1>
			<img width="50%" src={imageURL}></img>
			<div style={{margin:"30px",padding:"20px"}}>
				<button onClick={() => setModalActiveView(modalActiveView + 1)}>
					NEXT
				</button> &nbsp; &nbsp;
				<button onClick={() => setModalActiveView(modalActiveView - 1)}>
					BACK
				</button>
			</div>
		</div>
	);
};
