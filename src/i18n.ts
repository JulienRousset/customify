export type Lang = 'en' | 'fr'

export const translations = {
  en: {
    nav: {
      services: 'Services',
      software: 'Case study',
      automation: 'Automation',
      clients: 'Clients',
      contact: 'Contact',
      cta: 'See if we’re a fit'
    },
    inlineCta: {
      services: 'Discuss your build',
      software: 'Want a setup like this',
      testimonials: 'Talk to us about yours',
      whoFor: 'On the fence? Email us. We’ll tell you honestly.'
    },
    marquee: {
      header: 'Trusted by studios, restaurants and creators'
    },
    automation: {
      eyebrow: 'Case study · Inka Spa Bali',
      h2a: 'How Inka Spa stopped',
      h2b: 'losing leads at night.',
      sub: 'We built this for a wellness studio. It qualifies leads, answers FAQs, and blocks calendar slots in English, French and Indonesian, while the owner sleeps. Similar systems run on Telegram, Messenger and Instagram for other clients.',
      mockTag: 'Example',
      features: [
        { title: 'Replies in their voice', desc: 'Trained on the menu, the services, the tone of past replies. It sounds like the owner, not a chatbot.' },
        { title: 'Books calendar slots', desc: 'Checks availability, proposes a window, confirms the booking. The owner only steps in when the client asks for something unusual.' },
        { title: 'Multi-language, 24/7', desc: 'EN, FR, ID in one flow. Auto-detects the guest language and responds in kind. Same assistant, same number.' },
        { title: 'Daily handover', desc: 'Every morning, a summary of what got handled, what needs a human, what to ship next.' }
      ],
      cta: 'Start a project'
    },
    hero: {
      eyebrow: 'Custom marketing & AI studio',
      h1a: 'Every business is unique,',
      h1b: 'yours should be too.',
      sub: 'No templates. No packaged plans. We design every system around how your business actually runs, and stay close enough to keep evolving it with you.',
      ctaPrimary: 'Start a project',
      engagement: 'Free first call · Build sprints from 2 weeks · Monthly care after launch',
      ctaSecondary: 'Grow your brand',
      mockTitle: 'Example dashboard built for a restaurant client',
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
      sub: 'Pick the pieces that match your business: site, dashboard, automation, content engine. Each one is shaped to your operation, not pulled off a shelf.',
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
          title: 'Ads & SEO',
          desc: 'Meta, Google and TikTok ads for paid acquisition. On-page, technical and content SEO for organic reach. Weekly optimisation by our team. We keep what works, cut what doesn’t.',
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
    clients: {
      eyebrow: 'Currently building with',
      h2a: 'Real brands,',
      h2b: 'real systems.',
      sub: 'No two builds look alike. Each setup below was designed from scratch around how that team actually operates.',
      items: [
        {
          name: 'My Cocotte',
          kind: 'Restaurant',
          quote: 'The weekly report used to take half a day. Now it writes itself at 6 a.m.',
          desc: 'One clear dashboard plus an Instagram pipeline. Replaced four tools and two hours of daily admin.',
          stack: ['Dashboard', 'Instagram', 'Till sync']
        },
        {
          name: 'Dylan',
          kind: 'Personal brand, worldwide',
          quote: 'I brief it once a week. The content shows up, in my voice.',
          desc: 'AI content engine. Ideas, scripts, captions, scheduling. Fully tuned to the brand voice.',
          stack: ['AI assistant', 'Content calendar', 'Analytics']
        },
        {
          name: 'Inka Spa Bali',
          kind: 'Wellness',
          quote: 'My phone rings less. My calendar fills more.',
          desc: 'WhatsApp assistant that qualifies leads, answers in three languages, confirms bookings.',
          stack: ['WhatsApp', 'Calendar', 'CRM']
        },
        {
          name: 'Temple Spa Bali',
          kind: 'Spa',
          quote: 'The follow-up happens without me. Guests come back.',
          desc: 'Automated post-visit flow. Thank-you notes, review asks, memberships, rebooking prompts.',
          stack: ['Automation', 'Email', 'Reviews']
        },
        {
          name: 'Skyrol',
          kind: 'Travel solution, remote',
          quote: 'We stopped losing leads in the gaps between tools.',
          desc: 'End-to-end funnel wiring. Tracking, nurture, checkout, reporting. Every step visible.',
          stack: ['Analytics', 'Email', 'Checkout']
        },
        {
          name: 'Natura Organics',
          kind: 'Organic brand',
          quote: 'Our best customers come back on their own now.',
          desc: 'Subscriptions, post-purchase flows, review loops. The retention machine, wired up.',
          stack: ['Subscriptions', 'Email', 'Reviews']
        },
        {
          name: "In'Sens Sourcing",
          kind: 'Sourcing',
          quote: 'The inbox no longer runs our day.',
          desc: 'Supplier triage, RFQ automation, deadline tracking. Inbox to pipeline in one click.',
          stack: ['Pipeline', 'Email', 'Docs']
        }
      ]
    },
    process: {
      eyebrow: 'How we work',
      h2a: 'Three steps.',
      h2b: 'No account managers.',
      sub: 'You talk to the people building the thing, from the first call to the launch and after. No hand-offs, no layers, no decks.',
      steps: [
        {
          title: 'Discovery call',
          duration: '30 min · free',
          desc: 'We get on a call, understand your operation, your bottlenecks, the tools you already use. You leave with a clear scope. Not a pitch deck.'
        },
        {
          title: 'Build sprint',
          duration: '2 to 3 weeks',
          desc: 'We design and ship your system end-to-end. You see progress daily on WhatsApp. We launch when it actually works.'
        },
        {
          title: 'Monthly care',
          duration: 'Optional · cancel anytime',
          desc: 'We stay on to evolve it with your business. New dashboards, new automations, fixes. Same two people. No ticket queues.'
        }
      ]
    },
    whoFor: {
      eyebrow: 'Who we work with',
      h2a: 'Owner-operators.',
      h2b: 'Not pitch decks.',
      sub: 'We stay small on purpose. We can only take a few projects at a time, and we say no to anything that doesn’t fit.',
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
        'You need a full rebrand or a 60-page strategy deck. That’s a different agency.'
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      h2a: 'The four',
      h2b: 'we always get.',
      sub: 'No fluff answers. If yours isn’t here, just ask.',
      askMore: 'Got another one? Ask us directly',
      items: [
        {
          q: 'How long does it take?',
          a: 'Discovery call to launch is typically 3 to 4 weeks for an initial build. Bigger scopes get split into phases so you see something working in week one.'
        },
        {
          q: 'What does it cost?',
          a: 'Scope-based. We quote a real number after the discovery call once we’ve understood what you actually need. Most first builds land in the low to mid four figures (€). Monthly care after launch is optional, month-to-month, cancel anytime.'
        },
        {
          q: 'What if I’m not sure what I need?',
          a: 'That’s literally what the discovery call is for. Bring the bottleneck ("the booking flow is messy", "I drown in DMs", "I have no idea what my dashboard should show") and we’ll bring the scope.'
        },
        {
          q: 'What happens if I want to leave?',
          a: 'You own everything we build. Code, dashboards, accounts, automations: all transferable. Monthly care is month-to-month, no lock-in. We hand it over cleanly if you decide to take it in-house.'
        }
      ]
    },
    contact: {
      eyebrow: 'Get in touch',
      founderNote: 'Hi, I’m Alex. I read every message personally and reply within 24 hours.',
      h2a: 'Tell us where',
      h2b: 'it’s stuck.',
      sub: 'One sentence is enough. We reply within 24 hours with a free 5-minute audit of one thing we can automate this week. No strings, no deck.',
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
        sub: 'Drop your email. Within 24 hours we’ll send a 5-minute audit of one thing we can automate for you. No call, no deck, no strings.',
        emailPh: 'you@brand.com',
        cta: 'Send it my way',
        skip: 'No thanks',
        sentTitle: 'Email on the way.',
        sentBody: 'We opened a message in your mail app. Hit send and we reply within 24 hours.',
        mailSubject: 'Audit request',
        mailBody: (email: string) =>
          `Hi Customy,\n\nI saw the site and I'd like the free audit you mentioned.\n\nReach me at ${email}.`
      },
      footerLocation: 'Remote',
      footerRemote: 'Remote worldwide',
      footerTagline: 'Every business is unique, yours should be too.',
      footerNav: {
        services: 'Services',
        software: 'Case study',
        automation: 'Automation',
        clients: 'Clients',
        contact: 'Contact'
      },
      legalNote: 'By contacting us you agree to our',
      privacyLabel: 'Privacy',
      termsLabel: 'Terms'
    },
    cookies: {
      eyebrow: 'Cookie preferences',
      body: 'We use a few tools to understand which content works and to improve the site. You decide what runs. Necessary tools always work.',
      readMore: 'Read our privacy policy',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      customize: 'Customize',
      savePrefs: 'Save preferences',
      close: 'Close',
      necessaryLabel: 'Necessary',
      necessaryDesc: 'Required for the site to work (theme preference, your consent choice).',
      analyticsLabel: 'Analytics',
      analyticsDesc: 'Anonymous page views, scroll depth, and heatmaps so we can improve the page (Google Analytics, Microsoft Clarity).',
      marketingLabel: 'Marketing',
      marketingDesc: 'Ad attribution if you arrived from a paid campaign (Meta Pixel, TikTok Pixel).'
    }
  },

  fr: {
    nav: {
      services: 'Services',
      software: 'Étude de cas',
      automation: 'Automation',
      clients: 'Clients',
      contact: 'Contact',
      cta: 'Voir si on peut bosser ensemble'
    },
    inlineCta: {
      services: 'Parlons de votre projet',
      software: 'Vous voulez un setup comme ça',
      testimonials: 'Parlez-nous du vôtre',
      whoFor: 'Sur la balance ? Écrivez-nous, on vous dira honnêtement'
    },
    marquee: {
      header: 'Choisis par des studios, restaurants et créateurs'
    },
    automation: {
      eyebrow: 'Étude de cas · Inka Spa Bali',
      h2a: 'Comment Inka Spa a',
      h2b: 'arrêté de perdre des pistes la nuit.',
      sub: 'Construit pour un studio bien-être. Il qualifie les pistes, répond aux FAQ et bloque les créneaux en anglais, français et indonésien, pendant que la propriétaire dort. Des systèmes similaires tournent sur Telegram, Messenger et Instagram pour d’autres clients.',
      mockTag: 'Exemple',
      features: [
        { title: 'Répond dans leur voix', desc: 'Entraîné sur le menu, les services, le ton des réponses passées. Ça parle comme la proprio, pas comme un chatbot.' },
        { title: 'Bloque les créneaux', desc: 'Vérifie les dispos, propose une fenêtre, confirme la réservation. La proprio n’intervient que si le client demande quelque chose d’inhabituel.' },
        { title: 'Multi-langues, 24/7', desc: 'EN, FR, ID dans un seul flux. Détecte la langue du client et répond en conséquence. Même assistant, même numéro.' },
        { title: 'Debrief quotidien', desc: 'Chaque matin, un résumé de ce qui a été traité, ce qui demande un humain, ce qu’il faut livrer ensuite.' }
      ],
      cta: 'Démarrer un projet'
    },
    hero: {
      eyebrow: 'Studio marketing & IA sur mesure',
      h1a: 'Chaque business est unique,',
      h1b: 'le vôtre devrait l’être aussi.',
      sub: 'Pas de template. Pas de pack tout-fait. On dessine chaque système autour de la façon dont votre business tourne vraiment, et on reste assez proches pour le faire évoluer avec vous.',
      ctaPrimary: 'Démarrer un projet',
      engagement: 'Premier appel offert · Sprints dès 2 semaines · Suivi mensuel après livraison',
      ctaSecondary: 'Grow your brand',
      mockTitle: 'Exemple de dashboard conçu pour un restaurant client',
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
      sub: 'Choisissez les briques qui collent à votre business : site, dashboard, automatisations, moteur de contenu. Chacune est dessinée pour votre opération, pas tirée d’une étagère.',
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
          title: 'Pubs & SEO',
          desc: 'Meta, Google et TikTok pour l’acquisition payante. SEO on-page, technique et contenu pour la visibilité organique. Optimisation chaque semaine par notre équipe. On garde ce qui marche, on coupe le reste.',
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
    clients: {
      eyebrow: 'On construit en ce moment avec',
      h2a: 'De vraies marques,',
      h2b: 'de vrais systèmes.',
      sub: 'Aucun build ne ressemble à un autre. Chaque setup ci-dessous a été dessiné de zéro autour de la façon dont l’équipe travaille vraiment.',
      items: [
        {
          name: 'My Cocotte',
          kind: 'Restaurant',
          quote: 'Le rapport hebdo prenait une demi-journée. Maintenant il s’écrit tout seul à 6h.',
          desc: 'Un dashboard clair et une chaîne Instagram. Remplace quatre outils et deux heures d’admin par jour.',
          stack: ['Dashboard', 'Instagram', 'Caisse']
        },
        {
          name: 'Dylan',
          kind: 'Marque perso, international',
          quote: 'Je brief une fois par semaine. Le contenu sort, dans ma voix.',
          desc: 'Moteur de contenu IA. Idées, scripts, légendes, planning. Calé sur la voix de la marque.',
          stack: ['Assistant IA', 'Planning', 'Analytics']
        },
        {
          name: 'Inka Spa Bali',
          kind: 'Bien-être',
          quote: 'Mon téléphone sonne moins. Mon agenda se remplit plus.',
          desc: 'Assistant WhatsApp qui qualifie les pistes, répond en trois langues, confirme les RDV.',
          stack: ['WhatsApp', 'Agenda', 'CRM']
        },
        {
          name: 'Temple Spa Bali',
          kind: 'Spa',
          quote: 'Le suivi se fait tout seul. Les clients reviennent.',
          desc: 'Parcours post-visite automatisé. Remerciements, demandes d’avis, abonnements, relances.',
          stack: ['Automatisation', 'Email', 'Avis']
        },
        {
          name: 'Skyrol',
          kind: 'Solution voyage, à distance',
          quote: 'On ne perd plus de pistes dans les trous entre les outils.',
          desc: 'Tunnel complet câblé. Tracking, nurturing, checkout, reporting. Chaque étape visible.',
          stack: ['Analytics', 'Email', 'Checkout']
        },
        {
          name: 'Natura Organics',
          kind: 'Marque bio',
          quote: 'Nos meilleurs clients reviennent tout seuls.',
          desc: 'Abonnements, parcours post-achat, boucles d’avis. La machine à fidéliser, câblée.',
          stack: ['Abonnements', 'Email', 'Avis']
        },
        {
          name: "In'Sens Sourcing",
          kind: 'Sourcing',
          quote: 'La boîte mail ne dirige plus la journée.',
          desc: 'Tri fournisseurs, RFQ automatisés, suivi des deadlines. Mail vers pipeline en un clic.',
          stack: ['Pipeline', 'Email', 'Docs']
        }
      ]
    },
    process: {
      eyebrow: 'Notre façon de bosser',
      h2a: 'Trois étapes.',
      h2b: 'Zéro account manager.',
      sub: 'Vous parlez aux gens qui construisent, du premier appel au lancement et après. Pas de passage de témoin, pas d’étages, pas de decks.',
      steps: [
        {
          title: 'Appel de découverte',
          duration: '30 min · offert',
          desc: 'On fait le point sur votre opération, vos goulots, les outils que vous utilisez déjà. Vous repartez avec un scope clair. Pas un pitch deck.'
        },
        {
          title: 'Sprint de build',
          duration: '2 à 3 semaines',
          desc: 'On conçoit et livre votre système de bout en bout. Vous voyez l’avancement chaque jour sur WhatsApp. On lance quand ça marche.'
        },
        {
          title: 'Suivi mensuel',
          duration: 'Optionnel · résiliable à tout moment',
          desc: 'On reste pour faire évoluer le système avec votre business. Nouveaux dashboards, nouvelles automatisations, correctifs. Mêmes deux personnes. Pas de file de tickets.'
        }
      ]
    },
    whoFor: {
      eyebrow: 'Avec qui on bosse',
      h2a: 'Des patrons d’entreprise.',
      h2b: 'Pas des pitch decks.',
      sub: 'On reste petits exprès. On prend peu de projets à la fois, et on dit non à tout ce qui ne colle pas.',
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
        'Il vous faut un rebrand complet ou un deck de stratégie sur 60 pages. C’est une autre agence.'
      ]
    },
    faq: {
      eyebrow: 'FAQ',
      h2a: 'Les quatre',
      h2b: 'qu’on entend toujours.',
      sub: 'Réponses sans détour. Si la vôtre n’y est pas, demandez.',
      askMore: 'Une autre question ? Écrivez-nous',
      items: [
        {
          q: 'Combien de temps ça prend ?',
          a: 'De l’appel découverte au lancement, comptez 3 à 4 semaines pour un premier build. Les scopes plus gros sont découpés en phases : vous voyez quelque chose tourner dès la première semaine.'
        },
        {
          q: 'Combien ça coûte ?',
          a: 'Tarif sur mesure. On chiffre après l’appel découverte, une fois qu’on a compris ce qu’il vous faut vraiment. La plupart des premiers builds tombent dans les bas/moyens quatre chiffres (€). Le suivi mensuel est optionnel, sans engagement, résiliable à tout moment.'
        },
        {
          q: 'Et si je ne sais pas ce qu’il me faut ?',
          a: 'C’est exactement à ça que sert l’appel découverte. Amenez le goulot (« la prise de RDV est le bordel », « je crève sous les DM », « je sais pas ce que devrait montrer mon dashboard »), on apporte le scope.'
        },
        {
          q: 'Et si je veux partir ?',
          a: 'Tout ce qu’on construit vous appartient. Code, dashboards, comptes, automatisations : tout est transférable. Le suivi mensuel est sans engagement. On vous remet tout proprement si vous décidez de tout reprendre en interne.'
        }
      ]
    },
    contact: {
      eyebrow: 'Parlons-en',
      founderNote: 'Salut, c’est Alex. Je lis chaque message moi-même et je réponds sous 24 h.',
      h2a: 'Dites-nous',
      h2b: 'où ça coince.',
      sub: 'Une phrase suffit. On répond sous 24 h avec un audit gratuit de 5 minutes sur une chose qu’on peut automatiser cette semaine. Sans engagement, sans deck.',
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
        sub: 'Laissez votre email. Sous 24 h, on vous envoie un audit de 5 minutes sur une chose qu’on peut automatiser pour vous. Pas d’appel, pas de deck, sans engagement.',
        emailPh: 'vous@marque.com',
        cta: 'Envoyez-moi ça',
        skip: 'Non merci',
        sentTitle: 'Email prêt.',
        sentBody: 'On a ouvert un message dans votre boîte mail. Cliquez envoyer, on répond sous 24 h.',
        mailSubject: 'Demande d’audit',
        mailBody: (email: string) =>
          `Bonjour Customy,\n\nJ’ai vu le site et j’aimerais l’audit gratuit que vous proposez.\n\nVous pouvez me joindre à ${email}.`
      },
      footerLocation: 'À distance',
      footerRemote: 'À distance, partout',
      footerTagline: 'Chaque business est unique, le vôtre devrait l’être aussi.',
      footerNav: {
        services: 'Services',
        software: 'Étude de cas',
        automation: 'Automatisation',
        clients: 'Clients',
        contact: 'Contact'
      },
      legalNote: 'En nous contactant, vous acceptez nos',
      privacyLabel: 'Politique de confidentialité',
      termsLabel: 'Conditions'
    },
    cookies: {
      eyebrow: 'Préférences cookies',
      body: 'On utilise quelques outils pour comprendre ce qui fonctionne et améliorer le site. C’est vous qui décidez ce qui s’active. Les outils nécessaires fonctionnent toujours.',
      readMore: 'Lire notre politique de confidentialité',
      acceptAll: 'Tout accepter',
      rejectAll: 'Tout refuser',
      customize: 'Personnaliser',
      savePrefs: 'Enregistrer',
      close: 'Fermer',
      necessaryLabel: 'Nécessaires',
      necessaryDesc: 'Indispensables au fonctionnement du site (thème, votre choix de consentement).',
      analyticsLabel: 'Statistiques',
      analyticsDesc: 'Vues de pages anonymes, profondeur de scroll et heatmaps pour améliorer la page (Google Analytics, Microsoft Clarity).',
      marketingLabel: 'Marketing',
      marketingDesc: 'Attribution publicitaire si vous arrivez depuis une campagne payante (Pixel Meta, Pixel TikTok).'
    }
  }
} as const

export type Dict = typeof translations['en']
