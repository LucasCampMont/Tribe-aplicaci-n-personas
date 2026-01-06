# Arquitectura — TRIBU

Esta carpeta contiene la documentación que describe cómo está diseñado TRIBU: diagramas, decisiones técnicas y la integración con Supabase.

Archivos principales:
- arquitectura_general.md
- arquitectura_backend.md
- arquitectura_supabase.md
- diagrama_sistema.txt

Objetivo:
Proveer la "fuente de la verdad" para desarrolladores sobre cómo implementar el sistema.

Siguientes pasos:
1. Crear el `schema.prisma` en `database/` basado en el modelo definido aquí.
2. Implementar módulos NestJS según los módulos listados.
3. Definir políticas RLS en Supabase antes de exponer endpoints públicos.
