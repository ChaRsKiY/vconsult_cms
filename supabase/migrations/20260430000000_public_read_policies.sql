-- Allow anonymous (public) reads on content, articles, and kunden
-- Required by the Astro website which fetches with the anon key at build time

create policy "anon select" on content  for select to anon using (true);
create policy "anon select" on articles for select to anon using (published = true);
create policy "anon select" on kunden   for select to anon using (active = true);
