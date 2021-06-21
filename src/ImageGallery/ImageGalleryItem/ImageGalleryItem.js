export const ImageGalleryItem = ({pictures, onClick}) => {
    return (
        <>
        {pictures.map(({ webformatURL, id, tags, largeImageURL}, ind) => (
          <li key={id} className="ImageGalleryItem">
              <img src={webformatURL} data-url={largeImageURL} alt={tags} className="ImageGalleryItem-image" onClick={onClick} />
          </li>
        ))}
        </>
    )
}