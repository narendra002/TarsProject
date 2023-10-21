import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, closeModal, imageUrl, userName, likes, socialLinks, otherDetails }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          width: '80%',
          maxWidth: 'md:w-3/4 lg:w-2/4',
          background: 'white',
          rounded: 'lg',
          p: '8',
          boxShadow: 'md',
        },
      }}
    >
      <div className="modal-content">
        <img src={imageUrl} alt={userName} className="w-full rounded-lg" />
        <div className="modal-details mt-4 flex flex-col justify-center ">
          <p className="text-xl font-semibold">{userName}</p>
          <p className="text-gray-500 text-sm mb-4">{likes} Likes</p>
          <div className="text-blue-500 hover:underline">
            <a href={socialLinks} target="_blank" rel="noopener noreferrer">
              User's Social Profile
            </a>
          </div>
          <p className="text-sm mt-4">{otherDetails}</p>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
