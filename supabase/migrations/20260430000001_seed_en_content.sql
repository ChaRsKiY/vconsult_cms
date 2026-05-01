-- Seed English content from en.ts defaults
-- Uses ON CONFLICT DO NOTHING so existing edits are never overwritten

insert into content (section, key, lang, value) values
  -- Hero
  ('hero', 'badge',        'en', 'vconsult.at'),
  ('hero', 'description',  'en', 'The connection between business strategy and technological excellence. With the mBaIT philosophy, we realize complex digital transformations with industrial precision.'),
  ('hero', 'ctaPrimary',   'en', 'Schedule a meeting'),
  ('hero', 'ctaSecondary', 'en', 'Our Philosophy'),

  -- Trust Bar
  ('trustBar', 'label', 'en', 'Trusted by global companies'),
  ('trustBar', 'logo1', 'en', 'Austrian'),
  ('trustBar', 'logo2', 'en', 'ÖBB'),
  ('trustBar', 'logo3', 'en', 'EVN'),
  ('trustBar', 'logo4', 'en', 'Red Bull'),
  ('trustBar', 'logo5', 'en', 'Voestalpine'),

  -- Philosophy
  ('philosophy', 'title',     'en', 'The mBaIT Philosophy'),
  ('philosophy', 'subtitle',  'en', 'We don''t just build the bridge between business and technology; we create a seamless integration that drives industrial excellence.'),
  ('philosophy', 'step1Title','en', 'Strategy & Planning'),
  ('philosophy', 'step1Desc', 'en', 'Defining the vision and aligning corporate goals with digital opportunities.'),
  ('philosophy', 'step2Title','en', 'The Bridge'),
  ('philosophy', 'step2Desc', 'en', 'The proprietary mBaIT framework for translating business requirements into IT specifications.'),
  ('philosophy', 'step3Title','en', 'Implementation & Scaling'),
  ('philosophy', 'step3Desc', 'en', 'Precise execution and ensuring long-term operational scalability.'),

  -- Services
  ('services', 'title',        'en', 'Precision Services'),
  ('services', 'subtitle',     'en', 'Tailored solutions for modern industrial companies — deep SAP expertise combined with innovative technologies.'),
  ('services', 'allLink',      'en', 'View all competencies'),
  ('services', 'card1Title',   'en', 'Logistics Optimization'),
  ('services', 'card1Desc',    'en', 'Maximum efficiency in your supply chain processes through deep industry-specific SAP integration.'),
  ('services', 'card1Feature1','en', 'EWM Implementation'),
  ('services', 'card1Feature2','en', 'TM Optimization'),
  ('services', 'card1Cta',     'en', 'Learn more'),
  ('services', 'card2Title',   'en', 'S/4HANA Migration'),
  ('services', 'card2Desc',    'en', 'Secure transition to the next generation. Comprehensive architecture blueprints and precise execution.'),
  ('services', 'card2Feature1','en', 'Custom Code Adaptation'),
  ('services', 'card2Feature2','en', 'Data Migration Cockpit'),
  ('services', 'card2Cta',     'en', 'Active Solution'),
  ('services', 'card2Badge',   'en', 'Focus'),
  ('services', 'card3Title',   'en', 'Enterprise AI'),
  ('services', 'card3Desc',    'en', 'Intelligent automation of your SAP landscape. From predictive analytics to autonomous processes.'),
  ('services', 'card3Feature1','en', 'Process Mining'),
  ('services', 'card3Feature2','en', 'Predictive Maintenance'),
  ('services', 'card3Cta',     'en', 'Discover AI'),

  -- Core Competencies
  ('coreCompetencies', 'title',     'en', 'Our SAP Core Competencies'),
  ('coreCompetencies', 'item1Title','en', 'SAP MM'),
  ('coreCompetencies', 'item1Desc', 'en', 'Transparent mapping of complete internal and external procurement processes for materials and services, including requirements planning and finance integration.'),
  ('coreCompetencies', 'item2Title','en', 'SAP EWM'),
  ('coreCompetencies', 'item2Desc', 'en', 'Flexible automated support for processing all goods movements and managing inventories in your warehouse complex.'),
  ('coreCompetencies', 'item3Title','en', 'SAP WMS'),
  ('coreCompetencies', 'item3Desc', 'en', 'Flexible automated support for processing all goods movements and managing inventories in your warehouse complex.'),
  ('coreCompetencies', 'item4Title','en', 'SAP PP'),
  ('coreCompetencies', 'item4Desc', 'en', 'Efficient design of your production planning, execution, and control processes.'),
  ('coreCompetencies', 'item5Title','en', 'SAP SD'),
  ('coreCompetencies', 'item5Desc', 'en', 'Mapping of all operational processes related to the sale of products or services.'),
  ('coreCompetencies', 'item6Title','en', 'SAP S/4HANA'),
  ('coreCompetencies', 'item6Desc', 'en', 'The next-generation ERP business suite based on powerful in-memory technology.'),
  ('coreCompetencies', 'item7Title','en', 'SAP SRM'),
  ('coreCompetencies', 'item7Desc', 'en', 'Innovative methods for coordinating business processes with key suppliers to increase efficiency.'),
  ('coreCompetencies', 'item8Title','en', 'SAP BW/4HANA'),
  ('coreCompetencies', 'item8Desc', 'en', 'Tools for reporting, analysis, and interpretation of corporate data for market-driven decision-making.'),

  -- Blog
  ('blog', 'title', 'en', 'Latest Articles'),

  -- CTA
  ('cta', 'title',        'en', 'Ready for the next industrial revolution?'),
  ('cta', 'subtitle',     'en', 'Let''s build your corporate bridge together. Join the market leaders in industrial precision.'),
  ('cta', 'ctaPrimary',   'en', 'Schedule a workshop'),
  ('cta', 'ctaSecondary', 'en', 'Download whitepaper'),

  -- Footer
  ('footer', 'description', 'en', 'Leading SAP and consulting firm specializing in IT transformations at industrial scale and logistics optimization. Headquartered in Vienna, active worldwide.'),
  ('footer', 'copyright',   'en', '© 2024 vconsult GmbH. All rights reserved. Industrial-quality consulting.')

on conflict (section, key, lang) do nothing;
