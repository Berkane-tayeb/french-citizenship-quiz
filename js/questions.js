const questions = [
    // Thème 1: Principes et valeurs de la République française (20 questions)
    {
        id: 1,
        question: "Quelle est la devise de la République française ?",
        options: [
            "Liberté, Égalité, Propriété",
            "Liberté, Égalité, Fraternité",
            "Liberté, Justice, Fraternité",
            "Fraternité, Justice, Solidarité"
        ],
        correctAnswer: 1,
        explanation: "La devise de la République française est 'Liberté, Égalité, Fraternité'. Elle apparaît dans la Constitution de 1958."
    },
    {
        id: 2,
        question: "Quel principe garantit que l'État ne favorise aucune religion et assure la liberté de conscience ?",
        options: [
            "La démocratie",
            "La laïcité",
            "La souveraineté nationale",
            "L'universalisme"
        ],
        correctAnswer: 1,
        explanation: "La laïcité est un principe constitutionnel qui assure la neutralité de l'État et la liberté de culte."
    },
    {
        id: 3,
        question: "Quel est l'hymne national de la France ?",
        options: [
            "La Marseillaise",
            "Le Chant des partisans",
            "L'Internationale",
            "La Marche lorraine"
        ],
        correctAnswer: 0,
        explanation: "L'hymne national de la France est 'La Marseillaise', composée par Rouget de Lisle en 1792."
    },
    {
        id: 4,
        question: "Quelle est la date de la fête nationale française et que commémore-t-elle ?",
        options: [
            "8 mai - fin de la Seconde Guerre mondiale",
            "14 juillet - prise de la Bastille (1789)",
            "11 novembre - armistice de 1918",
            "1er mai - Fête du Travail"
        ],
        correctAnswer: 1,
        explanation: "La fête nationale a lieu le 14 juillet, en commémoration de la prise de la Bastille en 1789 et de la Fête de la Fédération en 1790."
    },
    {
        id: 5,
        question: "Selon la Constitution, la France est une République...",
        options: [
            "indivisible, laïque, démocratique et sociale",
            "fédérale, laïque et parlementaire",
            "indivisible, monarchique et démocratique",
            "laïque, fédérale et présidentielle"
        ],
        correctAnswer: 0,
        explanation: "L'article 1er de la Constitution dispose : 'La France est une République indivisible, laïque, démocratique et sociale.'"
    },
    {
        id: 6,
        question: "Le drapeau français est composé de trois bandes verticales de quelles couleurs (de la hampe vers l'extérieur) ?",
        options: [
            "Rouge, blanc, bleu",
            "Bleu, blanc, rouge",
            "Blanc, bleu, rouge",
            "Bleu, rouge, blanc"
        ],
        correctAnswer: 1,
        explanation: "Le drapeau tricolore est bleu (côté hampe), blanc, rouge. Il date de la Révolution française."
    },
    {
        id: 7,
        question: "Mise en situation : Vous êtes témoin d'une discrimination raciale à l'embauche dans une petite entreprise. Quel principe républicain est bafoué ?",
        options: [
            "Le principe de fraternité",
            "Le principe d'égalité",
            "Le principe de liberté économique",
            "Le principe de propriété"
        ],
        correctAnswer: 1,
        explanation: "Le principe d'égalité, fondement de la République, interdit toute discrimination. La discrimination à l'embauche est un délit pénal."
    },
    {
        id: 8,
        question: "La Déclaration des Droits de l'Homme et du Citoyen a été adoptée en...",
        options: [
            "1689",
            "1789",
            "1889",
            "1948"
        ],
        correctAnswer: 1,
        explanation: "Elle a été adoptée le 26 août 1789 par l'Assemblée nationale constituante, durant la Révolution française."
    },
    {
        id: 9,
        question: "Le principe de laïcité implique notamment que :",
        options: [
            "Les religions sont interdites dans l'espace public",
            "Les fonctionnaires doivent cacher leurs convictions religieuses",
            "L'État ne finance aucun culte et ne salarie aucun ministre du culte",
            "L'enseignement religieux est interdit dans les écoles privées"
        ],
        correctAnswer: 2,
        explanation: "La loi de 1905 sur la séparation des Églises et de l'État pose le principe de non-financement des cultes par l'État."
    },
    {
        id: 10,
        question: "Mise en situation : Votre commune veut installer une crèche de Noël dans la mairie. En tant que conseiller municipal, vous rappelez le principe de laïcité. Que proposez-vous ?",
        options: [
            "L'installer dans un coin discret",
            "Organiser un référendum local",
            "Ne pas l'installer dans un bâtiment public",
            "L'installer en y associant des symboles d'autres religions"
        ],
        correctAnswer: 2,
        explanation: "La laïcité impose la neutralité des bâtiments publics. L'installation d'un symbole religieux comme une crèche est contraire à ce principe, sauf dans un contexte culturel ou historique spécifique (arrêt du Conseil d'État)."
    },
    {
        id: 11,
        question: "Quelle phrase de la Constitution française affirme le principe d'égalité ?",
        options: [
            "\"La France assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion.\"",
            "\"La France garantit le droit à la différence.\"",
            "\"La France privilégie l'égalité des chances.\"",
            "\"La France est une République sociale.\""
        ],
        correctAnswer: 0,
        explanation: "C'est la formulation exacte du premier alinéa de l'article 1er de la Constitution de 1958."
    },
    {
        id: 12,
        question: "La liberté d'expression est :",
        options: [
            "Absolue et sans limite",
            "Un principe fondamental garanti par la loi, mais qui peut être limité pour respecter l'ordre public ou les droits d'autrui",
            "Réservée aux journalistes",
            "Interdite sur internet"
        ],
        correctAnswer: 1,
        explanation: "La liberté d'expression est un droit fondamental (art. 11 DDHC) mais n'est pas absolue. Elle trouve ses limites dans la lutte contre les discours de haine, la diffamation, l'incitation à la violence, etc."
    },
    {
        id: 13,
        question: "Quel symbole, bien que non officiel, est souvent associé à la France ?",
        options: [
            "La fleur de lys",
            "Le coq gaulois",
            "L'aigle impérial",
            "L'ours"
        ],
        correctAnswer: 1,
        explanation: "Le coq gaulois est un emblème traditionnel souvent utilisé dans le sport ou comme symbole informel, en référence aux origines gauloises."
    },
    {
        id: 14,
        question: "La notion de 'souveraineté nationale' signifie que :",
        options: [
            "Le Président a tous les pouvoirs",
            "Le peuple est la source du pouvoir politique, qu'il exerce par ses représentants",
            "La France est indépendante des autres États",
            "Le Parlement est supérieur au gouvernement"
        ],
        correctAnswer: 1,
        explanation: "Énoncée à l'article 3 de la Constitution, la souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum."
    },
    {
        id: 15,
        question: "Mise en situation : Une association propose des cours de français gratuits le dimanche matin dans une église. En tant que bénévole laïque, vous y participez. Cela est-il conforme à la laïcité ?",
        options: [
            "Non, car toute activité dans un lieu de culte est interdite",
            "Oui, car l'activité est sociale et non religieuse, et le lieu est mis à disposition",
            "Non, car le dimanche matin est réservé au culte",
            "Oui, mais seulement si un prêtre est présent"
        ],
        correctAnswer: 1,
        explanation: "La laïcité n'interdit pas l'utilisation temporaire d'un lieu de culte pour une activité d'intérêt général et non confessionnelle. C'est l'usage qui compte."
    },
    {
        id: 16,
        question: "La fraternité, troisième terme de la devise, implique notamment :",
        options: [
            "La solidarité entre les citoyens",
            "L'obligation d'aimer son prochain",
            "L'interdiction des conflits sociaux",
            "La préférence nationale"
        ],
        correctAnswer: 0,
        explanation: "La fraternité est un principe qui invite à la solidarité et au vivre-ensemble. Elle a été inscrite dans la Constitution en 2018 et fonde les politiques sociales."
    },
    {
        id: 17,
        question: "Le Préambule de la Constitution de 1946 réaffirme des principes économiques et sociaux comme :",
        options: [
            "Le droit de grève, la liberté syndicale, le droit à la santé",
            "Le droit au travail, la liberté d'entreprendre, le droit de propriété",
            "La priorité donnée à l'industrie nationale",
            "L'interdiction des monopoles privés"
        ],
        correctAnswer: 0,
        explanation: "Adopté après la Seconde Guerre mondiale, le Préambule de 1946 élargit les droits en y ajoutant des droits sociaux (droit de grève, à la santé, à l'éducation, etc.)."
    },
    {
        id: 18,
        question: "Quelle est la capitale de la France ?",
        options: [
            "Lyon",
            "Marseille",
            "Paris",
            "Strasbourg"
        ],
        correctAnswer: 2,
        explanation: "Paris est la capitale de la France. C'est le siège du gouvernement, du Parlement et de la Présidence."
    },
    {
        id: 19,
        question: "Mise en situation : Un candidat à une élection locale promet de réserver les logements sociaux de la commune aux personnes nées en France. Ce projet est :",
        options: [
            "Conforme au principe d'égalité",
            "Une mesure de fraternité",
            "Contraire aux principes républicains (discriminatoire)",
            "Une compétence légale du maire"
        ],
        correctAnswer: 2,
        explanation: "C'est une discrimination fondée sur l'origine, interdite par la Constitution et le code pénal. L'accès aux logements sociaux se fait selon des critères sociaux, pas ethniques ou nationaux."
    },
    {
        id: 20,
        question: "La liberté de la presse est garantie en France par :",
        options: [
            "Une loi de 1881",
            "Le Code civil",
            "Une directive européenne",
            "Le règlement intérieur de l'Assemblée nationale"
        ],
        correctAnswer: 0,
        explanation: "La loi du 29 juillet 1881 sur la liberté de la presse est le texte fondateur qui encadre et protège cette liberté essentielle en démocratie."
    },

    // Thème 2: Système institutionnel et politique (20 questions)
    {
        id: 21,
        question: "Qui est le chef de l'État en France ?",
        options: [
            "Le Premier ministre",
            "Le Président de la République",
            "Le Président de l'Assemblée nationale",
            "Le Président du Sénat"
        ],
        correctAnswer: 1,
        explanation: "Le Président de la République est le chef de l'État. Il incarne l'autorité de l'État et veille au respect de la Constitution."
    },
    {
        id: 22,
        question: "Quel est le mode de scrutin pour l'élection du Président de la République ?",
        options: [
            "Suffrage universel indirect par un collège de grands électeurs",
            "Suffrage universel direct à deux tours",
            "Suffrage censitaire",
            "Suffrage proportionnel"
        ],
        correctAnswer: 1,
        explanation: "Le Président est élu au suffrage universel direct pour 5 ans. Si aucun candidat n'obtient la majorité absolue au 1er tour, un second tour est organisé entre les deux candidats arrivés en tête."
    },
    {
        id: 23,
        question: "Quelle est la durée du mandat présidentiel (quinquennat) ?",
        options: [
            "4 ans",
            "5 ans",
            "6 ans",
            "7 ans"
        ],
        correctAnswer: 1,
        explanation: "Le mandat est de 5 ans depuis la réforme constitutionnelle de 2000 (référendum) et son application à partir de 2002."
    },
    {
        id: 24,
        question: "Qui nomme le Premier ministre ?",
        options: [
            "Le Président de la République",
            "L'Assemblée nationale",
            "Le Sénat",
            "Le Conseil constitutionnel"
        ],
        correctAnswer: 0,
        explanation: "Le Président de la République nomme le Premier ministre (article 8 de la Constitution). Il met fin à ses fonctions sur la présentation par celui-ci de la démission du gouvernement."
    },
    {
        id: 25,
        question: "Le Parlement français est composé de :",
        options: [
            "L'Assemblée nationale et le Conseil économique, social et environnemental",
            "L'Assemblée nationale et le Sénat",
            "Le Sénat et le Conseil constitutionnel",
            "Le Congrès et le Sénat"
        ],
        correctAnswer: 1,
        explanation: "Le Parlement est bicaméral : l'Assemblée nationale (577 députés) et le Sénat (348 sénateurs). Ils votent la loi et contrôlent l'action du gouvernement."
    },
    {
        id: 26,
        question: "Mise en situation : Le gouvernement propose une loi sur l'énergie. Après vote à l'Assemblée, le Sénat la modifie. Que se passe-t-il ensuite ?",
        options: [
            "La loi est adoptée dans sa version sénatoriale",
            "La loi est abandonnée",
            "Un commission mixte paritaire tente de trouver un texte commun",
            "Le Président tranche"
        ],
        correctAnswer: 2,
        explanation: "En cas de désaccord (navette), une commission mixte paritaire (7 députés, 7 sénateurs) est formée. Si elle échoue, l'Assemblée nationale a le dernier mot."
    },
    {
        id: 27,
        question: "Qui peut dissoudre l'Assemblée nationale ?",
        options: [
            "Le Premier ministre",
            "Le Président de la République",
            "Le Président du Sénat",
            "Le Conseil constitutionnel"
        ],
        correctAnswer: 1,
        explanation: "Le Président de la République peut dissoudre l'Assemblée nationale (article 12 de la Constitution), sauf en certaines périodes (crise présidentielle, etc.)."
    },
    {
        id: 28,
        question: "Quelle institution est chargée de contrôler la constitutionnalité des lois ?",
        options: [
            "La Cour de cassation",
            "Le Conseil d'État",
            "Le Conseil constitutionnel",
            "La Cour des comptes"
        ],
        correctAnswer: 2,
        explanation: "Le Conseil constitutionnel vérifie que les lois respectent la Constitution, avant leur promulgation (saisine par 60 députés ou sénateurs, ou par le Président, Premier ministre, président d'une assemblée)."
    },
    {
        id: 29,
        question: "Quel est le rôle principal du Conseil économique, social et environnemental (CESE) ?",
        options: [
            "Rendre des arrêts judiciaires",
            "Conseiller le gouvernement et le Parlement sur les projets de loi économiques et sociaux",
            "Contrôler les finances publiques",
            "Organiser les élections"
        ],
        correctAnswer: 1,
        explanation: "Le CESE est une assemblée consultative qui représente la société civile (syndicats, associations, entreprises) et émet des avis sur les projets de loi."
    },
    {
        id: 30,
        question: "Mise en situation : Vous voulez contester une amende pour stationnement que vous estimez injustifiée. Quelle juridiction est compétente en premier ressort ?",
        options: [
            "Le tribunal judiciaire",
            "Le tribunal administratif",
            "Le tribunal de police",
            "La cour d'appel"
        ],
        correctAnswer: 2,
        explanation: "Les contraventions (comme le stationnement) sont jugées par le tribunal de police. C'est une juridiction pénale."
    },
    {
        id: 31,
        question: "La France est divisée en combien de régions (depuis 2016) ?",
        options: [
            "12",
            "13",
            "18",
            "22"
        ],
        correctAnswer: 1,
        explanation: "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions (par exemple, Grand Est, Auvergne-Rhône-Alpes)."
    },
    {
        id: 32,
        question: "Qui est le chef de l'exécutif d'une commune ?",
        options: [
            "Le préfet",
            "Le président du conseil départemental",
            "Le maire",
            "Le sous-préfet"
        ],
        correctAnswer: 2,
        explanation: "Le maire est élu par le conseil municipal. Il exerce des pouvoirs exécutifs locaux (police municipale, état civil, écoles) et représente l'État pour certaines fonctions (mariage, élections)."
    },
    {
        id: 33,
        question: "Le représentant de l'État dans le département est :",
        options: [
            "Le président du conseil départemental",
            "Le député",
            "Le préfet",
            "Le procureur de la République"
        ],
        correctAnswer: 2,
        explanation: "Le préfet, nommé en Conseil des ministres, dirige les services de l'État dans le département, assure le respect des lois et la sécurité publique."
    },
    {
        id: 34,
        question: "La principale source du droit en France est :",
        options: [
            "La jurisprudence",
            "La loi",
            "La doctrine",
            "La coutume"
        ],
        correctAnswer: 1,
        explanation: "Dans le système de droit civil (droit romano-germanique), la loi, votée par le Parlement, est la source principale du droit."
    },
    {
        id: 35,
        question: "Mise en situation : Votre association veut organiser une manifestation. Qui doit-vous en informer préalablement ?",
        options: [
            "Le tribunal",
            "Le préfet ou le maire",
            "Le président de la République",
            "Le ministère de l'Intérieur"
        ],
        correctAnswer: 1,
        explanation: "Une déclaration en préfecture ou en mairie (pour une manifestation sur la voie publique) est obligatoire 3 à 15 jours avant. C'est une formalité, pas une autorisation, sauf motif d'ordre public."
    },
    {
        id: 36,
        question: "Quelle instance peut être saisie par un citoyen estimant que ses droits fondamentaux n'ont pas été respectés par une administration ?",
        options: [
            "Le Médiateur de la République (Défenseur des droits)",
            "Le Conseil constitutionnel",
            "Le Président du Sénat",
            "La Cour des comptes"
        ],
        correctAnswer: 0,
        explanation: "Le Défenseur des droits (qui inclut le Médiateur) est une autorité indépendante qui peut être saisie gratuitement pour toute réclamation concernant les droits et libertés face à une administration."
    },
    {
        id: 37,
        question: "Combien de membres compte le Conseil constitutionnel (hors membres de droit) ?",
        options: [
            "7",
            "9",
            "12",
            "15"
        ],
        correctAnswer: 1,
        explanation: "Le Conseil constitutionnel est composé de 9 membres nommés pour 9 ans (3 par le Président, 3 par le président de l'Assemblée, 3 par le président du Sénat), renouvelés par tiers tous les 3 ans."
    },
    {
        id: 38,
        question: "La 'motion de censure' est une procédure qui permet :",
        options: [
            "De destituer le Président de la République",
            "De forcer la démission du gouvernement",
            "De dissoudre le Sénat",
            "D'annuler une loi"
        ],
        correctAnswer: 1,
        explanation: "L'Assemblée nationale peut, en votant une motion de censure à la majorité absolue de ses membres, renverser le gouvernement. C'est un instrument du régime parlementaire."
    },
    {
        id: 39,
        question: "Mise en situation : Un décret d'expulsion d'un étranger vous semble contraire au droit au respect de la vie familiale. Quelle juridiction peut l'annuler ?",
        options: [
            "Le tribunal judiciaire",
            "Le tribunal administratif",
            "Le Conseil des prud'hommes",
            "La Cour de cassation"
        ],
        correctAnswer: 1,
        explanation: "Un décret est un acte administratif. Le contentieux administratif (annulation pour excès de pouvoir) relève des tribunaux administratifs, puis des cours administratives d'appel et du Conseil d'État."
    },
    {
        id: 40,
        question: "Le principe de séparation des pouvoirs distingue :",
        options: [
            "Pouvoir national, régional, local",
            "Pouvoir exécutif, législatif, judiciaire",
            "Pouvoir politique, économique, médiatique",
            "Pouvoir présidentiel, gouvernemental, parlementaire"
        ],
        correctAnswer: 1,
        explanation: "Théorisé par Montesquieu, ce principe fondamental vise à éviter la concentration des pouvoirs et à garantir la liberté. En France, ils sont séparés mais collaboratifs."
    },

    // Thème 3: Droits et devoirs (20 questions)
    {
        id: 41,
        question: "Quel est un devoir du citoyen français ?",
        options: [
            "Avoir un emploi",
            "Se marier",
            "Voter",
            "Respecter la loi"
        ],
        correctAnswer: 3,
        explanation: "Le premier devoir du citoyen est de respecter la loi. Le vote est un droit, pas une obligation (sauf pour les élections sénatoriales pour les grands électeurs)."
    },
    {
        id: 42,
        question: "À quel âge devient-on majeur et pleinement responsable pénalement en France ?",
        options: [
            "16 ans",
            "18 ans",
            "21 ans",
            "25 ans"
        ],
        correctAnswer: 1,
        explanation: "La majorité civile et pénale est fixée à 18 ans. Avant cet âge, les mineurs relèvent de juridictions et de règles spécifiques."
    },
    {
        id: 43,
        question: "Le service national universel (SNU) concerne :",
        options: [
            "Uniquement les jeunes hommes",
            "Tous les jeunes Français de 16 à 25 ans, sur la base du volontariat puis deviendra obligatoire",
            "Les nouveaux immigrants",
            "Les retraités"
        ],
        correctAnswer: 1,
        explanation: "Le SNU est ouvert à tous les jeunes Français de 16 à 25 ans. Il commence par une phase de volontariat et a pour objectif de devenir obligatoire à terme."
    },
    {
        id: 44,
        question: "La Déclaration des Droits de l'Homme et du Citoyen de 1789 énonce que 'Les hommes naissent et demeurent libres et égaux en...'",
        options: [
            "Devoir",
            "Dignité",
            "Droits",
            "Chances"
        ],
        correctAnswer: 2,
        explanation: "Article 1 : 'Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune.'"
    },
    {
        id: 45,
        question: "Mise en situation : Votre voisin fait des travaux très bruyants tous les soirs jusqu'à minuit, ce qui est interdit par le règlement de copropriété. Que faites-vous en premier lieu ?",
        options: [
            "Vous appelez la police immédiatement",
            "Vous engagez un avocat pour porter plainte",
            "Vous lui en parlez directement pour trouver une solution amiable",
            "Vous écrivez au maire"
        ],
        correctAnswer: 2,
        explanation: "La recherche d'une solution amiable est toujours conseillée en premier. Si cela échoue, vous pouvez saisir le conciliateur de justice, le syndic de copropriété ou, en dernier recours, la justice."
    },
    {
        id: 46,
        question: "Quelle autorité administrative peut percevoir les impôts ?",
        options: [
            "La mairie",
            "La Direction générale des Finances publiques (DGFiP)",
            "Le Conseil régional",
            "La CAF"
        ],
        correctAnswer: 1,
        explanation: "Les impôts (sur le revenu, foncier, TVA...) sont perçus par les services de la DGFiP, dépendant du ministère de l'Économie et des Finances. Payer ses impôts est un devoir constitutionnel."
    },
    {
        id: 47,
        question: "Le droit de vote pour les femmes en France a été accordé en :",
        options: [
            "1848",
            "1905",
            "1944",
            "1965"
        ],
        correctAnswer: 2,
        explanation: "Les femmes ont obtenu le droit de vote et d'éligibilité par l'ordonnance du 21 avril 1944, sous le gouvernement provisoire du Général de Gaulle. Elles votent pour la première fois en 1945."
    },
    {
        id: 48,
        question: "La protection sociale en France (santé, retraite, famille) repose principalement sur :",
        options: [
            "La charité privée",
            "Le système de sécurité sociale",
            "Les mutuelles d'entreprise uniquement",
            "Les collectivités locales"
        ],
        correctAnswer: 1,
        explanation: "La Sécurité sociale, créée en 1945, est le pilier de la protection sociale. Elle est financée par les cotisations sociales et les impôts, et gérée par les partenaires sociaux."
    },
    {
        id: 49,
        question: "Que garantit le droit de propriété ?",
        options: [
            "Le droit de posséder des biens sans aucune limite",
            "Un droit inviolable et sacré, selon la DDHC, qui peut être limité par l'utilité publique",
            "La gratuité du logement pour tous",
            "L'interdiction de l'héritage"
        ],
        correctAnswer: 1,
        explanation: "Article 17 de la DDHC : 'La propriété étant un droit inviolable et sacré, nul ne peut en être privé, si ce n'est lorsque la nécessité publique, légalement constatée, l'exige évidemment...' (ex : expropriation pour cause d'utilité publique)."
    },
    {
        id: 50,
        question: "Mise en situation : Vous êtes témoin d'un accident de la route avec blessés. Quel est votre devoir ?",
        options: [
            "Partir pour ne pas être impliqué",
            "Alerter les secours (15, 18, 112) et porter assistance dans la mesure de ses moyens",
            "Prendre des photos pour les réseaux sociaux",
            "Attendre qu'un médecin arrive"
        ],
        correctAnswer: 1,
        explanation: "C'est le 'devoir d'assistance à personne en péril' (article 223-6 du code pénal). Ne pas le faire est puni par la loi. Alerter est la première chose à faire."
    },
    {
        id: 51,
        question: "Le droit de grève est :",
        options: [
            "Interdit pour les fonctionnaires",
            "Un droit constitutionnel pour tous les travailleurs",
            "Réservé aux syndicats",
            "Soumis à l'autorisation préalable de l'employeur"
        ],
        correctAnswer: 1,
        explanation: "Reconnu par le Préambule de la Constitution de 1946, c'est un droit fondamental. Il s'exerce dans le cadre de la loi (préavis pour le secteur public, par exemple)."
    },
    {
        id: 52,
        question: "Les parents ont, selon la loi, 'l'autorité parentale' qui est :",
        options: [
            "Un ensemble de droits et de devoirs pour protéger l'enfant",
            "Le droit de choisir l'école privée uniquement",
            "Le devoir de subvenir financièrement aux besoins de l'enfant jusqu'à ses 25 ans",
            "Un pouvoir discrétionnaire sans contrôle"
        ],
        correctAnswer: 0,
        explanation: "L'autorité parentale est exercée en commun par les deux parents, dans l'intérêt de l'enfant. Elle inclut éducation, santé, sécurité, et respect de l'enfant."
    },
    {
        id: 53,
        question: "Le principe de non-rétroactivité de la loi pénale signifie que :",
        options: [
            "On ne peut pas juger des faits anciens",
            "On ne peut être condamné en vertu d'une loi qui n'existait pas au moment des faits",
            "Les peines ne peuvent jamais être modifiées",
            "Les lois sont toujours appliquées immédiatement"
        ],
        correctAnswer: 1,
        explanation: "C'est un principe fondamental (article 8 DDHC, code pénal) : 'Nul ne peut être puni qu'en vertu d'une loi établie et promulguée antérieurement au délit...'. Il protège les citoyens contre l'arbitraire."
    },
    {
        id: 54,
        question: "Mise en situation : Votre employeur vous licencie car vous avez refusé de travailler le dimanche, jour de votre pratique religieuse. Ce licenciement est :",
        options: [
            "Licite, car le travail prime sur le culte",
            "Abusif, car il constitue une discrimination fondée sur la religion",
            "Licite seulement si c'est écrit dans votre contrat",
            "Abusif seulement si vous êtes cadre"
        ],
        correctAnswer: 1,
        explanation: "C'est une discrimination religieuse interdite par le code du travail. L'employeur doit rechercher un aménagement (article L. 1132-1). Vous pouvez saisir le Conseil de prud'hommes."
    },
    {
        id: 55,
        question: "Quel impôt direct est payé par tous les foyers fiscaux en fonction de leurs revenus ?",
        options: [
            "La TVA (Taxe sur la Valeur Ajoutée)",
            "L'impôt sur le revenu",
            "La taxe d'habitation (supprimée pour la résidence principale)",
            "La taxe foncière"
        ],
        correctAnswer: 1,
        explanation: "L'impôt sur le revenu est un impôt progressif payé par les ménages dont les revenus dépassent un certain seuil. C'est une contribution à la solidarité nationale."
    },
    {
        id: 56,
        question: "Le droit à l'éducation est garanti :",
        options: [
            "Jusqu'à 16 ans (obligation d'instruction)",
            "Uniquement dans les écoles publiques",
            "Seulement pour les enfants français",
            "Jusqu'au baccalauréat"
        ],
        correctAnswer: 0,
        explanation: "L'instruction est obligatoire pour tous les enfants de 3 à 16 ans (loi de 2019 abaissant l'âge à 3 ans). Elle peut être donnée à l'école publique, privée ou en famille."
    },
    {
        id: 57,
        question: "La liberté syndicale permet :",
        options: [
            "De faire grève sans préavis",
            "De créer ou d'adhérer librement à un syndicat",
            "D'imposer un syndicat dans chaque entreprise",
            "De remplacer les élections professionnelles"
        ],
        correctAnswer: 1,
        explanation: "C'est un droit constitutionnel (Préambule 1946). Tout salarié peut librement adhérer au syndicat de son choix ou ne pas adhérer, sans crainte de représailles."
    },
    {
        id: 58,
        question: "Mise en situation : Vous achetez un ordinateur en ligne. Il est défectueux. Quel est votre principal recours ?",
        options: [
            "Rien, les achats en ligne sont sans garantie",
            "Exercer votre droit de rétractation sous 14 jours",
            "Faire jouer la garantie légale de conformité (2 ans)",
            "Porter plainte contre le site"
        ],
        correctAnswer: 2,
        explanation: "Le vendeur est tenu à une garantie légale de conformité de 2 ans pour tout bien de consommation. Il doit réparer, remplacer ou rembourser le produit défectueux."
    },
    {
        id: 59,
        question: "Le droit au respect de la vie privée est protégé par :",
        options: [
            "Le Code civil et la Convention européenne des droits de l'homme",
            "Le code de la route uniquement",
            "La loi sur la presse de 1881",
            "Le règlement intérieur des entreprises"
        ],
        correctAnswer: 0,
        explanation: "C'est un droit fondamental (article 9 du Code civil, article 8 CEDH). Il interdit la publication de données privées sans consentement et protège contre les intrusions."
    },
    {
        id: 60,
        question: "L'égalité entre les femmes et les hommes est :",
        options: [
            "Un principe à valeur constitutionnelle",
            "Un simple objectif politique",
            "Uniquement valable dans la vie professionnelle",
            "Déjà parfaitement réalisée"
        ],
        correctAnswer: 0,
        explanation: "L'égalité est un principe constitutionnel (alinéa 3 du Préambule de 1946 : 'La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme.'). Des lois visent à la promouvoir (parité, etc.)."
    },

    // Thème 4: Histoire, géographie et culture (20 questions)
    {
        id: 61,
        question: "Quel événement majeur a commencé en 1789 ?",
        options: [
            "La Première Guerre mondiale",
            "La Révolution française",
            "La Seconde Guerre mondiale",
            "Les Trente Glorieuses"
        ],
        correctAnswer: 1,
        explanation: "La Révolution française (1789-1799) a marqué la fin de la monarchie absolue et posé les bases de la République moderne (DDHC, souveraineté nationale)."
    },
    {
        id: 62,
        question: "Qui était le Général de Gaulle ?",
        options: [
            "Un roi de France",
            "Le chef de la France libre pendant la Seconde Guerre mondiale et fondateur de la Ve République",
            "Un président de la IIIe République",
            "Un écrivain du XIXe siècle"
        ],
        correctAnswer: 1,
        explanation: "Charles de Gaulle (1890-1970) a dirigé la Résistance extérieure, présidé le gouvernement provisoire, puis est revenu au pouvoir en 1958 pour fonder la Ve République, dont il fut le premier président."
    },
    {
        id: 63,
        question: "La loi de 1905 concerne :",
        options: [
            "La séparation des Églises et de l'État",
            "L'école gratuite et obligatoire",
            "Les congés payés",
            "L'abolition de l'esclavage"
        ],
        correctAnswer: 0,
        explanation: "La loi du 9 décembre 1905 établit la laïcité en France en organisant la séparation des Églises et de l'État et en garantissant la liberté de conscience."
    },
    {
        id: 64,
        question: "La France est bordée par combien de façades maritimes ?",
        options: [
            "2 (Manche et Méditerranée)",
            "3 (Manche/mer du Nord, Atlantique, Méditerranée)",
            "4 (avec la mer Rouge)",
            "1 (océan Atlantique)"
        ],
        correctAnswer: 1,
        explanation: "La France métropolitaine a trois façades maritimes majeures : au nord (Manche et mer du Nord), à l'ouest (océan Atlantique), au sud (mer Méditerranée)."
    },
    {
        id: 65,
        question: "Mise en situation : Vous visitez le Panthéon à Paris. Quel est son rôle symbolique ?",
        options: [
            "C'est une église en activité",
            "C'est un monument où sont enterrées des personnalités ayant marqué l'histoire de France (Voltaire, Hugo, Curie, etc.)",
            "C'est le siège du Sénat",
            "C'est un musée d'art moderne"
        ],
        correctAnswer: 1,
        explanation: "Le Panthéon, ancienne église, est devenu sous la Révolution un temple laïc destiné à honorer les 'Grands Hommes' (et femmes) de la République française."
    },
    {
        id: 66,
        question: "Quel fleuve traverse Paris ?",
        options: [
            "Le Rhône",
            "La Loire",
            "La Seine",
            "La Garonne"
        ],
        correctAnswer: 2,
        explanation: "La Seine traverse Paris du sud-est au sud-ouest. Elle est un axe historique et économique majeur de la capitale."
    },
    {
        id: 67,
        question: "Quelle période est appelée les 'Trente Glorieuses' ?",
        options: [
            "30 ans de guerres révolutionnaires (1789-1819)",
            "30 ans de croissance économique et de transformation sociale après la Seconde Guerre mondiale (1945-1975)",
            "Le règne de Louis XIV",
            "Les 30 ans de la IIIe République"
        ],
        correctAnswer: 1,
        explanation: "Cette période (1945-1975) a été marquée par une forte croissance, l'essor de la consommation, l'urbanisation et la mise en place de l'État-providence."
    },
    {
        id: 68,
        question: "Quel écrivain français du XIXe siècle est l'auteur des 'Misérables' et a été panthéonisé ?",
        options: [
            "Marcel Proust",
            "Victor Hugo",
            "Émile Zola",
            "Gustave Flaubert"
        ],
        correctAnswer: 1,
        explanation: "Victor Hugo (1802-1885) est un monument de la littérature française, poète, dramaturge et romancier engagé. Il est enterré au Panthéon."
    },
    {
        id: 69,
        question: "La France partage une frontière terrestre avec combien de pays ?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        correctAnswer: 1,
        explanation: "En métropole : Belgique, Luxembourg, Allemagne, Suisse, Italie, Espagne, Andorre, Monaco. Soit 8 pays (Andorre et Monaco étant des micro-États)."
    },
    {
        id: 70,
        question: "Mise en situation : Vous discutez avec un ami de l'histoire coloniale de la France. Vous évoquez l'Algérie. Quelle était sa situation jusqu'en 1962 ?",
        options: [
            "Un protectorat",
            "Un département français",
            "Un pays indépendant allié",
            "Un territoire d'outre-mer"
        ],
        correctAnswer: 1,
        explanation: "L'Algérie était considérée comme une partie intégrante du territoire français, organisée en départements, jusqu'à son indépendance en 1962 après une guerre de décolonisation."
    },
    {
        id: 71,
        question: "Quelle scientifique française a reçu deux prix Nobel (Physique et Chimie) pour ses travaux sur la radioactivité ?",
        options: [
            "Simone de Beauvoir",
            "Marie Curie",
            "Irène Joliot-Curie",
            "Sophie Germain"
        ],
        correctAnswer: 1,
        explanation: "Marie Curie (1867-1934) est une figure majeure de la science. Elle découvrit le polonium et le radium. Elle est la seule femme à avoir reçu deux prix Nobel dans deux disciplines scientifiques différentes."
    },
    {
        id: 72,
        question: "Quelle chaîne de montagnes sépare la France de l'Espagne ?",
        options: [
            "Les Alpes",
            "Le Jura",
            "Les Pyrénées",
            "Le Massif central"
        ],
        correctAnswer: 2,
        explanation: "La chaîne des Pyrénées s'étend sur environ 430 km de l'Atlantique à la Méditerranée et constitue la frontière naturelle entre les deux pays."
    },
    {
        id: 73,
        question: "La IIIe République a été proclamée en 1870 après la défaite face à :",
        options: [
            "L'Angleterre",
            "La Prusse (Allemagne)",
            "L'Italie",
            "L'Autriche"
        ],
        correctAnswer: 1,
        explanation: "La défaite de Sedan contre la Prusse entraîne la chute du Second Empire de Napoléon III. La République est proclamée le 4 septembre 1870."
    },
    {
        id: 74,
        question: "Quel est le plus grand département français par sa superficie (hors collectivités d'outre-mer) ?",
        options: [
            "La Guyane",
            "La Gironde",
            "Les Bouches-du-Rhône",
            "Paris"
        ],
        correctAnswer: 0,
        explanation: "La Guyane, département et région d'outre-mer (DROM) situé en Amérique du Sud, est de loin le plus vaste (83 534 km²). En métropole, c'est la Gironde."
    },
    {
        id: 75,
        question: "Mise en situation : On vous demande un exemple de philosophe des Lumières français. Vous citez :",
        options: [
            "René Descartes",
            "Voltaire",
            "Jean-Paul Sartre",
            "Auguste Comte"
        ],
        correctAnswer: 1,
        explanation: "Voltaire (1694-1778) est l'une des figures emblématiques du siècle des Lumières, défenseur de la liberté d'expression, de la tolérance et de la séparation des pouvoirs."
    },
    {
        id: 76,
        question: "La construction européenne a commencé après 1945 pour :",
        options: [
            "Créer une armée unique",
            "Garantir la paix et favoriser la reconstruction économique",
            "Unifier les langues",
            "Supprimer les États-nations"
        ],
        correctAnswer: 1,
        explanation: "L'idée européenne, portée par des Français comme Robert Schuman, visait à lier les économies (charbon et acier) pour rendre la guerre 'non seulement impensable, mais matériellement impossible'."
    },
    {
        id: 77,
        question: "Quelle île française est située dans l'océan Indien ?",
        options: [
            "La Martinique",
            "La Guadeloupe",
            "La Réunion",
            "La Corse"
        ],
        correctAnswer: 2,
        explanation: "La Réunion est un DROM dans l'océan Indien, à l'est de Madagascar. La Martinique et la Guadeloupe sont dans les Antilles (Atlantique). La Corse est en Méditerranée."
    },
    {
        id: 78,
        question: "La 'loi Ferry' de 1881-1882 a instauré :",
        options: [
            "Le droit de grève",
            "L'école publique, gratuite, laïque et obligatoire",
            "La liberté de la presse",
            "La sécurité sociale"
        ],
        correctAnswer: 1,
        explanation: "Portée par Jules Ferry, ces lois sont fondatrices de l'école républicaine. L'instruction devient obligatoire de 6 à 13 ans (puis 16 ans), gratuite dans les écoles publiques et laïque."
    },
    {
        id: 79,
        question: "Mise en situation : Vous entendez parler du 'Concorde'. De quoi s'agit-il dans l'histoire technologique française ?",
        options: [
            "Un satellite",
            "Un avion de ligne supersonique franco-britannique",
            "Un sous-marin nucléaire",
            "Une fusée spatiale"
        ],
        correctAnswer: 1,
        explanation: "Le Concorde, fruit d'une coopération franco-britannique, était un avion de ligne supersonique emblématique qui a volé de 1976 à 2003. Symbole de prestige technologique."
    },
    {
        id: 80,
        question: "Quel peintre français du XIXe siècle est considéré comme un précurseur de l'impressionnisme avec son tableau 'Le Déjeuner sur l'herbe' ?",
        options: [
            "Claude Monet",
            "Édouard Manet",
            "Pierre-Auguste Renoir",
            "Edgar Degas"
        ],
        correctAnswer: 1,
        explanation: "Édouard Manet (1832-1883) a révolutionné la peinture avec des sujets modernes et une technique qui a ouvert la voie aux impressionnistes."
    },

    // Thème 5: Vivre dans la société française (20 questions)
    {
        id: 81,
        question: "Quelle langue est la langue officielle de la République française ?",
        options: [
            "Le français",
            "Le français et les langues régionales",
            "Le français, l'anglais et l'allemand",
            "Toutes les langues parlées sur le territoire"
        ],
        correctAnswer: 0,
        explanation: "L'article 2 de la Constitution dispose : 'La langue de la République est le français.' Les langues régionales font partie du patrimoine mais n'ont pas le statut de langue officielle."
    },
    {
        id: 82,
        question: "Le principe de laïcité à l'école publique implique que :",
        options: [
            "Les élèves peuvent porter tout signe religieux visible",
            "Les signes religieux ostensibles (comme le voile islamique, la kippa, une grande croix) sont interdits pour les élèves",
            "Les enseignants doivent cacher leurs convictions",
            "L'enseignement des religions est interdit"
        ],
        correctAnswer: 1,
        explanation: "La loi du 15 mars 2004 interdit le port de signes ou tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse dans les écoles, collèges et lycées publics."
    },
    {
        id: 83,
        question: "Le numéro d'urgence européen unique est :",
        options: [
            "15 (SAMU)",
            "17 (Police)",
            "18 (Pompiers)",
            "112"
        ],
        correctAnswer: 3,
        explanation: "Le 112 fonctionne dans toute l'Union européenne, gratuitement, depuis un téléphone fixe ou mobile. Il permet d'être redirigé vers les services de secours appropriés."
    },
    {
        id: 84,
        question: "Pour louer un appartement, un propriétaire peut légalement vous demander :",
        options: [
            "Votre état de santé",
            "Votre origine ethnique",
            "Vos trois derniers bulletins de salaire et votre garant",
            "Votre religion"
        ],
        correctAnswer: 2,
        explanation: "Le propriétaire peut demander des justificatifs de solvabilité (fiches de paie, garant, avis d'imposition) mais pas des informations discriminatoires (origine, état de santé, opinions...)."
    },
    {
        id: 85,
        question: "Mise en situation : Vous voulez inscrire votre enfant à l'école maternelle publique. Vous devez vous adresser à :",
        options: [
            "La préfecture",
            "La mairie de votre domicile",
            "L'inspection académique (DSDEN)",
            "Le rectorat"
        ],
        correctAnswer: 1,
        explanation: "L'inscription administrative se fait à la mairie du domicile, qui délivre un certificat d'inscription. L'inscription pédagogique se fait ensuite à l'école elle-même."
    },
    {
        id: 86,
        question: "La protection contre les discriminations à l'embauche est assurée par :",
        options: [
            "Le code du travail et la loi",
            "Les entreprises elles-mêmes, sans contrôle",
            "Les syndicats uniquement",
            "Le maire de la commune"
        ],
        correctAnswer: 0,
        explanation: "Le code du travail (article L. 1132-1) interdit les discriminations fondées sur l'origine, le sexe, la religion, l'âge, etc. Le Défenseur des droits et les tribunaux peuvent être saisis."
    },
    {
        id: 87,
        question: "Quel est le rôle des 'Associations familiales' reconnues par l'État ?",
        options: [
            "Organiser des fêtes de quartier",
            "Défendre les intérêts matériels et moraux des familles et être consultées sur les politiques familiales",
            "Subventionner les familles nombreuses",
            "Remplacer la CAF"
        ],
        correctAnswer: 1,
        explanation: "Ces associations, regroupées dans l'UNAF, ont un rôle consultatif officiel auprès des pouvoirs publics et gèrent certains services (médiation familiale, conseil budgétaire...)."
    },
    {
        id: 88,
        question: "Le 'permis de conduire probatoire' pour un jeune conducteur dure :",
        options: [
            "1 an",
            "2 ans",
            "3 ans",
            "5 ans"
        ],
        correctAnswer: 2,
        explanation: "Le permis probatoire commence avec 6 points. Durant 3 ans (ou 2 ans si conduite accompagnée), le conducteur doit faire ses preuves. Les infractions entraînent une perte de points majorée."
    },
    {
        id: 89,
        question: "Mise en situation : Vous êtes invité à un dîner chez des amis français. Une attitude courtoise est de :",
        options: [
            "Arriver avec 30 minutes de retard",
            "Apporter un petit cadeau (une bouteille de vin, des fleurs)",
            "Discuter de politique et de religion immédiatement",
            "Partir immédiatement après le repas"
        ],
        correctAnswer: 1,
        explanation: "Il est d'usage et apprécié d'apporter un présent à ses hôtes (une bouteille, des chocolats, des fleurs). Arriver à l'heure (ou prévenir si retard) est aussi important."
    },
    {
        id: 90,
        question: "La 'CAF' (Caisse d'Allocations Familiales) verse :",
        options: [
            "Uniquement les allocations familiales pour les enfants",
            "Des aides au logement et diverses prestations sociales sous conditions de ressources",
            "Le salaire des fonctionnaires",
            "Les pensions de retraite"
        ],
        correctAnswer: 1,
        explanation: "La CAF est un organisme qui verse de nombreuses prestations : allocations familiales, aides au logement (APL), RSA, prime d'activité, etc., sous conditions de ressources et de situation."
    },
    {
        id: 91,
        question: "En France, l'âge légal pour acheter et consommer de l'alcool dans un débit de boissons est :",
        options: [
            "16 ans",
            "18 ans",
            "21 ans",
            "Il n'y a pas d'âge légal"
        ],
        correctAnswer: 1,
        explanation: "Il est interdit de vendre ou d'offrir de l'alcool à des mineurs de moins de 18 ans. La vente d'alcool aux mineurs est un délit."
    },
    {
        id: 92,
        question: "La 'journée défense et citoyenneté' (JDC) est :",
        options: [
            "Une journée militaire obligatoire pour tous les jeunes de 18 ans",
            "Une journée d'information sur les institutions et les enjeux de défense, obligatoire pour tous les jeunes Français (garçons et filles)",
            "Une journée de préparation au service national pour les volontaires",
            "Une fête nationale"
        ],
        correctAnswer: 1,
        explanation: "La JDC est la troisième étape du 'parcours de citoyenneté', après l'enseignement de défense à l'école et le recensement à 16 ans. Elle est obligatoire pour obtenir tout diplôme national (bac, permis...)."
    },
    {
        id: 93,
        question: "Le 'PACS' (Pacte civil de solidarité) est :",
        options: [
            "Un mariage religieux",
            "Un contrat d'union entre deux personnes majeures, de sexe différent ou de même sexe, organisant leur vie commune",
            "Uniquement réservé aux couples homosexuels",
            "Un simple contrat de colocation"
        ],
        correctAnswer: 1,
        explanation: "Le PACS, créé en 1999 et ouvert aux couples homosexuels et hétérosexuels, est un contrat qui offre un cadre juridique avec des droits et devoirs réciproques, mais moins étendu que le mariage."
    },
    {
        id: 94,
        question: "Mise en situation : Votre voisine âgée et isolée ne sort plus. Vous pouvez signaler sa situation à :",
        options: [
            "La police",
            "Le CCAS (Centre communal d'action sociale) de votre mairie",
            "Votre député",
            "Votre employeur"
        ],
        correctAnswer: 1,
        explanation: "Le CCAS est l'organisme local chargé de l'aide sociale. Il peut envoyer un travailleur social pour évaluer les besoins (aide ménagère, portage de repas, etc.) dans un esprit de solidarité."
    },
    {
        id: 95,
        question: "La 'redevance audiovisuelle' finance principalement :",
        options: [
            "Les chaînes de télévision privées",
            "Le service public de l'audiovisuel (France Télévisions, Radio France, etc.)",
            "Internet haut débit",
            "Le cinéma français"
        ],
        correctAnswer: 1,
        explanation: "Cette taxe, payée avec la taxe d'habitation (en cours de suppression) puis intégrée à l'impôt sur le revenu, est la ressource principale du groupe France Télévisions et de Radio France pour assurer leur indépendance."
    },
    {
        id: 96,
        question: "Les 'services publics' en France ont pour mission de :",
        options: [
            "Faire du profit",
            "Satisfaire l'intérêt général sur tout le territoire (éducation, santé, transports, etc.)",
            "Remplacer les entreprises privées",
            "N'exister que dans les grandes villes"
        ],
        correctAnswer: 1,
        explanation: "Ils garantissent l'égalité d'accès des citoyens à des services essentiels (principe de continuité, d'égalité, de mutabilité). Ils peuvent être gérés par l'État, les collectivités ou des entreprises déléguées."
    },
    {
        id: 97,
        question: "Le 'droit au logement opposable' (DALO) permet :",
        options: [
            "D'occuper un logement vacant sans autorisation",
            "À toute personne remplissant les conditions de faire reconnaître son droit au logement et d'être relogé si nécessaire, par recours juridique",
            "De ne jamais payer son loyer",
            "D'obtenir un logement social immédiatement sans critères"
        ],
        correctAnswer: 1,
        explanation: "Institué en 2007, le DALO permet aux personnes prioritaires et mal-logées de saisir une commission puis, en cas de rejet injustifié, un juge administratif pour faire valoir leur droit."
    },
    {
        id: 98,
        question: "Mise en situation : Vous êtes cycliste. La nuit, hors agglomération, vous devez porter :",
        options: [
            "Uniquement un casque (obligatoire pour tous)",
            "Un gilet de haute visibilité et un équipement réfléchissant",
            "Rien de particulier",
            "Un brassard fluorescent uniquement"
        ],
        correctAnswer: 1,
        explanation: "Le code de la route impose aux cyclistes, la nuit ou lorsque la visibilité est insuffisante, hors agglomération, de porter un gilet rétro-réfléchissant. Des dispositifs réfléchissants sur le vélo sont aussi obligatoires."
    },
    {
        id: 99,
        question: "La 'Charte de la laïcité' doit être affichée dans :",
        options: [
            "Tous les lieux de culte",
            "Les entreprises privées",
            "Les établissements scolaires publics",
            "Les mairies uniquement"
        ],
        correctAnswer: 2,
        explanation: "Affichée depuis 2013 dans toutes les écoles, collèges et lycées publics, cette charte explique le sens et les règles du principe de laïcité à l'école de manière pédagogique."
    },
    {
        id: 100,
        question: "Le 'livret de citoyenneté' remis lors de la JDC contient notamment :",
        options: [
            "Un chèque de 100 euros",
            "Un formulaire pour s'engager dans l'armée",
            "Votre casier judiciaire",
            "Des informations sur les droits et devoirs des citoyens et les institutions"
        ],
        correctAnswer: 3,
        explanation: "Ce livret est un support d'information civique. Il rappelle les valeurs de la République, les principes de la défense nationale et les moyens de s'engager dans la vie citoyenne (bénévolat, service civique, etc.)."
    }
];