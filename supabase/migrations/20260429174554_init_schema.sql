-- vconsult CMS schema

-- Page content (inline editor)
create table if not exists content (
  section text not null,
  key     text not null,
  lang    text not null,
  value   text not null default '',
  primary key (section, key, lang)
);

-- Blog articles
create table if not exists articles (
  id                uuid        primary key default gen_random_uuid(),
  title             text        not null,
  slug              text        not null unique,
  category          text        not null default '',
  tags              text[]      not null default '{}',
  date              date        not null default current_date,
  image_url         text,
  short_description text        not null default '',
  content           text        not null default '',
  published         boolean     not null default false,
  order_num         integer     not null default 0,
  created_at        timestamptz not null default now()
);

create index if not exists articles_order_idx on articles (order_num);
create index if not exists articles_published_idx on articles (published);

-- Clients
create table if not exists kunden (
  id            uuid        primary key default gen_random_uuid(),
  name          text        not null,
  industry      text        not null default '',
  display_order integer     not null default 0,
  active        boolean     not null default true,
  created_at    timestamptz not null default now()
);

create index if not exists kunden_order_idx on kunden (display_order);

-- Contact form submissions
create table if not exists contact_submissions (
  id           uuid        primary key default gen_random_uuid(),
  firstname    text        not null default '',
  lastname     text        not null default '',
  email        text        not null,
  message      text,
  lang         text        not null default 'de',
  read         boolean     not null default false,
  created_at   timestamptz not null default now(),
  ip           text,
  browser_lang text,
  screen       text,
  referrer     text,
  user_agent   text
);

create index if not exists submissions_read_idx on contact_submissions (read);
create index if not exists submissions_created_idx on contact_submissions (created_at desc);

-- RLS: enable row level security on all tables
alter table content             enable row level security;
alter table articles            enable row level security;
alter table kunden              enable row level security;
alter table contact_submissions enable row level security;

-- Policies: authenticated users (admin panel) can do everything
create policy "auth full access" on content             for all to authenticated using (true) with check (true);
create policy "auth full access" on articles            for all to authenticated using (true) with check (true);
create policy "auth full access" on kunden              for all to authenticated using (true) with check (true);
create policy "auth full access" on contact_submissions for all to authenticated using (true) with check (true);

-- Submissions: anon can insert (contact form on vconsult.at)
create policy "anon insert" on contact_submissions for insert to anon with check (true);
