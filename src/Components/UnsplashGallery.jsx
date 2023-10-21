import React, { useState, useEffect } from 'react';
import { searchPhotos } from '../ApiHandler/Api';
import SearchBar from './SearchBar';  
import ImageModal from './ImageModel';
 
  

export const ImageThumbnail = ({ imageUrl, userName, likes, onClick }) => {
  return (
    <div className="border rounded-md p-2 m-2 relative cursor-pointer" style={{ paddingBottom: '100%' }}>
      <img
        src={imageUrl}
        alt={userName}
        className="absolute top-0 left-0 w-full h-full object-cover"
        onClick={onClick} // Add the onClick handler to open the modal
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-70 text-black">
        <p className="text-sm font-medium">{userName}</p>
        <p className="text-xs text-gray-500">{likes} Likes</p>
      </div>
    </div>
  );
};


  const UnsplashList = ({ initialQuery }) => {
    const [query, setQuery] = useState(initialQuery);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
  
    const openModal = (photo) => {
      setSelectedPhoto(photo);
    };
  
    const closeModal = () => {
      setSelectedPhoto(null);
    };
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          const data = await searchPhotos(query, 1, 12);
          setPhotos(data.results);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching photos', error);
          setLoading(false);
        }
      };
  
      fetchPhotos();
    }, [query]);
  
    return (
      <div>
        <SearchBar onSearch={(newQuery) => setQuery(newQuery)} />
        <div className="container mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            photos.map((photo) => (
              <ImageThumbnail
                key={photo.id}
                imageUrl={photo.urls.regular}
                userName={photo.user.name}
                likes={photo.likes}
                onClick={() => openModal(photo)}
              />
            ))
          )}
        </div>
        <ImageModal
          isOpen={selectedPhoto !== null}
          closeModal={closeModal}
          imageUrl={selectedPhoto?.urls.regular}
          userName={selectedPhoto?.user.name}
          likes={selectedPhoto?.likes}
          socialLinks={selectedPhoto?.user.links.html} // Add the actual API data for social links
          otherDetails={selectedPhoto?.description} // Add the actual API data for other details
        />
      </div>
    );
  };
  
  export default UnsplashList;
  