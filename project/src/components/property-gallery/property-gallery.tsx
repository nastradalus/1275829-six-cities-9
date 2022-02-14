type PropertyGalleryProps = {
  propertyNumber: number
};

function PropertyGallery({propertyNumber}: PropertyGalleryProps): JSX.Element {
  return (
    <div className="property__gallery">
      {
        new Array(propertyNumber).fill(null).map((item, index) =>
          (
            <div key={index.toString()} className="property__image-wrapper">
              <img className="property__image" src="img/apartment-small-03.jpg" alt="Place image"/>
            </div>
          ),
        )
      }
    </div>
  );
}

export default PropertyGallery;
