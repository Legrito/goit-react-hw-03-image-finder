import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ pictures, onClick }) => {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem pictures={pictures} onClick={onClick} />
      </ul>
    )
}