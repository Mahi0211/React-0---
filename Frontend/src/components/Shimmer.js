const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-wrapper">
            <div className="shimmer img-shimmer"></div>
            <div className="shimmer h3-shimmer"></div>
            <div className="shimmer p-shimmer"></div>
            <div className="shimmer p-shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
