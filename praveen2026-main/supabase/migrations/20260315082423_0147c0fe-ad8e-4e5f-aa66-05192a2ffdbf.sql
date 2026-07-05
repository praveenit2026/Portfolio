
-- Drop existing policy and recreate with anon role explicitly
DROP POLICY IF EXISTS "Allow public inserts" ON public.contact_messages;

CREATE POLICY "Allow anyone to insert contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
