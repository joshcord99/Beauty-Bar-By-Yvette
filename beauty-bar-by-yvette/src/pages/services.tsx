function Services() {
  return (
    <div className="container mx-auto p-6">
      {/* Lashes Section */}
      <h2 className="text-2xl font-bold my-4 text-center">Lashes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border-2 border-black-300 p-4 text-center">
          <img src="/assets/lashes.jpeg" alt="Lashes" className="w-10 h-10 mx-auto" />
          <h3 className="font-semibold">Classic</h3>
          <p>Duration: 2 hours</p>
          <p>Price: $130.00</p>
        </div>

        <div className="border-2 border-black-300 p-4 text-center">
          <h3 className="font-semibold">Classic Refill</h3>
          <p>Duration: 1 hour 30 minutes</p>
          <p>Price: $80.00</p>
        </div>

        <div className="border-2 border-black-300 p-4 text-center">
          <img src="/assets/lashes.jpeg" alt="Lashes" className="w-10 h-10 mx-auto" />
          <h3 className="font-semibold">Hybrid</h3>
          <p>Duration: 2 hours</p>
          <p>Price: $140.00</p>
        </div>

        <div className="border-2 border-black-300 p-4 text-center">
          <img src="/assets/lashes.jpeg" alt="Lashes" className="w-10 h-10 mx-auto" />
          <h3 className="font-semibold">Hybrid Refill</h3>
          <p>Duration: 1 hour 30 minutes</p>
          <p>Price: $90.00</p>
        </div>
      </div>

      {/* Brows Section */}
      <h2 className="text-2xl font-bold my-4 text-center">Brows</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border-2 border-black-300 p-4 text-center">
          <img src="/assets/eyebrows.png" alt="Eyebrows" className="w-10 h-10 mx-auto" />
          <h3 className="font-semibold">Ombré Powder Brows</h3>
          <p>Duration: 3 hours</p>
          <p>Price: $250.00</p>
        </div>

        <div className="border-2 border-black-300 p-4 text-center">
          <img src="/assets/eyebrows.png" alt="Eyebrows" className="w-10 h-10 mx-auto" />
          <h3 className="font-semibold">Eyebrow Wax</h3>
          <p>Duration: 20 minutes</p>
          <p>Price: $15.00</p>
        </div>
      </div>

      {/* Facials Section */}
      <h2 className="text-2xl font-bold my-4 text-center">Facials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border-2 border-black-300 p-4 text-center">
          <h3 className="font-semibold">60 Min Customized Facial</h3>
          <p>Duration: 1 hour 15 minutes</p>
          <p>Price: $50.00</p>
        </div>
      </div>

      {/* Makeup Section */}
      <h2 className="text-2xl font-bold my-4 text-center">Makeup</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border-2 border-black-300 p-4 text-center">
          <img src="/assets/makeup.png" alt="Makeup" className="w-10 h-10 mx-auto" />
          <h3 className="font-semibold">Holiday Glam</h3>
          <p>Duration: 1 hour 15 minutes</p>
          <p>Price: $65.00</p>
        </div>

        <div className="border-2 border-black-300 p-4 text-center">
          <img src="/assets/makeup.png" alt="Makeup" className="w-10 h-10 mx-auto" />
          <h3 className="font-semibold">Bridal Glam</h3>
          <p>Duration: 3 hours</p>
          <p>Price: $150.00</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
