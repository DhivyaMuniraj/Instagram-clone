import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Header/Main';


export const contextElem = createContext(null);
const ProviderElem = contextElem.Provider;

function Home() {
  const [imageURL, setImageURL] = useState('');
  const [caption, setCaption] = useState('');
  const [share, setShare] = useState(false);
  const [postArray, setPostArray] = useState([]);
  const [imageFilter, setImageFilter] = useState('');
  
  

  const [modalActiveView, setModalActiveView] = useState(0);

  const handleUpload = (e) => {
    setImageURL(URL.createObjectURL(e.target.files[0]));
    setModalActiveView(modalActiveView+1);
  };

 
  const sharePost = () => {
    setShare(!share);
    setPostArray((prev) => [...prev, { url: imageURL, caption: caption, filter: imageFilter }]);
  };
  

  return (
    <>
      <ProviderElem
        value={{
          imageURL,
          setImageURL,
          caption,
          setCaption,
          share,
          setShare,
          postArray,
          setPostArray,
          handleUpload,
          
          sharePost,
          modalActiveView,
          setModalActiveView,
          imageFilter,
          setImageFilter
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
           
          </Routes>
        </BrowserRouter>
      </ProviderElem>
    </>
  );
}

export default Home;