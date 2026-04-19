# 📙 Requerimientos No Funcionales — TRIBU

Basado en las necesidades del sistema descritas en los documentos.

---

# 1. Rendimiento

- RNF-1.1 El feed debe cargar en menos de 2 segundos.
- RNF-1.2 El chat debe actualizarse en tiempo real (< 200 ms).
- RNF-1.3 Las búsquedas y filtros deben ejecutarse en menos de 1 segundo.
- RNF-1.4 El algoritmo debe procesar recomendaciones en tiempo razonable.

---

# 2. Escalabilidad

- RNF-2.1 El sistema debe soportar crecimiento horizontal.
- RNF-2.2 Manejo eficiente de miles de conexiones simultáneas.
- RNF-2.3 El sistema debe ser desplegable en Supabase + contenedores.
- RNF-2.4 La arquitectura debe permitir integración futura de IA.

---

# 3. Seguridad

- RNF-3.1 Todas las operaciones deben estar protegidas por Supabase Auth.
- RNF-3.2 La base de datos debe usar RLS (Row Level Security).
- RNF-3.3 Cifrado de contraseñas con hashing seguro.
- RNF-3.4 Manejo correcto de tokens y sesiones.
- RNF-3.5 Protección contra spam y abuso.

---

# 4. Disponibilidad

- RNF-4.1 El sistema debe funcionar 24/7.
- RNF-4.2 El sistema debe tolerar fallos de uno o más componentes.
- RNF-4.3 El almacenamiento debe ser persistente.

---

# 5. Compatibilidad

- RNF-5.1 El frontend debe funcionar en los navegadores modernos.
- RNF-5.2 La app móvil debe funcionar en iOS y Android.
- RNF-5.3 La API debe ser RESTful y documentada.

---

# 6. Mantenibilidad

- RNF-6.1 El código debe seguir principios de modularidad.
- RNF-6.2 El backend debe tener arquitectura escalable.
- RNF-6.3 Uso de estándares: NestJS, Prisma, Supabase, React/Next.js.
