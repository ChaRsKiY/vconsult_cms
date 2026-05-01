-- Seed philosophiePage content DE + EN
INSERT INTO content (section, key, lang, value) VALUES
  -- DE
  ('philosophiePage', 'title',          'de', 'Unsere Philosophie'),
  ('philosophiePage', 'description',    'de', 'Erzielen die intensiven IT-Investitionen den gewünschten Erfolg?'),
  ('philosophiePage', 'breadcrumb',     'de', 'Philosophie'),
  ('philosophiePage', 'p1',             'de', 'Diese Frage stellen sich viele Manager und Mitarbeiter. Häufig wird der Nutzen von IT-Lösungen im Verhältnis zum investierten Kapital als unzureichend eingeschätzt. Die Ursache liegt dabei meist in der mangelnden Verzahnung von Geschäfts- und IT-Strategie. Diese Diskrepanz beginnt oft bereits in der Planungsphase und setzt sich in der Umsetzung fort. Das Ergebnis sind hohe Investitionen (oft höher als geplant) bei gleichzeitig zu geringem Mehrwert.'),
  ('philosophiePage', 'quoteTitle',     'de', 'merging business & it'),
  ('philosophiePage', 'quoteText',      'de', 'Unser Consulting-Leitsatz der Verschmelzung von „Business" und „IT" („Merging Business and IT") wirkt diesem Problem entgegen und garantiert einen hohen ROI Ihrer IT-Investitionen.'),
  ('philosophiePage', 'p2',             'de', 'Wir helfen unseren Kunden den Nutzen (ROI) Ihrer IT-Lösungen zu optimieren, indem wir Unternehmensberatung und IT-Beratung miteinander verschmelzen. Zudem wenden wir ein integratives Change- und Projektmanagement an. Unsere Spezialisten analysieren gemeinsam mit Ihnen Ihre Logistikprozesse, erstellen ein Konzept (Blueprint) und setzen es erfolgreich bis hin zur Software um. Die Nachhaltigkeit und der Erfolg der gemeinsam erarbeiteten Lösungen sind somit garantiert.'),
  ('philosophiePage', 'cta',            'de', 'Wir unterstützen Sie dabei, Ihr Business zu optimieren unter maximaler Nutzung der SAP Technologie. Setzen Sie sich mit uns in Verbindung.'),
  ('philosophiePage', 'workflow1Title', 'de', 'Analyse (Business)'),
  ('philosophiePage', 'workflow1Desc',  'de', 'Unsere Spezialisten analysieren gemeinsam mit Ihnen Ihre Logistikprozesse detailliert.'),
  ('philosophiePage', 'workflow2Title', 'de', 'Blueprint (Merging)'),
  ('philosophiePage', 'workflow2Desc',  'de', 'Wir erstellen ein integratives Konzept und verschmelzen die Unternehmens- und IT-Beratung.'),
  ('philosophiePage', 'workflow3Title', 'de', 'Umsetzung (IT)'),
  ('philosophiePage', 'workflow3Desc',  'de', 'Erfolgreiche Umsetzung in der SAP Software unter Einsatz von Change- und Projektmanagement.'),

  -- EN
  ('philosophiePage', 'title',          'en', 'Our Philosophy'),
  ('philosophiePage', 'description',    'en', 'Are intensive IT investments generating the desired success?'),
  ('philosophiePage', 'breadcrumb',     'en', 'Philosophy'),
  ('philosophiePage', 'p1',             'en', 'Many managers and employees ask themselves this question. The benefit of IT solutions relative to the invested capital is frequently assessed as insufficient. The cause usually lies in the insufficient interlocking of business and IT strategy. This discrepancy often begins in the planning phase and continues into implementation. The result is high investment (often higher than planned) with simultaneously too little added value.'),
  ('philosophiePage', 'quoteTitle',     'en', 'merging business & it'),
  ('philosophiePage', 'quoteText',      'en', 'Our consulting guiding principle of merging "Business" and "IT" ("Merging Business and IT") counteracts this problem and guarantees a high ROI on your IT investments.'),
  ('philosophiePage', 'p2',             'en', 'We help our clients optimize the benefits (ROI) of their IT solutions by merging business consulting and IT consulting. We also apply integrative change and project management. Our specialists analyze your logistics processes together with you, create a concept (blueprint) and successfully implement it all the way to the software. The sustainability and success of the jointly developed solutions are thereby guaranteed.'),
  ('philosophiePage', 'cta',            'en', 'We support you in optimizing your business with maximum use of SAP technology. Get in touch with us.'),
  ('philosophiePage', 'workflow1Title', 'en', 'Analysis (Business)'),
  ('philosophiePage', 'workflow1Desc',  'en', 'Our specialists analyze your logistics processes in detail together with you.'),
  ('philosophiePage', 'workflow2Title', 'en', 'Blueprint (Merging)'),
  ('philosophiePage', 'workflow2Desc',  'en', 'We create an integrative concept and merge business and IT consulting.'),
  ('philosophiePage', 'workflow3Title', 'en', 'Implementation (IT)'),
  ('philosophiePage', 'workflow3Desc',  'en', 'Successful implementation in SAP software using change and project management.')
ON CONFLICT (section, key, lang) DO NOTHING;

-- Seed kunden page header content DE + EN
INSERT INTO content (section, key, lang, value) VALUES
  ('kunden', 'title',       'de', 'Unsere Kunden & Partner'),
  ('kunden', 'description', 'de', 'Wir bündeln spezifisches Fachwissen und stellen dies unseren Kunden weltweit zur Verfügung.'),
  ('kunden', 'breadcrumb',  'de', 'Kunden'),
  ('kunden', 'moreCount',   'de', '+20 weitere'),
  ('kunden', 'moreLabel',   'de', 'Zufriedene Kunden weltweit'),

  ('kunden', 'title',       'en', 'Our Clients & Partners'),
  ('kunden', 'description', 'en', 'We pool specific expertise and make it available to our clients worldwide.'),
  ('kunden', 'breadcrumb',  'en', 'Clients'),
  ('kunden', 'moreCount',   'en', '+20 more'),
  ('kunden', 'moreLabel',   'en', 'Satisfied clients worldwide')
ON CONFLICT (section, key, lang) DO NOTHING;
