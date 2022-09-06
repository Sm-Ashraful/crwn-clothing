const Card = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <>
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body-container">
          <h1>{title}</h1>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};
export default Card;
