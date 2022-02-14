import PropertyNearPlacesCard from '../property-near-places-card/property-near-places-card';

function PropertyNearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <PropertyNearPlacesCard/>
        <PropertyNearPlacesCard/>
        <PropertyNearPlacesCard/>
      </div>
    </section>
  );
}

export default PropertyNearPlaces;
