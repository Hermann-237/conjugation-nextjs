
export const EnglishMessages = {
    content:{
      toolbox:'Toolbox',
      toolboxLink:{
          model:'Models',
          groups:'Groups',
          auxiliaries:'Auxiliare',
          verb: 'English verb',
      }
    },
    description:{
        verbEnglish:(verb?:string | string[])=>`Conjugate the French verb ${verb} in all tenses: future, participle, present, indicative, subjunctive. Irregular verbs, auxiliary verbs, conjugation rules and conjugation models in French verb conjugation. Translate ${verb} in context, with examples of use  and definition.`,
        french:'Conjuguez un verbe français au futur, au présent, au participe avec Simplecyto Conjugator. Voir les modèles de conjugaison française pour les verbes réguliers et irréguliers, les auxiliaires être et avoir.',
        english:'Conjugate a French verb in the future, present, participle with Simplecyto Conjugator. See the French conjugation models for regular and irregular verbs, the auxiliaries to be and to have.'
    },
    title:{
        verbEnglish:(verb?:string | string[])=>`Conjugation ${verb} | Conjugate verb ${verb} French | Reverso Conjugator`,
        french:'Conjugaison française : verbe français, futur, participe, verbes irréguliers',
        english:'English conjugation: English verb, future, participle, irregular verbs',
    },
    key:{
        verbEnglish:(verb?:string | string[])=>`verbs, conjugation,${verb}, translate, synonyms`,
        french:'verbes, conjugaison, traduction, synonymes',
        english:'verbs, conjugation, translate, synonyms',
    },

}
