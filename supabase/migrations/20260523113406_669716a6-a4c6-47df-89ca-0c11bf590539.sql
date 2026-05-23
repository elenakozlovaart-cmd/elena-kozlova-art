-- Explicitly deny SELECT on price_requests for anon and authenticated roles.
-- Service role bypasses RLS and can still read submissions for admin purposes.
CREATE POLICY "Deny public reads of price requests"
ON public.price_requests
FOR SELECT
TO anon, authenticated
USING (false);