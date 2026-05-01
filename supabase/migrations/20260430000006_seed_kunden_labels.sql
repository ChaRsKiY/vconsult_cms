INSERT INTO content (section, key, lang, value) VALUES
  ('kunden', 'kundenLabel',  'de', 'Kunden'),
  ('kunden', 'partnerLabel', 'de', 'Partner'),
  ('kunden', 'kundenLabel',  'en', 'Clients'),
  ('kunden', 'partnerLabel', 'en', 'Partners')
ON CONFLICT (section, key, lang) DO NOTHING;
