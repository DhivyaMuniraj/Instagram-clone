//HOME
import React, { useContext, useEffect, useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import { contextElem } from '../Home';

import Navbar from './Navbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

//CARD IMPORTS
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	Avatar,
	IconButton,
} from '@mui/material';

const Main = () => {
	const { postArray } = useContext(contextElem);

	return (
		<>
			<Navbar />

			{postArray ? (
				<>
					{postArray.map((item, index) => {
						return (
							<Card sx={{ maxWidth: 425, margin: 'auto', marginTop: '40px',color:"black"}}>
								<CardHeader
									avatar={
										<Avatar sx={{ bgcolor: 'purple' }} aria-label="recipe">
											D
										</Avatar>
									}
									title="Dhivya"
								/>
								<CardMedia
									component="img"
									height="260"
									// width="100px"
									object-fit="contain"
									
									className={item.filter}
									image={item.url}
								/>
								<IconButton aria-label="add to favorites">
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label="share">
									<ModeCommentOutlinedIcon />
								</IconButton>
								<IconButton>
									<ShareIcon />
								</IconButton>
								<IconButton style={{ float: 'right' }}>
									<BookmarkBorderIcon />
								</IconButton>

								<CardContent>
									<Typography variant="body2" color="text.secondary">
										{item.caption}
									</Typography>
								</CardContent>
							</Card>
						);
					})}
				</>
			) : (
				<></>
			)}
		</>
	);
};
export default Main;
