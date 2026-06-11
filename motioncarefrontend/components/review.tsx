import styles from './review.module.css';

export const Review = () => {
    const reviews = [
        {
            name: "Amit Sharma",
            review:
                "Severe back pain ki wajah se chalna mushkil ho gaya tha. Dr. Kalimullah ke treatment aur physiotherapy sessions ke baad kaafi relief mila. Highly recommended.",
        },
        {
            name: "Priya Verma",
            review:
                "Home visit service bahut convenient rahi. Therapist time par aaye aur har session professional tareeke se conduct kiya. Recovery expected se fast hui.",
        },
        {
            name: "Rahul Singh",
            review:
                "Sports injury ke baad knee pain se pareshaan tha. Kuch hi sessions me movement aur flexibility me noticeable improvement dekhne ko mila.",
        },
        {
            name: "Neha Gupta",
            review:
                "Dry needling therapy ka experience bahut accha raha. Neck aur shoulder pain me significant relief mila. Staff bhi friendly aur supportive hai.",
        },
    ];
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
                    {
                        reviews.map((rev,index) => (
                            <div key={index} className="min-w-[220px] sm:min-w-[300px] max-w-[240px] sm:max-w-md bg-green-100 p-3 sm:p-6 rounded shadow">
                                <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
                                   {rev.review}
                                </p>
                                <h5 className="font-bold mt-2 sm:mt-4 text-xs sm:text-base text-red-400">{rev.name}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};