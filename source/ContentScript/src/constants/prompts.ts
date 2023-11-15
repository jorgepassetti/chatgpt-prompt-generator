export const Prompts = [
  {
    title: 'Create a personalized workout routine.',
    prompt:
      'Create a workout routine to achieve OBJECTIVE. To be performed at the PLACE, NUMBER OF DAYS PER WEEK days, MINUTES PER DAY each day. My goal is OBJECTIVE, weight WEIGHT, and height HEIGHT. Also, provide advice on how to stretch before each workout and tips on nutrition.',
    variables: [
      {
        key: 'OBJECTIVE',
        value: 'Gain muscles',
      },
      {
        key: 'PLACE',
        value: 'Gym',
      },
      {
        key: 'NUMBER OF DAYS PER WEEK',
        value: '5',
      },
      {
        key: 'MINUTES PER DAY',
        value: '30',
      },
      {
        key: 'WEIGHT',
        value: '76kg',
      },
      {
        key: 'HEIGHT',
        value: '1,70cm',
      },
    ],
  },
  {
    title: 'Act as an English Translator and Improver',
    prompt:
      'I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is the following. Before I start ask me what I want to translate or improve in writing.',
  },
  {
    title: 'Act as an Interviewer in the position: ',
    prompt:
      'I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the POSITION position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is "Hi"',
    variables: [
      {
        key: 'POSITION',
        value: 'Software Engineer',
      },
    ],
  },
  {
    title: 'Business Ideas List',
    prompt:
      'I want you to list business ideas for INDUSTRY. You should list 10 business ideas. Each business idea should have a name and a description. The ideas should be for the type of business BUSINESS TYPE and for the skills SKILLS.',
    variables: [
      {
        key: 'INDUSTRY',
        value: 'Mobile Applications',
      },
      {
        key: 'SKILLS',
        value: 'Describe your skills',
      },
      {
        key: 'BUSINESS TYPE',
        value: 'PHYSICAL OR DIGITAL',
      },
    ],
  },
  {
    title: 'Create a Sales Pitch',
    prompt:
      'Help me create an elevator pitch for this product PRODUCT/IDEA DESCRIPTION. My target audience is TARGET AUDIENCE, and my goal is GOAL.',
    variables: [
      {
        key: 'PRODUCT/IDEA DESCRIPTION',
        value: 'Describe your product or idea',
      },
      {
        key: 'TARGET AUDIENCE',
        value: 'Who is your target audience',
      },
      {
        key: 'GOAL',
        value: 'What is your goal',
      },
    ],
  },
  {
    title: 'Act as character from a source',
    prompt:
      'I want you to act like CHARACTER from SOURCE. I want you to respond and answer like CHARACTER using the tone, manner and vocabulary CHARACTER would use. Do not write any explanations. Only answer like CHARACTER. You must know all of the knowledge of CHARACTER. My first sentence is "Hi CHARACTER."',
    variables: [
      {
        key: 'CHARACTER',
        value: 'Sherlock Holmes',
      },
      {
        key: 'SOURCE',
        value: 'The sherlock home book',
      },
    ],
  },
];

export const PromptsSpanish = [
  {
    title: 'Crear una rutina de ejercicios personalizada',
    prompt:
      'Creame una rutina de ejercicios para ganar OBJETIVO. A realizar en el LUGAR, CANTIDAD DE DIAS A LA SEMANA dias MINUTOS POR DIA cada dia. Mi objetivo es OBJETIVO, peso PESO y mido ALTURA. También dame consejos de como estirar antes de cada entrenamiento y consejos sobre alimentación.',
    variables: [
      {
        key: 'OBJETIVO',
        value: 'Ganar masa muscular',
      },
      {
        key: 'LUGAR',
        value: 'Gimnasio',
      },
      {
        key: 'CANTIDAD DE DIAS A LA SEMANA',
        value: '5',
      },
      {
        key: 'MINUTOS POR DIA',
        value: '30',
      },
      {
        key: 'PESO',
        value: '76kg',
      },
      {
        key: 'ALTURA',
        value: '1,70cm',
      },
    ],
  },

  {
    title: 'Actúa como un traductor y mejorador de inglés',
    prompt:
      'Quiero que actúes como un traductor, corrector ortográfico y mejorador de inglés. Te hablaré en cualquier idioma y deberás detectar el idioma, traducirlo y responder con la versión corregida y mejorada de mi texto, en inglés. Quiero que reemplaces mis palabras y frases simples de nivel A0 con palabras y frases en inglés más hermosas, elegantes y de nivel superior. Mantén el mismo significado, pero hazlo más literario. Solo quiero que respondas la corrección, la mejora y nada más, no escribas explicaciones. Mi primera frase es la siguiente. Antes de empezar, pregúntame qué quiero traducir o mejorar por escrito.',
  },
  {
    title: 'Actúa como un entrevistador en el puesto de trabajo: ',
    prompt:
      'Quiero que actúes como un entrevistador. Yo seré el candidato y tú me harás las preguntas de la entrevista para el puesto de trabajo de PUESTO. Solo quiero que respondas como el entrevistador. No escribas toda la conversación de una vez. Solo quiero que me entrevistes. Hazme las preguntas y espera mis respuestas. No escribas explicaciones. Hazme las preguntas una por una como hace un entrevistador y espera mis respuestas. Mi primera frase es "Hola"',
    variables: [
      {
        key: 'PUESTO',
        value: 'Ingeniero de software',
      },
    ],
  },
  {
    title: 'Actúa como un personaje de un libro, serie o pelicula',
    prompt:
      'Quiero que actúes como el PERSONAJE de SERIE. Quiero que respondas y contestes como el PERSONAJE usando el tono, la manera y el vocabulario que usaría el PERSONAJE. No escribas explicaciones. Solo responde como el PERSONAJE. Deberás conocer todo el conocimiento del PERSONAJE. Mi primera frase es "Hola PERSONAJE."',
    variables: [
      {
        key: 'PERSONAJE',
        value: 'Sherlock Holmes',
      },
      {
        key: 'SERIE',
        value: 'El libro de Sherlock Holmes',
      },
    ],
  },
  {
    title: 'Lista Ideas de negocio',
    prompt:
      'Quiero que listes ideas de negocio para INDUSTRIA. Deberás listar 10 ideas de negocio. Cada idea de negocio deberá tener un nombre y una descripción. Las ideas deben ser para el tipo de negocio TIPO DE NEGOCIO y para las habilidades HABILIDADES.',
    variables: [
      {
        key: 'INDUSTRIA',
        value: 'Aplicaciones móviles',
      },
      {
        key: 'HABILIDADES',
        value: 'Describe tus habilidades',
      },
      {
        key: 'TIPO DE NEGOCIO',
        value: 'FISICO O DIGITAL',
      },
    ],
  },
  {
    title: 'Crea un Pitch de venta',
    prompt:
      'Ayúdame a crear un elevator pitch para este producto DESCRIPCION DEL PRODUCTO/IDEA. Mi público objetivo es PUBLICO OBJETIVO y mi objetivo es OBJETIVO.',
    variables: [
      {
        key: 'DESCRIPCION DEL PRODUCTO/IDEA',
        value: 'Describe tu producto o idea',
      },
      {
        key: 'PUBLICO OBJETIVO',
        value: 'Quien es tu publico objetivo',
      },
      {
        key: 'OBJETIVO',
        value: 'Cual es tu objetivo',
      },
    ],
  },
];
