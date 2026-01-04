+----------------------+           +---------------------+          +-------------------+
|   Frontend (Web/M)   | <-------> |     Supabase        | <------>  |   Storage / CDN   |
|  Next.js / Expo app  |   HTTPS   |  Auth / Postgres /  |   HTTPS  |  (Images / Media) |
+----------------------+           |  Realtime / Storage |          +-------------------+
        |                                ^
        |                                |
        v                                |
+----------------------+                 |
|   Backend NestJS     | ----------------+
|  (API, Jobs, Orches.)|
+----------------------+
        |
        v
+----------------------+
|    Prisma Client     |
|    (connected to     |
|    Supabase Postgres)|
+----------------------+
