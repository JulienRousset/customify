export type Lang = 'en' | 'fr'

export const translations = {
  en: {
    nav: {
      work: 'Work',
      services: 'Services',
      numbers: 'Numbers',
      demo: 'Demo',
      tool: 'Tools',
      contact: 'Contact',
      cta: 'Get started'
    },
    hero: {
      eyebrow: 'Studio Customify. All across Bali.',
      h1a: 'AI that runs',
      h1b: 'your business for you.',
      sub: 'We plug smart tools into your business so the boring work happens on its own. Dashboards, Instagram, WhatsApp, ads. Built for you, not copy-pasted.',
      ctaPrimary: 'Try the live demo',
      ctaSecondary: 'See what we build',
      bullets: [
        'A plan made just for your business',
        'Custom hookups with the tools you already use',
        '24/7 support after launch, forever'
      ],
      mockTitle: 'customify.app / my-cocotte',
      mockCta: 'Try this live',
      sidebar: {
        items: ['Overview', 'Revenue', 'Bookings', 'Instagram', 'WhatsApp', 'Ads', 'Team'],
        active: 0,
        plan: 'Plan',
        planValue: 'Studio, monthly'
      },
      sectionTitle: 'Overview',
      sectionSub: 'Every section, one place · live',
      kpis: [
        { k: '€48,210', v: 'Revenue, 30d', d: '+12.4%' },
        { k: '1,284', v: 'Bookings', d: '+9.1%' },
        { k: '38.6K', v: 'IG reach', d: '+24%' },
        { k: '4.8', v: 'Avg rating', d: '+0.2' }
      ],
      chartTitle: 'Weekly revenue',
      chartNote: '€ last 12 weeks',
      channels: 'Top channels',
      recent: 'Recent bookings',
      live: 'Live',
      bookings: [
        { n: 'Table of 4, Friday 19:30', s: 'Instagram DM', t: '2m ago' },
        { n: 'Catering, 22 pax, May 14', s: 'WhatsApp', t: '18m ago' },
        { n: 'Table of 2, tonight 20:00', s: 'Website', t: '41m ago' },
        { n: 'Private dinner, 8 pax', s: 'Referral', t: '1h ago' }
      ],
      whatsappAgent: 'WhatsApp agent',
      replying: 'replying now',
      chat: [
        'Hi, do you have a table for 4 tomorrow at 8?',
        'Yes. Inside or on the terrace?',
        'Terrace please.',
        'Booked. See you at 20:00.'
      ],
      logosCaption: 'Studios, restaurants and creators already building with us'
    },
    services: {
      eyebrow: 'What we do',
      h2a: 'Six things we set up.',
      h2b: 'One system that runs on its own.',
      sub: 'No monthly retainers. We build it, you own it, we stay to help.',
      items: [
        {
          title: 'Live dashboards',
          desc: 'All your numbers in one clear screen. No more hunting through spreadsheets at 2 a.m.',
          metric: '10×',
          metricLabel: 'Faster to read'
        },
        {
          title: 'Instagram on autopilot',
          desc: 'Content ideas, captions and a full calendar, written in your voice. You approve, we publish.',
          metric: '+38%',
          metricLabel: 'More reach'
        },
        {
          title: 'WhatsApp assistant',
          desc: 'Answers your clients, books appointments, speaks their language. On the app they already use.',
          metric: '24/7',
          metricLabel: 'Always awake'
        },
        {
          title: 'Connect your tools',
          desc: 'Sheets, Notion, Stripe, your till. We link them so the boring copy-paste goes away.',
          metric: '14h',
          metricLabel: 'Saved per week'
        },
        {
          title: 'Your own AI assistant',
          desc: 'Trained on your prices, rules and tone. Writes quotes, schedules calls, replies like you.',
          metric: '1',
          metricLabel: 'Made for you'
        },
        {
          title: 'Ads that actually work',
          desc: 'Google and Meta ads, tested every week. We keep what works and drop what doesn’t.',
          metric: '+2.7×',
          metricLabel: 'More sales per $'
        }
      ]
    },
    featured: {
      eyebrow: 'One of our tools',
      h2a: 'Send one message to',
      h2b: 'all your clients at once.',
      sub: 'Our WhatsApp Broadcast sends the same message to your full client list in seconds. Add a first-name tag and it still reads like a personal note.',
      bullets: [
        'Scan a QR code, you’re in. No app to install.',
        'Write once. Each client sees their first name, automatically.',
        'See who got it, who read it, who replied, who booked.'
      ],
      cta: 'Ask for a demo',
      consoleTitle: 'New broadcast',
      fromBrand: 'My Cocotte',
      sentAt: 'Sent today · 20:14',
      to: 'To',
      allClients: 'All clients',
      contacts: (n: number) => `${n.toLocaleString('en-US')} contacts`,
      more: (n: number) => `+${n} more`,
      template: 'Message template',
      templateText: 'Hi {firstname} 🌿 Friday special: lobster pasta, tonight only. Want us to hold a table? Reply YES.',
      tokenLabel: 'first name',
      delivery: 'Live delivery',
      delivered: 'Delivered',
      read: 'Read',
      replied: 'Replies',
      qrLabel: 'Scan to join the list',
      qrHint: 'Put it on tables, the door, receipts.'
    },
    stats: {
      eyebrow: 'The numbers',
      h2a: 'Proof, not',
      h2b: 'promises.',
      sub: 'Every number below comes from a real client paying us right now. No fake case studies. Want to see the live dashboard? Just ask.',
      items: [
        { k: '14', suffix: ' days', label: 'From first call to your system running' },
        { k: '92', suffix: '%', label: 'Clients still with us after 6 months' },
        { k: '1.4', suffix: 'M', label: 'Tasks done by our tools last quarter' },
        { k: '37', suffix: '', label: 'Custom setups built for clients so far' }
      ]
    },
    demo: {
      eyebrow: 'Try it now',
      h2a: 'Your spreadsheet,',
      h2b: 'turned into a dashboard.',
      sub: 'Drop any .xlsx or .csv. We build a live dashboard right in your browser. Think of it as a taste of the Revenue section of your Customify platform, built from your own data.',
      dropTitle: 'Drop your spreadsheet here.',
      dropSub: 'Works with .xlsx, .xls, .csv, .ods. Everything runs in your browser.',
      choose: 'Choose file',
      tryDemo: 'Try demo data',
      privacy: '100% private. Your file never leaves your browser.',
      parsing: 'Reading…',
      errorEmpty: 'This file looks empty. Try another one.',
      errorParse: 'Couldn’t read this file. Make sure it’s a valid .xlsx or .csv.',
      whatTitle: 'What you’ll see',
      what: [
        'Big numbers, worked out instantly.',
        'Interactive bars, pies and trends.',
        'Switch what to show in one click.',
        'A small taste of your real setup.'
      ],
      privateTitle: 'Private by design',
      privateBody: 'We read the file right in your browser. No server, no logs, no storage. Refresh the page and everything is gone.',
      sheets: (n: number) => `${n} sheet${n > 1 ? 's' : ''}`,
      rows: (n: number) => `${n} rows`,
      cols: (n: number) => `${n} columns`,
      newFile: 'New file'
    },
    dashboard: {
      notEnough: 'Not enough numeric or text columns to build a dashboard from this sheet.',
      total: 'Total',
      average: 'Average',
      records: 'Records',
      peak: 'Peak',
      metric: 'Metric',
      group: 'Group',
      split: 'Split',
      top10: 'Top 10 · aggregated',
      topPerformers: 'Top performers',
      by: 'by',
      share: 'Share of',
      breakdown: 'Breakdown',
      trajectory: 'Trajectory',
      over: 'over'
    },
    clients: {
      eyebrow: 'Some of our work',
      h2a: 'Real brands.',
      h2b: 'Real results.',
      sub: 'A short list of the setups live right now. Full list on request.',
      items: [
        {
          name: 'My Cocotte',
          kind: 'Restaurant, Canggu',
          result: '+42%',
          metric: 'Monthly bookings',
          quote: 'The weekly report used to take half a day. Now it writes itself at 6 a.m.',
          desc: 'One clear dashboard plus an Instagram pipeline. Replaced four tools and two hours of daily admin.',
          stack: ['Dashboard', 'Instagram', 'Till sync']
        },
        {
          name: 'TYT',
          kind: 'Personal brand, worldwide',
          result: '10×',
          metric: 'More content',
          quote: 'I brief it once a week. The content shows up, in my voice.',
          desc: 'AI content engine. Ideas, scripts, captions, scheduling. Fully tuned to the brand voice.',
          stack: ['AI assistant', 'Content calendar', 'Analytics']
        },
        {
          name: 'Rody Spa',
          kind: 'Wellness, Seminyak',
          result: '24/7',
          metric: 'Lead capture',
          quote: 'My phone rings less. My calendar fills more.',
          desc: 'WhatsApp assistant that qualifies leads, answers in three languages, confirms bookings.',
          stack: ['WhatsApp', 'Calendar', 'CRM']
        },
        {
          name: 'Maison Vert',
          kind: 'Food brand, launch 2026',
          result: '0→1',
          metric: 'From zero to live',
          quote: 'No system on day one. A running business by day thirty.',
          desc: 'From scratch. Site, CRM, stock tracking, ads, packaging copy. Live in four weeks.',
          stack: ['Site', 'CRM', 'Ads', 'Stock']
        },
        {
          name: 'Studio Lune',
          kind: 'Design studio, Paris',
          result: '€38K',
          metric: 'New revenue, Q1',
          quote: 'We stopped treating admin as a job. It’s a system now.',
          desc: 'Invoices, onboarding, quotes, file delivery. All automatic from start to finish.',
          stack: ['Quotes', 'Billing', 'Delivery']
        },
        {
          name: 'Kaya',
          kind: 'Wellness app, remote',
          result: '+2.7×',
          metric: 'Ad return',
          quote: 'We had the traffic. Now we have the funnel.',
          desc: 'Paid ads pipeline. Creative testing, tracking, weekly tweaks.',
          stack: ['Meta Ads', 'Analytics', 'Creative']
        }
      ]
    },
    contact: {
      eyebrow: 'Get in touch',
      h2a: 'Let’s build',
      h2b: 'your engine.',
      sub: 'Tell us about your business. We reply within 24 hours with a plan made for you, plus a free look at one thing we can automate this week.',
      emailLabel: 'Email, best for briefs',
      waLabel: 'WhatsApp, quick questions',
      waAction: 'Message us',
      availability: 'Availability',
      availabilityBody: 'Taking 2 new clients this quarter. Start in 2 to 3 weeks.',
      form: {
        name: 'Your name',
        namePh: 'Jane Smith',
        email: 'Email',
        emailPh: 'you@brand.com',
        business: 'Business or brand',
        businessPh: 'What should we call you?',
        message: 'What would you like to automate?',
        messagePh: 'Tell us the bottleneck. The clearer, the better.',
        send: 'Send',
        replyNote: 'We reply within 24 hours.'
      },
      sentTitle: 'Message ready.',
      sentBody: 'We opened an email in your mail app. Hit send and we reply within 24 hours.',
      mailSubject: (name: string) => `New project from ${name}`,
      mailBody: (name: string, biz: string, message: string, email: string) =>
        `Hi Customify,\n\nI'm ${name} from ${biz || 'an independent brand'}.\n\n${message}\n\nReach me at ${email}.`,
      footerLocation: 'All of Bali island',
      footerRemote: 'Remote worldwide',
      footerNav: {
        work: 'Work',
        services: 'Services',
        numbers: 'Numbers',
        demo: 'Demo',
        contact: 'Contact'
      }
    }
  },

  fr: {
    nav: {
      work: 'Projets',
      services: 'Services',
      numbers: 'Chiffres',
      demo: 'Démo',
      tool: 'Outils',
      contact: 'Contact',
      cta: 'Commencer'
    },
    hero: {
      eyebrow: 'Studio Customify. Partout à Bali.',
      h1a: 'L’IA qui fait tourner',
      h1b: 'votre business à votre place.',
      sub: 'On branche des outils intelligents sur votre activité pour que le travail pénible se fasse tout seul. Tableaux de bord, Instagram, WhatsApp, pubs. Sur mesure, pas copié-collé.',
      ctaPrimary: 'Essayer la démo',
      ctaSecondary: 'Voir ce qu’on fait',
      bullets: [
        'Un plan pensé pour votre entreprise',
        'Des liaisons sur mesure avec vos outils actuels',
        'Support 24/7 après le lancement, pour toujours'
      ],
      mockTitle: 'customify.app / my-cocotte',
      mockCta: 'Essayer en direct',
      sidebar: {
        items: ['Accueil', 'Chiffre d’affaires', 'Réservations', 'Instagram', 'WhatsApp', 'Pubs', 'Équipe'],
        active: 0,
        plan: 'Formule',
        planValue: 'Studio, mensuel'
      },
      sectionTitle: 'Accueil',
      sectionSub: 'Toutes les sections, un seul écran · en direct',
      kpis: [
        { k: '48 210 €', v: 'CA, 30 j', d: '+12,4 %' },
        { k: '1 284', v: 'Réservations', d: '+9,1 %' },
        { k: '38,6 K', v: 'Portée IG', d: '+24 %' },
        { k: '4,8', v: 'Note moyenne', d: '+0,2' }
      ],
      chartTitle: 'Revenu hebdo',
      chartNote: '€ sur 12 semaines',
      channels: 'Canaux principaux',
      recent: 'Dernières réservations',
      live: 'En direct',
      bookings: [
        { n: 'Table de 4, vendredi 19h30', s: 'DM Instagram', t: 'il y a 2 min' },
        { n: 'Traiteur, 22 pers., 14 mai', s: 'WhatsApp', t: 'il y a 18 min' },
        { n: 'Table de 2, ce soir 20h00', s: 'Site web', t: 'il y a 41 min' },
        { n: 'Dîner privé, 8 pers.', s: 'Recommandation', t: 'il y a 1 h' }
      ],
      whatsappAgent: 'Agent WhatsApp',
      replying: 'répond maintenant',
      chat: [
        'Bonjour, vous avez une table pour 4 demain à 20h ?',
        'Oui. À l’intérieur ou en terrasse ?',
        'En terrasse svp.',
        'C’est réservé. À 20h00.'
      ],
      logosCaption: 'Studios, restaurants et créateurs qui construisent avec nous'
    },
    services: {
      eyebrow: 'Ce qu’on fait',
      h2a: 'Six choses qu’on met en place.',
      h2b: 'Un système qui tourne tout seul.',
      sub: 'Pas d’abonnement sans fin. On construit, c’est à vous, on reste pour aider.',
      items: [
        {
          title: 'Tableaux de bord en direct',
          desc: 'Tous vos chiffres sur un seul écran clair. Fini la chasse aux tableurs à 2h du matin.',
          metric: '10×',
          metricLabel: 'Plus vite à lire'
        },
        {
          title: 'Instagram en pilote auto',
          desc: 'Idées, légendes et planning, écrits avec votre voix. Vous validez, on publie.',
          metric: '+38 %',
          metricLabel: 'Plus de portée'
        },
        {
          title: 'Assistant WhatsApp',
          desc: 'Répond à vos clients, prend des rendez-vous, parle leur langue. Sur l’appli qu’ils utilisent déjà.',
          metric: '24/7',
          metricLabel: 'Jamais fermé'
        },
        {
          title: 'On relie vos outils',
          desc: 'Sheets, Notion, Stripe, votre caisse. On les branche ensemble pour supprimer les copier-coller.',
          metric: '14 h',
          metricLabel: 'Gagnées par semaine'
        },
        {
          title: 'Votre propre assistant IA',
          desc: 'Il apprend vos prix, vos règles, votre ton. Écrit les devis, cale les appels, répond comme vous.',
          metric: '1',
          metricLabel: 'Fait pour vous'
        },
        {
          title: 'Des pubs qui marchent',
          desc: 'Google et Meta, testées chaque semaine. On garde ce qui marche, on coupe le reste.',
          metric: '+2,7×',
          metricLabel: 'De ventes par €'
        }
      ]
    },
    featured: {
      eyebrow: 'Un de nos outils',
      h2a: 'Envoyez un message à',
      h2b: 'tous vos clients d’un coup.',
      sub: 'Notre WhatsApp Broadcast envoie le même message à toute votre liste en quelques secondes. Ajoutez une balise prénom, ça reste un message perso.',
      bullets: [
        'Un QR code à scanner, c’est branché. Rien à installer.',
        'Un seul texte. Chaque client voit son prénom, automatiquement.',
        'On voit qui l’a reçu, lu, répondu, réservé.'
      ],
      cta: 'Demander une démo',
      consoleTitle: 'Nouveau broadcast',
      fromBrand: 'My Cocotte',
      sentAt: 'Envoyé · 20h14',
      to: 'À',
      allClients: 'Tous les clients',
      contacts: (n: number) => `${n.toLocaleString('fr-FR')} contacts`,
      more: (n: number) => `+${n} autres`,
      template: 'Modèle de message',
      templateText: 'Salut {firstname} 🌿 Spécial vendredi : pâtes au homard, ce soir seulement. On te garde une table ? Réponds OUI.',
      tokenLabel: 'prénom',
      delivery: 'Livraison en direct',
      delivered: 'Livrés',
      read: 'Lus',
      replied: 'Réponses',
      qrLabel: 'Scannez pour rejoindre la liste',
      qrHint: 'Collez-le sur les tables, la porte, les tickets.'
    },
    stats: {
      eyebrow: 'Les chiffres',
      h2a: 'Des preuves,',
      h2b: 'pas des promesses.',
      sub: 'Chaque chiffre vient d’un vrai client qui nous paie en ce moment. Pas d’études de cas inventées. Vous voulez voir le tableau de bord en direct ? Demandez.',
      items: [
        { k: '14', suffix: ' jours', label: 'Du premier appel à votre système en route' },
        { k: '92', suffix: ' %', label: 'Clients toujours là après 6 mois' },
        { k: '1,4', suffix: ' M', label: 'Tâches faites par nos outils ce trimestre' },
        { k: '37', suffix: '', label: 'Installations sur mesure livrées à ce jour' }
      ]
    },
    demo: {
      eyebrow: 'À essayer',
      h2a: 'Votre tableur,',
      h2b: 'transformé en dashboard.',
      sub: 'Déposez un .xlsx ou .csv. On construit un tableau de bord dans votre navigateur. C’est un aperçu de la section Chiffre d’affaires de votre plateforme Customify, à partir de vos propres données.',
      dropTitle: 'Déposez votre fichier ici.',
      dropSub: 'Accepte .xlsx, .xls, .csv, .ods. Tout se passe dans votre navigateur.',
      choose: 'Choisir un fichier',
      tryDemo: 'Essayer avec nos données',
      privacy: '100 % privé. Votre fichier ne quitte jamais votre navigateur.',
      parsing: 'Lecture…',
      errorEmpty: 'Le fichier semble vide. Essayez-en un autre.',
      errorParse: 'Impossible de lire ce fichier. Assurez-vous qu’il est en .xlsx ou .csv.',
      whatTitle: 'Ce que vous verrez',
      what: [
        'Les grands chiffres, calculés sur le champ.',
        'Des barres, camemberts et tendances cliquables.',
        'Changez ce que vous regardez en un clic.',
        'Un avant-goût de votre vrai tableau de bord.'
      ],
      privateTitle: 'Privé par défaut',
      privateBody: 'On lit le fichier directement dans le navigateur. Pas de serveur, pas de journaux, pas de stockage. Rechargez, tout disparaît.',
      sheets: (n: number) => `${n} feuille${n > 1 ? 's' : ''}`,
      rows: (n: number) => `${n} lignes`,
      cols: (n: number) => `${n} colonnes`,
      newFile: 'Nouveau fichier'
    },
    dashboard: {
      notEnough: 'Pas assez de colonnes chiffrées ou texte pour construire un tableau de bord depuis cette feuille.',
      total: 'Total',
      average: 'Moyenne',
      records: 'Entrées',
      peak: 'Max',
      metric: 'Mesure',
      group: 'Groupe',
      split: 'Découpe',
      top10: 'Top 10 · cumulé',
      topPerformers: 'Les plus forts',
      by: 'par',
      share: 'Part de',
      breakdown: 'Répartition',
      trajectory: 'Trajectoire',
      over: 'par'
    },
    clients: {
      eyebrow: 'Quelques projets',
      h2a: 'Des marques réelles.',
      h2b: 'Des résultats réels.',
      sub: 'Une courte liste des systèmes en route. Liste complète sur demande.',
      items: [
        {
          name: 'My Cocotte',
          kind: 'Restaurant, Canggu',
          result: '+42 %',
          metric: 'Réservations mensuelles',
          quote: 'Le rapport hebdo prenait une demi-journée. Maintenant il s’écrit tout seul à 6h.',
          desc: 'Un dashboard clair et une chaîne Instagram. Remplace quatre outils et deux heures d’admin par jour.',
          stack: ['Dashboard', 'Instagram', 'Caisse']
        },
        {
          name: 'TYT',
          kind: 'Marque perso, international',
          result: '10×',
          metric: 'Plus de contenu',
          quote: 'Je brief une fois par semaine. Le contenu sort, dans ma voix.',
          desc: 'Moteur de contenu IA. Idées, scripts, légendes, planning. Calé sur la voix de la marque.',
          stack: ['Assistant IA', 'Planning', 'Analytics']
        },
        {
          name: 'Rody Spa',
          kind: 'Bien-être, Seminyak',
          result: '24/7',
          metric: 'Prise de contacts',
          quote: 'Mon téléphone sonne moins. Mon agenda se remplit plus.',
          desc: 'Assistant WhatsApp qui qualifie les pistes, répond en trois langues, confirme les RDV.',
          stack: ['WhatsApp', 'Agenda', 'CRM']
        },
        {
          name: 'Maison Vert',
          kind: 'Marque food, lancement 2026',
          result: '0→1',
          metric: 'De zéro à lancée',
          quote: 'Zéro système au jour 1. Une entreprise qui tourne au jour 30.',
          desc: 'Tout de zéro. Site, CRM, stocks, pubs, packaging. Live en quatre semaines.',
          stack: ['Site', 'CRM', 'Pubs', 'Stock']
        },
        {
          name: 'Studio Lune',
          kind: 'Studio design, Paris',
          result: '38 K €',
          metric: 'Nouveau CA, T1',
          quote: 'L’admin n’est plus un boulot. C’est un système.',
          desc: 'Devis, onboarding, factures, livraisons. Tout automatisé de bout en bout.',
          stack: ['Devis', 'Facturation', 'Livraison']
        },
        {
          name: 'Kaya',
          kind: 'App bien-être, à distance',
          result: '+2,7×',
          metric: 'Retour sur pubs',
          quote: 'On avait le trafic. On a maintenant le tunnel.',
          desc: 'Chaîne de pubs payantes. Tests créa, suivi, ajustements hebdo.',
          stack: ['Meta Ads', 'Analytics', 'Créa']
        }
      ]
    },
    contact: {
      eyebrow: 'Parlons-en',
      h2a: 'Construisons',
      h2b: 'votre moteur.',
      sub: 'Racontez-nous votre activité. On répond sous 24 h avec un plan sur mesure et un audit gratuit d’un processus qu’on peut automatiser cette semaine.',
      emailLabel: 'Email, idéal pour les briefs',
      waLabel: 'WhatsApp, pour une question rapide',
      waAction: 'Nous écrire',
      availability: 'Disponibilité',
      availabilityBody: 'On prend 2 nouveaux clients ce trimestre. Démarrage sous 2 à 3 semaines.',
      form: {
        name: 'Votre nom',
        namePh: 'Jean Dupont',
        email: 'Email',
        emailPh: 'vous@marque.com',
        business: 'Entreprise ou marque',
        businessPh: 'Comment vous appelle-t-on ?',
        message: 'Qu’aimeriez-vous automatiser ?',
        messagePh: 'Racontez le blocage. Plus c’est clair, mieux c’est.',
        send: 'Envoyer',
        replyNote: 'Réponse sous 24 heures.'
      },
      sentTitle: 'Message prêt.',
      sentBody: 'On a ouvert un email dans votre boîte. Cliquez envoyer, on répond sous 24 h.',
      mailSubject: (name: string) => `Nouveau projet de ${name}`,
      mailBody: (name: string, biz: string, message: string, email: string) =>
        `Bonjour Customify,\n\nJe suis ${name} de ${biz || 'une marque indépendante'}.\n\n${message}\n\nVous pouvez me joindre à ${email}.`,
      footerLocation: 'Toute l’île de Bali',
      footerRemote: 'À distance, partout',
      footerNav: {
        work: 'Projets',
        services: 'Services',
        numbers: 'Chiffres',
        demo: 'Démo',
        contact: 'Contact'
      }
    }
  }
} as const

export type Dict = typeof translations['en']
