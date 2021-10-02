function Homepage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto p-6">
        <div className="flex justify-center space-x-16">
          <img className="w-80 rounded-lg shadow-xl" src="/images/sunset.jpg" />
          <img
            className="w-80 rounded-lg shadow-xl"
            src="/images/skyscrapper.jpg"
          />
        </div>
        <div className="mt-16 flex justify-center space-x-10">
          <div className="bg-red-500 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
            <img
              className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
              src="/images/sunset.jpg"
            />
            <img
              className="mix-blend-darken absolute inset-0 w-full h-full object-cover"
              src="/images/skyscrapper.jpg"
            />
          </div>
          <div className="bg-red-500 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
            <img
              className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
              src="/images/sunset.jpg"
            />
            <img
              className="mix-blend-lighten absolute inset-0 w-full h-full object-cover"
              src="/images/skyscrapper.jpg"
            />
          </div>
          <div className="bg-red-500 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
            <img
              className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
              src="/images/sunset.jpg"
            />
            <img
              className="mix-blend-hard-light absolute inset-0 w-full h-full object-cover"
              src="/images/skyscrapper.jpg"
            />
          </div>
        </div>
        {/* second row gradient blends  */}
        <div className="mt-16 flex justify-center space-x-10">
          <div className="bg-gradient-to-tr from-yellow-500 to-green-400 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
            <img
              className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
              src="/images/sunset.jpg"
            />
            <img
              className="mix-blend-darken absolute inset-0 w-full h-full object-cover"
              src="/images/skyscrapper.jpg"
            />
          </div>
          <div className="bg-gradient-to-tr from-red-500 to-green-400 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
            <img
              className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
              src="/images/sunset.jpg"
            />
            <img
              className="mix-blend-lighten absolute inset-0 w-full h-full object-cover"
              src="/images/skyscrapper.jpg"
            />
          </div>
          <div className="bg-gradient-to-tr from-blue-500 to-green-400 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
            <img
              className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
              src="/images/sunset.jpg"
            />
            <img
              className="mix-blend-hard-light absolute inset-0 w-full h-full object-cover"
              src="/images/skyscrapper.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
