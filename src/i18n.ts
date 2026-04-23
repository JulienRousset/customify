export type Lang = 'en' | 'fr'

export const translations = {
  en: {
    nav: {
      work: 'Work',
      services: 'Services',
      software: 'Software',
      automation: 'Automation',
      clients: 'Clients',
      numbers: 'Numbers',
      demo: 'Demo',
      tool: 'Tools',
      contact: 'Contact',
      cta: 'Get started'
    },
    hero: {
      eyebrow: 'Custom AI studio · Bali & Paris',
      h1a: 'Built for one brand.',
      h1b: 'Yours.',
      sub: 'No templates. No packaged plans. We design every system around how your business actually runs — and stay close enough to keep evolving it with you.',
      ctaPrimary: 'Start a project',
      engagement: 'Free first call · Build sprints from 2 weeks · Monthly care after launch',
      ctaSecondary: 'Grow your brand',
      mockTitle: 'Dashboard exemple built for a restaurant in Bali',
      mockCta: 'Book my own dashboard',
      mockHeadingA: 'We build your own software to make your life',
      mockHeadingB: 'easier',
      mockSub: 'Your spreadsheet, turned into a dashboard. A custom dashboard that tracks all the data you need.',
      sidebar: {
        items: ['Overview', 'Revenue', 'Bookings', 'Instagram', 'WhatsApp', 'Ads', 'Team'],
        active: 0,
        plan: 'Plan',
        planValue: 'Custom build'
      },
      sectionTitle: 'Overview',
      sectionSub: 'Built for My Cocotte · every section, one place',
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
      logosTitle: {
        prefix: 'Studios, restaurants and ',
        accent: 'creators',
        suffix: ' already building with us'
      },
      notifications: [
        { title: 'WhatsApp Push', desc: 'Direct notifications with >90% open rate.', icon: 'whatsapp' },
        { title: 'More Clients', desc: 'Automated funnels that drive bookings.', icon: 'trending' },
        { title: 'Custom Ad Funnels', desc: 'Personalized flows for higher conversion.', icon: 'funnel' },
        { title: 'Optimized Ads', desc: 'Meta & TikTok campaigns scaled by AI.', icon: 'ads' }
      ]
    },
    services: {
      eyebrow: 'What we build',
      h2a: 'No two builds',
      h2b: 'look the same.',
      sub: 'Pick the pieces that match your business — site, dashboard, automation, content engine. Each one is shaped to your operation, not pulled off a shelf.',
      items: [
        {
          title: 'CRM & live dashboards',
          desc: 'Revenue, bookings, social reach. One screen that reads itself. No more hunting through spreadsheets.',
          metric: '',
          metricLabel: 'Built for your ops',
          tag: 'Restaurant',
          tagColor: '#ff9f0a'
        },
        {
          title: 'Websites or Mobile App',
          desc: 'We build your website or mobile app, or take over what you already have. Wired to your tools, designed for one job: turn visits into clients.',
          metric: '',
          metricLabel: 'From scratch or takeover',
          tag: 'Entrepreneur',
          tagColor: '#0071e3'
        },
        {
          title: 'Social & Automation, handled',
          desc: 'We build automation for any platform: WhatsApp, Telegram, Instagram, TikTok, Facebook, YouTube. Content calendar, writing, and automated replies.',
          metric: '',
          metricLabel: 'Always-on, multi-platform',
          tag: 'Influencer',
          tagColor: '#ff375f'
        },
        {
          title: 'Marketing strategy',
          desc: 'Digital and physical. A clear 90-day plan: what to run, where to spend, what to measure, when to pivot.',
          metric: '',
          metricLabel: '90-day roadmap',
          tag: 'Spa',
          tagColor: '#af52de'
        },
        {
          title: 'Ads, managed for you',
          desc: 'Meta, Google, TikTok. Creative, testing and weekly optimisation by our team. We keep what works, cut what doesn’t.',
          metric: '',
          metricLabel: 'Monthly retainer',
          tag: 'Restaurant',
          tagColor: '#ff9f0a'
        },
        {
          title: 'Sales funnels that sell',
          desc: 'From first click to booked client. Designed, wired, tested. A pipeline you can actually point to.',
          metric: '',
          metricLabel: 'End-to-end pipeline',
          tag: 'Entrepreneur',
          tagColor: '#0071e3'
        }
      ]
    },
    featured: {
      eyebrow: 'One of our tools',
      h2a: 'We build automation for your business',
      h2b: 'Let AI work for you',
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
      h2b: 'promises',
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
      h2b: 'turned into a dashboard',
      sub: 'Drop any .xlsx or .csv. We build a live dashboard right in your browser. Think of it as a taste of the Revenue section of your Customy platform, built from your own data.',
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
      eyebrow: 'Currently building with',
      h2a: 'Real brands,',
      h2b: 'real systems.',
      sub: 'No two builds look alike. Each setup below was designed from scratch around how that team actually operates.',
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
          name: 'Dylan',
          kind: 'Personal brand, worldwide',
          result: '10×',
          metric: 'More content',
          quote: 'I brief it once a week. The content shows up, in my voice.',
          desc: 'AI content engine. Ideas, scripts, captions, scheduling. Fully tuned to the brand voice.',
          stack: ['AI assistant', 'Content calendar', 'Analytics']
        },
        {
          name: 'Inka Spa Bali',
          kind: 'Wellness, Canggu',
          result: '24/7',
          metric: 'Lead capture',
          quote: 'My phone rings less. My calendar fills more.',
          desc: 'WhatsApp assistant that qualifies leads, answers in three languages, confirms bookings.',
          stack: ['WhatsApp', 'Calendar', 'CRM']
        },
        {
          name: 'Temple Spa Bali',
          kind: 'Spa, Seminyak',
          result: '+38%',
          metric: 'Returning guests',
          quote: 'The follow-up happens without me. Guests come back.',
          desc: 'Automated post-visit flow. Thank-you notes, review asks, memberships, rebooking prompts.',
          stack: ['Automation', 'Email', 'Reviews']
        },
        {
          name: 'Skyrol',
          kind: 'Travel solution, remote',
          result: '+48%',
          metric: 'Conversion lift',
          quote: 'We stopped losing leads in the gaps between tools.',
          desc: 'End-to-end funnel wiring. Tracking, nurture, checkout, reporting. Every step visible.',
          stack: ['Analytics', 'Email', 'Checkout']
        },
        {
          name: 'Natura Organics',
          kind: 'Organic brand, Bali',
          result: '3×',
          metric: 'Reorder rate',
          quote: 'Our best customers come back on their own now.',
          desc: 'Subscriptions, post-purchase flows, review loops. The retention machine, wired up.',
          stack: ['Subscriptions', 'Email', 'Reviews']
        },
        {
          name: "In'Sens Sourcing",
          kind: 'Sourcing, Paris',
          result: '12h',
          metric: 'Saved weekly',
          quote: 'The inbox no longer runs our day.',
          desc: 'Supplier triage, RFQ automation, deadline tracking. Inbox to pipeline in one click.',
          stack: ['Pipeline', 'Email', 'Docs']
        }
      ]
    },
    integrations: {
      eyebrow: 'Integrations',
      h2a: 'Supercharge your',
      h2b: 'workflow',
      sub: 'Every tool you already use, wired together. Ads, CRM, site, messaging, payments. One clean pipeline that actually talks to itself.',
      ctaPrimary: 'Wire up my stack',
      ctaSecondary: 'What we build'
    },
    process: {
      eyebrow: 'How we work',
      h2a: 'Three steps.',
      h2b: 'No account managers.',
      sub: 'You talk to the people building the thing — from the first call to the launch and after. No hand-offs, no layers, no decks.',
      steps: [
        {
          title: 'Discovery call',
          duration: '30 min · free',
          desc: 'We get on a call, understand your operation, your bottlenecks, the tools you already use. You leave with a clear scope — not a pitch deck.'
        },
        {
          title: 'Build sprint',
          duration: '2 to 3 weeks',
          desc: 'We design and ship your system end-to-end. You see progress daily on WhatsApp. We launch when it actually works, not when the sprint timer ends.'
        },
        {
          title: 'Monthly care',
          duration: 'Optional · cancel anytime',
          desc: 'We stay on to evolve it with your business — new dashboards, new automations, fixes. Same two people. No ticket queues.'
        }
      ]
    },
    whoFor: {
      eyebrow: 'Who we work with',
      h2a: 'Owner-operators.',
      h2b: 'Not pitch decks.',
      sub: 'We stay small on purpose. That means we can only take a few projects at a time — and we say no to anything that doesn’t fit.',
      fitTitle: 'You’re our fit if',
      fit: [
        'You own the business and actually use what we build every day',
        'You’re spending your own money, not an investor’s pitch round',
        'You’d rather ship something custom in 3 weeks than configure a SaaS for 3 months',
        'You want the people who built it to still pick up the phone a year later'
      ],
      notTitle: 'Probably not a fit if',
      not: [
        'You’re looking for a 200-person agency with enterprise SLAs',
        'You want to buy "AI" as a marketing label, not a working system',
        'You need a full rebrand or a 60-page strategy deck — that’s a different agency'
      ]
    },
    contact: {
      eyebrow: 'Get in touch',
      h2a: 'Tell us where',
      h2b: 'it’s stuck.',
      sub: 'One sentence is enough. We reply within 24 hours with a free 5-minute audit of one thing we can automate this week — no strings, no deck.',
      freeAudit: 'Free 24h audit · No call required',
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
        `Hi Customy,\n\nI'm ${name} from ${biz || 'an independent brand'}.\n\n${message}\n\nReach me at ${email}.`,
      exitModal: {
        eyebrow: 'One last thing',
        title: 'Before you go',
        sub: 'Drop your email and we’ll send a free audit of one thing we can automate for you this week. No strings.',
        emailPh: 'you@brand.com',
        cta: 'Send it my way',
        skip: 'No thanks',
        sentTitle: 'Email on the way.',
        sentBody: 'We opened a message in your mail app. Hit send and we reply within 24 hours.',
        mailSubject: 'Audit request',
        mailBody: (email: string) =>
          `Hi Customy,\n\nI saw the site and I'd like the free audit you mentioned.\n\nReach me at ${email}.`
      },
      footerLocation: 'All of Bali island',
      footerRemote: 'Remote worldwide',
      footerTagline: 'One studio. One client at a time.',
      footerNav: {
        services: 'Services',
        software: 'Software',
        automation: 'Automation',
        clients: 'Clients',
        contact: 'Contact'
      }
    }
  },

  fr: {
    nav: {
      work: 'Projets',
      services: 'Services',
      software: 'Software',
      automation: 'Automation',
      clients: 'Clients',
      numbers: 'Chiffres',
      demo: 'Démo',
      tool: 'Outils',
      contact: 'Contact',
      cta: 'Commencer'
    },
    hero: {
      eyebrow: 'Studio IA sur mesure · Bali & Paris',
      h1a: 'Conçu pour une marque.',
      h1b: 'La vôtre.',
      sub: 'Pas de template. Pas de pack tout-fait. On dessine chaque système autour de la façon dont votre business tourne vraiment — et on reste assez proches pour le faire évoluer avec vous.',
      ctaPrimary: 'Démarrer un projet',
      engagement: 'Premier appel offert · Sprints dès 2 semaines · Suivi mensuel après livraison',
      ctaSecondary: 'Grow your brand',
      mockTitle: 'Exemple de dashboard conçu pour un restaurant à Bali',
      mockCta: 'Book my own dashboard',
      mockHeadingA: 'On construit votre propre logiciel pour vous',
      mockHeadingB: 'simplifier la vie',
      mockSub: 'Votre tableur, transformé en tableau de bord. Un dashboard sur mesure qui suit toutes les données dont vous avez besoin.',
      sidebar: {
        items: ['Accueil', 'Chiffre d’affaires', 'Réservations', 'Instagram', 'WhatsApp', 'Pubs', 'Équipe'],
        active: 0,
        plan: 'Formule',
        planValue: 'Sur mesure'
      },
      sectionTitle: 'Accueil',
      sectionSub: 'Fait pour My Cocotte · toutes les sections au même endroit',
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
      logosTitle: {
        prefix: 'Studios, restaurants et ',
        accent: 'créateurs',
        suffix: ' qui construisent avec nous'
      },
      notifications: [
        { title: 'Push WhatsApp', desc: 'Notifications directes, >90% d\'ouverture.', icon: 'whatsapp' },
        { title: 'Plus de clients', desc: 'Des tunnels qui génèrent des réservations.', icon: 'trending' },
        { title: 'Tunnels sur-mesure', desc: 'Des parcours personnalisés pour vos pubs.', icon: 'funnel' },
        { title: 'Pubs optimisées', desc: 'Campagnes Facebook & TikTok gérées par IA.', icon: 'ads' }
      ]
    },
    services: {
      eyebrow: 'Ce qu’on construit',
      h2a: 'Aucun build',
      h2b: 'ne se ressemble.',
      sub: 'Choisissez les briques qui collent à votre business — site, dashboard, automatisations, moteur de contenu. Chacune est dessinée pour votre opération, pas tirée d’une étagère.',
      items: [
        {
          title: 'CRM & tableaux de bord',
          desc: 'Chiffre d’affaires, réservations, portée sociale. Un seul écran qui se lit tout seul. Fini la chasse aux tableurs.',
          metric: '',
          metricLabel: 'Pensé pour votre opération',
          tag: 'Restaurant',
          tagColor: '#ff9f0a'
        },
        {
          title: 'Site web ou application mobile',
          desc: 'On conçoit votre site web ou votre app mobile, ou on reprend l’existant. Branché à vos outils, pensé pour transformer les visites en clients.',
          metric: '',
          metricLabel: 'De zéro ou reprise',
          tag: 'Entrepreneur',
          tagColor: '#0071e3'
        },
        {
          title: 'Réseaux & Automatisations',
          desc: 'On construit de l\'automatisation pour n\'importe quelle plateforme : WhatsApp, Telegram, Instagram, TikTok, Facebook, YouTube. Planning, contenu et réponses 24/7.',
          metric: '',
          metricLabel: '24/7, multi-plateforme',
          tag: 'Influenceur',
          tagColor: '#ff375f'
        },
        {
          title: 'Stratégie marketing',
          desc: 'Digital et physique. Un plan clair sur 90 jours : quoi lancer, où dépenser, quoi mesurer, quand ajuster.',
          metric: '',
          metricLabel: 'Feuille de route 90 jours',
          tag: 'Spa',
          tagColor: '#af52de'
        },
        {
          title: 'Pubs, gérées pour vous',
          desc: 'Meta, Google, TikTok. Créa, tests et optimisation chaque semaine par notre équipe. On garde ce qui marche, on coupe le reste.',
          metric: '',
          metricLabel: 'Abonnement mensuel',
          tag: 'Restaurant',
          tagColor: '#ff9f0a'
        },
        {
          title: 'Tunnels qui vendent',
          desc: 'Du premier clic au client réservé. Conçu, branché, testé. Un vrai pipeline, pas une promesse.',
          metric: '',
          metricLabel: 'Pipeline de bout en bout',
          tag: 'Entrepreneur',
          tagColor: '#0071e3'
        }
      ]
    },
    featured: {
      eyebrow: 'Un de nos outils',
      h2a: 'On construit des automatisations pour votre business',
      h2b: 'Laissez l’IA travailler pour vous',
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
      h2b: 'pas des promesses',
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
      h2b: 'transformé en dashboard',
      sub: 'Déposez un .xlsx ou .csv. On construit un tableau de bord dans votre navigateur. C’est un aperçu de la section Chiffre d’affaires de votre plateforme Customy, à partir de vos propres données.',
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
      eyebrow: 'On construit en ce moment avec',
      h2a: 'De vraies marques,',
      h2b: 'de vrais systèmes.',
      sub: 'Aucun build ne ressemble à un autre. Chaque setup ci-dessous a été dessiné de zéro autour de la façon dont l’équipe travaille vraiment.',
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
          name: 'Dylan',
          kind: 'Marque perso, international',
          result: '10×',
          metric: 'Plus de contenu',
          quote: 'Je brief une fois par semaine. Le contenu sort, dans ma voix.',
          desc: 'Moteur de contenu IA. Idées, scripts, légendes, planning. Calé sur la voix de la marque.',
          stack: ['Assistant IA', 'Planning', 'Analytics']
        },
        {
          name: 'Inka Spa Bali',
          kind: 'Bien-être, Canggu',
          result: '24/7',
          metric: 'Prise de contacts',
          quote: 'Mon téléphone sonne moins. Mon agenda se remplit plus.',
          desc: 'Assistant WhatsApp qui qualifie les pistes, répond en trois langues, confirme les RDV.',
          stack: ['WhatsApp', 'Agenda', 'CRM']
        },
        {
          name: 'Temple Spa Bali',
          kind: 'Spa, Seminyak',
          result: '+38 %',
          metric: 'Clients qui reviennent',
          quote: 'Le suivi se fait tout seul. Les clients reviennent.',
          desc: 'Parcours post-visite automatisé. Remerciements, demandes d’avis, abonnements, relances.',
          stack: ['Automatisation', 'Email', 'Avis']
        },
        {
          name: 'Skyrol',
          kind: 'Solution voyage, à distance',
          result: '+48 %',
          metric: 'Conversions',
          quote: 'On ne perd plus de pistes dans les trous entre les outils.',
          desc: 'Tunnel complet câblé. Tracking, nurturing, checkout, reporting. Chaque étape visible.',
          stack: ['Analytics', 'Email', 'Checkout']
        },
        {
          name: 'Natura Organics',
          kind: 'Marque bio, Bali',
          result: '3×',
          metric: 'Taux de rachat',
          quote: 'Nos meilleurs clients reviennent tout seuls.',
          desc: 'Abonnements, parcours post-achat, boucles d’avis. La machine à fidéliser, câblée.',
          stack: ['Abonnements', 'Email', 'Avis']
        },
        {
          name: "In'Sens Sourcing",
          kind: 'Sourcing, Paris',
          result: '12h',
          metric: 'Économisées / semaine',
          quote: 'La boîte mail ne dirige plus la journée.',
          desc: 'Tri fournisseurs, RFQ automatisés, suivi des deadlines. Mail vers pipeline en un clic.',
          stack: ['Pipeline', 'Email', 'Docs']
        }
      ]
    },
    integrations: {
      eyebrow: 'Intégrations',
      h2a: 'Boostez votre',
      h2b: 'workflow',
      sub: 'Chaque outil que vous utilisez déjà, branché ensemble. Pubs, CRM, site, messagerie, paiements. Un seul pipeline qui se parle vraiment.',
      ctaPrimary: 'Brancher mon stack',
      ctaSecondary: 'Ce qu’on fait'
    },
    process: {
      eyebrow: 'Notre façon de bosser',
      h2a: 'Trois étapes.',
      h2b: 'Zéro account manager.',
      sub: 'Vous parlez aux gens qui construisent — du premier appel au lancement, et après. Pas de passage de témoin, pas d’étages, pas de decks.',
      steps: [
        {
          title: 'Appel de découverte',
          duration: '30 min · offert',
          desc: 'On fait le point sur votre opération, vos goulots, les outils que vous utilisez déjà. Vous repartez avec un scope clair — pas un pitch deck.'
        },
        {
          title: 'Sprint de build',
          duration: '2 à 3 semaines',
          desc: 'On conçoit et livre votre système de bout en bout. Vous voyez l’avancement chaque jour sur WhatsApp. On lance quand ça marche, pas quand le chrono sonne.'
        },
        {
          title: 'Suivi mensuel',
          duration: 'Optionnel · résiliable à tout moment',
          desc: 'On reste pour faire évoluer le système avec votre business — nouveaux dashboards, nouvelles automatisations, correctifs. Mêmes deux personnes. Pas de file de tickets.'
        }
      ]
    },
    whoFor: {
      eyebrow: 'Avec qui on bosse',
      h2a: 'Des patrons d’entreprise.',
      h2b: 'Pas des pitch decks.',
      sub: 'On reste petits exprès. Ça veut dire qu’on prend peu de projets à la fois — et qu’on dit non à tout ce qui ne colle pas.',
      fitTitle: 'On est fait pour vous si',
      fit: [
        'Vous êtes le patron et vous utilisez vraiment ce qu’on construit, chaque jour',
        'Vous dépensez votre propre argent, pas une levée d’investisseurs',
        'Vous préférez livrer du sur-mesure en 3 semaines que configurer un SaaS pendant 3 mois',
        'Vous voulez que les gens qui l’ont construit décrochent encore un an plus tard'
      ],
      notTitle: 'Probablement pas fait pour vous si',
      not: [
        'Vous cherchez une agence de 200 personnes avec des SLA entreprise',
        'Vous voulez acheter « de l’IA » comme label marketing, pas un système qui tourne',
        'Il vous faut un rebrand complet ou un deck de stratégie sur 60 pages — c’est une autre agence'
      ]
    },
    contact: {
      eyebrow: 'Parlons-en',
      h2a: 'Dites-nous',
      h2b: 'où ça coince.',
      sub: 'Une phrase suffit. On répond sous 24 h avec un audit gratuit de 5 minutes sur une chose qu’on peut automatiser cette semaine — sans engagement, sans deck.',
      freeAudit: 'Audit offert sous 24 h · Sans appel',
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
        `Bonjour Customy,\n\nJe suis ${name} de ${biz || 'une marque indépendante'}.\n\n${message}\n\nVous pouvez me joindre à ${email}.`,
      exitModal: {
        eyebrow: 'Un dernier truc',
        title: 'Avant de partir',
        sub: 'Laissez votre email — on vous envoie un audit gratuit d’une chose qu’on peut automatiser pour vous cette semaine. Sans engagement.',
        emailPh: 'vous@marque.com',
        cta: 'Envoyez-moi ça',
        skip: 'Non merci',
        sentTitle: 'Email prêt.',
        sentBody: 'On a ouvert un message dans votre boîte mail. Cliquez envoyer, on répond sous 24 h.',
        mailSubject: 'Demande d’audit',
        mailBody: (email: string) =>
          `Bonjour Customy,\n\nJ’ai vu le site et j’aimerais l’audit gratuit que vous proposez.\n\nVous pouvez me joindre à ${email}.`
      },
      footerLocation: 'Toute l’île de Bali',
      footerRemote: 'À distance, partout',
      footerTagline: 'Un studio. Un client à la fois.',
      footerNav: {
        services: 'Services',
        software: 'Software',
        automation: 'Automatisation',
        clients: 'Clients',
        contact: 'Contact'
      }
    }
  }
} as const

export type Dict = typeof translations['en']
