const Stepper = ({ currentStep = 1, stepRefs, cardRefs }) => {
  const steps = [
    {
      number: 1,
      title: "Contact Consultation",
      description:
        "Contact us via phone, email to schedule an initial consultation where we’ll explore your needs.",
    },
    {
      number: 2,
      title: "Customized Plan",
      description:
        "We’ll develop a personalized therapy plan based on your specific needs and goals to ensure the most support.",
    },
    {
      number: 3,
      title: "Therapy Sessions",
      description:
        "Contact us via phone, email to schedule an initial consultation where we’ll explore your needs.",
    },
    {
      number: 4,
      title: "Ongoing Support",
      description:
        "We’ll provide continuous support, regularly review your progress, and adjust the plan as needed to help you.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 overflow-x-auto overflow-hidden">
      <div className="relative flex items-center justify-between w-full max-w-5xl mt-8">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 z-0 transform -translate-y-1/2" />

        {steps.map((step, index) => (
          <div
            key={step.number}
            className="z-10 flex flex-col items-center w-1/4 md:w-1/5 lg:w-1/4"
          >
            <div
              ref={(el) => (stepRefs.current[index] = el)}
              className={`w-12 h-12 flex items-center justify-center rounded-full ${
                step.number <= currentStep
                  ? "bg-emerald-400 text-white"
                  : "bg-teal-100 text-black"
              } font-semibold text-lg shadow-md`}
            >
              {step.number}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 w-full max-w-5xl text-center">
        {steps.map((step, index) => (
          <div key={step.number} ref={(el) => (cardRefs.current[index] = el)}>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
