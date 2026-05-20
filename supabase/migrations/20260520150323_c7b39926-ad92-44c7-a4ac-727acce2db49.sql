create table public.price_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  contact text,
  artwork text,
  comment text,
  language text,
  created_at timestamptz not null default now()
);
alter table public.price_requests enable row level security;
create policy "anyone can insert price requests"
  on public.price_requests for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 200
    and char_length(email) between 3 and 320
    and (contact is null or char_length(contact) <= 200)
    and (artwork is null or char_length(artwork) <= 300)
    and (comment is null or char_length(comment) <= 4000)
  );