# Arquitectura Backend — TRIBU (NestJS + Supabase)

## Objetivo
Definir responsabilidades del backend de aplicación y cómo interactúa con Supabase.

## Responsabilidades de NestJS
- Orquestar operaciones compuestas (ej: procesar swipe → crear evento → notificar).
- Implementar endpoints REST/GraphQL para el frontend cuando la lógica supera lo que conviene hacer directamente desde DB.
- Integración con servicios externos (pendiente: ML, servicios de verificación).
- Rutas seguras y validación.
- Jobs y workers (cola de eventos) — opcional para tareas pesadas (envío de emails, procesamiento de imágenes/IA).
- Políticas de negocio (p. ej. aplicar penalizaciones, reglas anti-spam).

## Micro-dominios (módulos NestJS)
- **Auth module**: delega a Supabase Auth; refresco de tokens, roles.
- **Users module**: sincronización de metadatos, profile management.
- **Tribes & Interests**: catálogo, CRUD, relaciones.
- **Discovery module**: endpoint para obtener recomendaciones (orquesta resultado de queries + cache).
- **Match module**: manejo de likes, creación de match, notificaciones.
- **Chat module**: orquestación del chat (persistencia en Postgres, uso de Supabase Realtime para sincronización).
- **Recommender**: reglas básicas en MVP; ML offline futuro.
- **Moderation**: reportes, bloqueo, logs.

## Comunicación entre NestJS y Supabase
- Lectura/escritura de datos: Prisma (cliente) conectado a la DB Postgres gestionada por Supabase.
- Eventos realtime: suscripción a canales Realtime (pub/sub) o triggers DB (webhooks / edge functions).
- Storage: gestión de subir/descargar imágenes via Supabase Storage signed URLs.

## API contract (alto nivel)
- `POST /api/auth/refresh` — refresco de sesión (si se maneja tokens en backend)
- `GET /api/discovery` — devuelve perfiles paginados para swipe (filtros: distancia, tribu, edad)
- `POST /api/swipe` — registra swipe (like/dislike)
- `GET /api/matches` — lista de matches
- `GET /api/chat/{matchId}` — historial de chat
- `POST /api/report` — crear reporte
- `GET /api/users/{id}` — perfil público (según reglas RLS)

(Estos endpoints son orientativos; muchos accesos se pueden hacer directo a Supabase desde el frontend cuando no requieren lógica adicional.)

## Jobs y tareas asíncronas
- Procesar imagen (optimización, validación) — background job
- Notificaciones (email, push) — background job
- Recalcular recomendaciones en batch — job programado

## Seguridad
- Validar todas las llamadas entrantes en NestJS con guardas (JWT / Supabase tokens).
- No almacenar contraseñas en backend (Supabase maneja auth).
- Roles: `anon`, `user`, `admin`. En Supabase: usar RLS policies.
