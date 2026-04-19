# Integración Supabase — TRIBU

## Servicios Supabase a usar
- **Database (Postgres)**: tablas principales, RLS.
- **Auth**: registro, OAuth, email, magic links.
- **Storage**: fotos de perfil y media de chats (si aplica).
- **Realtime**: sincronización de chats/estados.
- **Edge Functions**: lógica serverless (webhooks, procesos cortos).
- **Dashboard**: administración y acceso a datos.

## RLS (Row Level Security) — recomendaciones
- Habilitar RLS en tablas sensibles (messages, profiles, swipes).
- Reglas ejemplo:
  - `profiles`: owner puede `SELECT/UPDATE`, others SELECT limited fields.
  - `messages`: only participants can SELECT/INSERT.
  - `swipes`: only owner can SELECT/INSERT for own actions (or backend writes).
- Usar Supabase policies para proteger endpoints directos desde frontend.

## Flujos comunes con Supabase
### Registro y primer perfil
1. Frontend → Supabase Auth: signUp(email, pass)
2. Supabase emite confirmación por email
3. Frontend → API/Prisma crea perfil base (o el frontend llama PostgREST para insertar perfil ligado al auth.uid)
4. Usuario sube foto a Storage → recibe signed URL

### Swipe → Match → Chat (simplificado)
1. Usuario A da `like` a B → se inserta fila `swipes(user_a, user_b, type)`
2. Sistema revisa si existe swipe inverso (B→A) → si existe, crea `matches(user_a,user_b)`
3. Notificar ambos (Realtime / Edge Function)
4. Chat habilitado (mensajes en `messages` table), realtime via Supabase

## Storage best practices
- Carpeta por usuario: `avatars/{userId}/...`
- URLs firmadas (signed URLs) para upload/download temporales.
- Thumbnails generados en Edge Function (opcional).

## Realtime
- Usar Realtime para:
  - sincronizar estado "online"
  - nuevos mensajes
  - notificaciones de match
- Para cargas muy altas, evaluar complementar con un servidor WebSocket dedicado.

## Copias de seguridad y migraciones
- Usar `pg_dump` periódicamente (aunque Supabase ofrece backups).
- Usar Prisma migrations localmente y aplicar a la DB.
