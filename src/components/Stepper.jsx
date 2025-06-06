import React from 'react';

const Stepper = ({ currentStep = 1, stepRefs, cardRefs }) => {
  const steps = [
    {
      number: 1,
      title: 'Contato para Consulta',
      description:
        'Entre em contato conosco por telefone ou e-mail para agendar uma consulta inicial e explorarmos suas necessidades.',
    },
    {
      number: 2,
      title: 'Plano Personalizado',
      description:
        'Desenvolvemos um plano terapêutico personalizado, baseado em suas necessidades e objetivos, garantindo o melhor suporte.',
    },
    {
      number: 3,
      title: 'Sessões Terapêuticas',
      description:
        'Participe das sessões conforme o plano, com foco no seu desenvolvimento e bem-estar contínuo.',
    },
    {
      number: 4,
      title: 'Acompanhamento Contínuo',
      description:
        'Oferecemos suporte contínuo, revisamos seu progresso regularmente e ajustamos o plano conforme necessário.',
    },
  ];

  return (
    <div className='w-full flex flex-col items-center px-4 overflow-hidden'>
      <div className='relative flex justify-between items-center w-full max-w-3xl sm:max-w-4xl md:max-w-5xl mt-8'>
        <div
          className='absolute top-1/2 left-0 w-full h-1 bg-gray-200 z-0 transform -translate-y-1/2'
          aria-hidden='true'
        />

        {steps.map((step, index) => (
          <div
            key={step.number}
            className='z-10 flex flex-col items-center w-1/4'
          >
            <div
              ref={(el) => (stepRefs.current[index] = el)}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-md transition-colors ${
                step.number <= currentStep
                  ? 'bg-emerald-500 text-white'
                  : 'bg-teal-100 text-gray-800'
              }`}
              aria-label={`Etapa ${step.number}`}
            >
              {step.number}
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl text-center'>
        {steps.map((step, index) => (
          <div
            key={step.number}
            ref={(el) => (cardRefs.current[index] = el)}
            className='space-y-2'
          >
            <h3 className='text-base sm:text-lg md:text-xl font-semibold text-emerald-800'>
              {step.title}
            </h3>
            <p className='text-xs sm:text-sm md:text-base text-gray-600'>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
