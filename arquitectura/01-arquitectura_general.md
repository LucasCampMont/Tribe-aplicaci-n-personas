# Arquitectura General — TRIBU

Fecha: 2025-12-08  
Versión: 1.0

## Resumen ejecutivo
Tribu es una aplicación social basada en intereses y tribus, pensada para lanzar un MVP rápido con Supabase como backend gestionado y NestJS como backend de negocio (API + orquestación). El objetivo es priorizar velocidad de desarrollo, seguridad y escalabilidad para una persona o equipo pequeño.

## Principales componentes
- **Cliente Web:** Next.js (React) — interfaces, navegación, SSR opcional.
- **Cliente Móvil:** React Native (Expo) — acceso móvil nativo.
- **Backend de Aplicación:** NestJS — API REST, lógica de dominio, orquestación de servicios.
- **Persistencia y servicios gestionados:** Supabase (Postgres, Auth, Realtime, Storage).
- **ORM / Mapeo:** Prisma (schema y cliente).
- **Realtime / Chat:** Supabase Realtime (canales WAL) + opcional canal WebSocket en NestJS para orquestación avanzada.
- **Cache opcional:** Redis (si se necesita más rendimiento en recomendaciones).
- **CI/CD / Infra:** GitHub Actions (pipelines), Docker para local/prod (opcional).
- **Observabilidad:** Logs + Sentry (errores), Prometheus/Grafana o soluciones SaaS para métricas.

## Principios de diseño
- MVP-first: funcionalidades mínimas que entreguen valor.
- Seguridad por defecto: usar Supabase Auth y RLS (Row Level Security).
- Modularidad: backend por dominios (auth, users, tribes, match, chat, recommender).
- Escalabilidad: componentes desacoplados y enfocados en servicios gestionados.
- Menos DevOps: aprovechar Supabase free tier; añadir infra propia cuando sea necesario.

## Diagrama de alto nivel (texto)
Usuario (Web / Mobile)
    ↓ HTTPS (Auth)
    ↓
Frontend (Next.js / Expo)
    ↔ Supabase Auth (login, sesiones)
    ↔ Supabase REST / PostgREST (lecturas rápidas)
    ↔ Backend NestJS (API + lógica)
         ├─→ Prisma → Supabase Postgres
         ├─→ Realtime (via Supabase)
         └─→ Storage (Supabase)
