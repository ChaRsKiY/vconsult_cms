-- Add type, logo_url, website_url to kunden table
ALTER TABLE kunden ADD COLUMN IF NOT EXISTS type       text NOT NULL DEFAULT 'kunde' CHECK (type IN ('kunde', 'partner'));
ALTER TABLE kunden ADD COLUMN IF NOT EXISTS logo_url   text;
ALTER TABLE kunden ADD COLUMN IF NOT EXISTS website_url text;

-- Storage bucket for logos (safe to run multiple times via policy check)
INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', 'logos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anon to read logos
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'logos anon read'
  ) THEN
    EXECUTE 'CREATE POLICY "logos anon read" ON storage.objects FOR SELECT TO anon USING (bucket_id = ''logos'')';
  END IF;
END $$;

-- Allow authenticated to manage logos
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'logos auth manage'
  ) THEN
    EXECUTE 'CREATE POLICY "logos auth manage" ON storage.objects FOR ALL TO authenticated USING (bucket_id = ''logos'') WITH CHECK (bucket_id = ''logos'')';
  END IF;
END $$;
