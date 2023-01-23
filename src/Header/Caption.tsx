

import { contextElem } from '../Home';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export const Caption = () => {
  const { imageURL } = useContext(contextElem);
  const { caption } = useContext(contextElem);
  const { setCaption } = useContext(contextElem);
  const { sharePost } = useContext(contextElem);
  const { modalActiveView } = useContext(contextElem);
  const { setModalActiveView } = useContext(contextElem);
  const { imageFilter } = useContext(contextElem);

  const CHARACTER_LIMIT = 200;
  return (
    <>
    <div className='post'>
     

      <h1>Caption</h1>
     

      <TextField
        id="standard-multiline-static"
        placeholder="Write a caption"
        multiline
        value={caption}
        rows={4}
        variant="standard"
        color="secondary"
        onChange={(e) => setCaption(e.target.value)}
        inputProps={{
          maxlength: CHARACTER_LIMIT
        }}
        // helperText={`${caption.length}/200`}
      />

      <Link onClick={sharePost}>Add</Link>
      <div style={{paddingTop:"20px"}}>
      <button onClick={() => setModalActiveView(modalActiveView - 1)}>BACK</button>
      </div>
    </div>
   
    </>
  );
};