import InstagramIcon from '@mui/icons-material/Instagram';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState ,useContext} from 'react';
import { contextElem } from '../Home';
import { Create } from './Create';
import { Crop } from './Crop';
import { Filter } from './Filter';
import { Caption } from './Caption';
import { Sharing } from './Sharing';
import { Modal } from '@mui/material';

const Navbar = () => {
  
	const { modalActiveView } = useContext(contextElem);
	const { setModalActiveView } = useContext(contextElem);
   const { share } = useContext(contextElem);
	const { setShare } = useContext(contextElem);
  const { setImageURL}=useContext(contextElem);
  const { setCaption}=useContext(contextElem);
  const {setImageFilter } = useContext(contextElem);
	const [open, handleOpen] = useState(false);


   const renderModal = () => {
		if (share) {
		  return <Sharing />;
		} else if (modalActiveView === 0) {
		  return <Create />;
		} else if (modalActiveView === 1) {
		  return <Crop />;
		} else if (modalActiveView === 2) {
		  return <Filter />;
		} else if (modalActiveView === 3) {
		  return <Caption />;
		}
	  };

	return (
      <>
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<InstagramIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Instagram
					</Typography>
					<Button color="inherit" onClick={()=>handleOpen(true)}>Post</Button>
				</Toolbar>
			</AppBar>
		</Box>

       <Modal
			id="modal-overall"
			open={open}
			onClose={() => {
			  setModalActiveView(modalActiveView - 3)
			  handleOpen(false);
			  setShare(false);
			  setImageURL('');
			  setImageFilter('')
			  setCaption('');
			}}
		  >
			<div id="modal-div">{renderModal()}</div>
		  </Modal>
        </>
	);
};

export default Navbar;
