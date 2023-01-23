import { useRef, useContext } from 'react';
import '../App.css';
import { contextElem } from '../Home';

export const Create = () => {
	const { handleUpload } = useContext(contextElem);

	const inputImage = useRef(null);

	const openFileBrowser = () => {
		inputImage.current.click();
	};

	return (
		<div className='post'>
			<h1>ADD POST</h1>

			<button onClick={openFileBrowser}>Upload from computer</button>

			<input
				type="file"
				accept="image/*"
				id="file"
				ref={inputImage}
				style={{ display: 'none' }}
				onChange={handleUpload}
			/>
		</div>
	);
};
