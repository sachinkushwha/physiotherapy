import styles from './review.module.css';

export const Review = () => {
  return (
    <div className="bg-gray-100 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 capitalize">
          Our Patient's Reviews
        </h1>
      </div>
      
      {/* Scrollable container */}
      <div className={`bg-white overflow-x-auto ${styles.noscrollbar}`}>
        <div className="flex gap-3 sm:gap-6 px-2 sm:px-4 w-max">
          {/* Each Review */}
          <div className="min-w-[220px] sm:min-w-[300px] max-w-[240px] sm:max-w-md bg-green-100 p-3 sm:p-6 rounded shadow">
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis
              dolore recusandae tempora id dignissimos."
            </p>
            <h5 className="font-bold mt-2 sm:mt-4 text-xs sm:text-base">Dr. Kalimullah</h5>
          </div>

          <div className="min-w-[220px] sm:min-w-[300px] max-w-[240px] sm:max-w-md bg-green-100 p-3 sm:p-6 rounded shadow">
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, nostrum!"
            </p>
            <h5 className="font-bold mt-2 sm:mt-4 text-xs sm:text-base">Er. Sachin</h5>
          </div>

          <div className="min-w-[220px] sm:min-w-[300px] max-w-[240px] sm:max-w-md bg-green-100 p-3 sm:p-6 rounded shadow">
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, nostrum!"
            </p>
            <h5 className="font-bold mt-2 sm:mt-4 text-xs sm:text-base">Er. Rahul</h5>
          </div>

          <div className="min-w-[220px] sm:min-w-[300px] max-w-[240px] sm:max-w-md bg-green-100 p-3 sm:p-6 rounded shadow">
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, nostrum!"
            </p>
            <h5 className="font-bold mt-2 sm:mt-4 text-xs sm:text-base">Dr. Neha</h5>
          </div>
        </div>
      </div>
    </div>
  );
};