const Cartilla = () => {
  const actors = [
    { id: 1,
      name: "Leonardo DiCaprio",
      image: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg",
    },
    {
      id: 2,
      name: "Emma Charlotte Duerre Watson",
      image: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/SYEWFAM4TTNHV6TQ6UUGPLGCYY.jpg?auth=35b00417192723e642655bab7ed258d8157372aa20f5d3be5854db66527014a2&height=1200&width=1200&smart=true&quality=80",
    },
    {
      id: 3,
      name: "Keanu Charles Reeves",
      image: "https://es.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg",
    }
  ];

  return (
    <div >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Actores Famosos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actors.map((actor) => (
            <div
              key={actor.id}
              className="bg-white p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden ">
                  <img
                    src={actor.image}
                    alt={actor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3>
                  {actor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartilla;
