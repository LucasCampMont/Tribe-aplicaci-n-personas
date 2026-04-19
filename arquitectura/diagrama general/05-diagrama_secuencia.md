User A  -> Frontend: click like on User B
Frontend -> Backend API (or Supabase insert): POST /swipes {a,b,like}
Backend/API -> Database: insert swipe
Database -> (trigger/check) -> if swipe inverse exists
if match:
    Database -> create match record
    Database -> emit event (realtime / trigger / edge function)
    Realtime -> notify User A and User B (socket / Supabase)
    Users -> open chat (messages table)
