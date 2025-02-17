import Footer from "../components/footer";

function Home() {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Profile Picture Centered */}
      <div className="flex justify-center">
        <img src="/assets/me.jpeg" className="w-70 h-90 rounded-lg" alt="Yvette" />
      </div>

      {/* Introduction Text */}
      <h1 className="text-3xl text-center px-4">
        Hey Lash Babes💖, my name is Yvette, owner and operator of Y M I So Lashy.
      </h1>
            
      <ul className="flex flex-col items-center space-y-8">
        {/* Lashes */}
        <li className="text-2xl font-semibold underline">LASHES</li>
        <img className="w-50 h-50 object-cover rounded-lg" src="/assets/lashes.jpeg" alt="Lashes" />

        {/* Eyebrows */}
        <li className="text-2xl font-semibold underline">EYEBROWS</li>
        <img className="w-50 h-50 object-cover rounded-lg" src="/assets/eyebrows.png" alt="Eyebrows" />

        {/* Teeth Whitening */}
        <li className="text-2xl font-semibold underline">TEETH WHITENING</li>
        <img className="w-50 h-50 object-cover rounded-lg" src="/assets/teethwhitening.jpg" alt="Teeth Whitening" />

        {/* Waxing */}
        <li className="text-2xl font-semibold underline">WAXING</li>
        <img className="w-50 h-50 object-cover rounded-lg" src="/assets/waxing.jpg" alt="Waxing" />

        {/* Make-up */}
        <li className="text-2xl font-semibold underline">MAKE-UP</li>
        <img className="w-50 h-50 object-cover rounded-lg" src="/assets/makeup.png" alt="Make-up" />
      </ul>

      <Footer />
    </div>
  );
}

export default Home;
