# 📘 Requerimientos Funcionales — TRIBU

Documento basado en los archivos:
- arquitectura_general.docx
- módulos app.docx

---

# 1. Autenticación

- RF-1.1 El sistema debe permitir registro con correo y contraseña. 
- RF-1.2 El sistema debe permitir inicio de sesión mediante Supabase Auth (email/password). 
- RF-1.3 El sistema debe validar correos duplicados.
- RF-1.4 El sistema debe permitir recuperación de contraseña.
- RF-1.5 El sistema debe requerir verificación de correo electrónico.
- RF-1.6 El sistema debe mantener sesiones seguras (JWT / Supabase).
- RF-1.7 El sistema debe cerrar sesión correctamente.

---

# 2. Perfil de Usuario

- RF-2.1 El usuario debe crear y editar su perfil.
- RF-2.2 Debe subir fotografías (mínimo 1, máximo definido).
- RF-2.3 El perfil debe incluir: edad, género, ubicación, bio corta.
- RF-2.4 El usuario debe seleccionar intereses desde una lista.
- RF-2.5 El usuario debe seleccionar una tribu principal. (de los mismos intereses)
- RF-2.6 El usuario puede seleccionar tribus secundarias (opcional).
- RF-2.7 El usuario debe poder eliminar fotos.
- RF-2.8 El usuario debe poder actualizar su ubicación.
- RF-2.9 El sistema debe almacenar las preferencias del usuario para recomendaciones.
- RF-2.6 El usuario puede integrar sus plataformas y redes sociales para subir videos y fotos.

---

# 3. Intereses y Tribus

- RF-3.1 El sistema debe proveer una lista de intereses organizados por categorías.
- RF-3.2 El usuario debe asociarse a una tribu principal. NO OBLIGATORIO
- RF-3.3 El usuario puede seleccionar tribus secundarias. 
- RF-3.4 El sistema debe mostrar intereses relevantes según la tribu. Solo perfiles
- RF-3.5 El usuario puede modificar sus tribus e intereses. 
- RF-3.6 La tribu principal debe influir en las recomendaciones.
- RF-3.7 El sistema debe mostrar etiquetas rápidas (tags).
- RF-3.8 Debe existir un selector inteligente sugerido por afinidad.
- RF-3.9 Posibilidad de integrar redes sociales (opcional y supervisado).

---

# 4. Descubrimiento (Swipes)

- RF-4.1 El sistema debe mostrar perfiles recomendados (feed/swipe).
- RF-4.2 Debe soportar interacción de “like” y “dislike”. (SuperLike igual)
- RF-4.3 El usuario debe poder filtrar por:
  - distancia
  - edad
  - tribu
  - intereses
  - características
  - personalidad
  - similitud facial IA
  - perfiles recomendados IA
- RF-4.4 El sistema debe registrar cada swipe.
- RF-4.5 El sistema debe evitar mostrar un usuario más de X veces (anti-spam).
- RF-4.6 El sistema debe excluir usuarios bloqueados.
- RF-4.7 El sistema debe permitir explorar sugerencias por categorías.
- RF-4.8 El sistema debe evitar mostrar usuarios que promocionan contenido erótico o productos ventas
---

# 5. Matches

- RF-5.1 El sistema debe crear un match cuando ambos usuarios se den “like”.
- RF-5.2 El usuario debe ver la lista de matches.
- RF-5.3 El usuario puede eliminar un match.
- RF-5.4 El usuario puede bloquear o reportar desde un match.
- RF-5.5 Debe notificarse al usuario cuando ocurre un nuevo match.

---

# 6. Conversaciones (Chat)

- RF-6.1 El chat debe funcionar en tiempo real.
- RF-6.2 El usuario debe poder enviar mensajes de texto.
- RF-6.3 El sistema debe mostrar si un usuario está “online”.
- RF-6.4 Debe mostrar indicador “escribiendo” y visto.
- RF-6.5 El sistema debe evitar spam.
- RF-6.6 El sistema debe almacenar historial de mensajes.
- RF-6.7 El usuario puede bloquear al otro dentro del chat.
- RF-6.8 Opcional (versión completa): envío de imágenes.
- RF-6.9 Opcional: notificaciones push.

---

# 7. Algoritmo de Recomendación

- RF-7.1 El sistema debe ordenar perfiles por afinidad.
- RF-7.2 El ranking debe considerar:
  - distancia
  - intereses en común
  - afinidad tribal
  - disponibilidad
  - preferencias del usuario
- RF-7.3 El sistema debe evitar mostrar usuarios repetidos.
- RF-7.4 El sistema debe balancear recomendaciones (género, preferencias).
- RF-7.5 El sistema debe excluir usuarios bloqueados o reportados.

---

# 8. Seguridad y Moderación

- RF-8.1 El usuario puede bloquear usuarios.
- RF-8.2 El usuario puede reportar comportamientos.
- RF-8.3 El sistema debe registrar actividad sospechosa.
- RF-8.4 El sistema debe manejar reportes para panel de moderación.
- RF-8.5 Debe existir protección contra spam y abuso.
- RF-8.6 Moderación de cuentas de promoción.

---

# 9. Suscripciones / Monetización (No MVP)

- RF-9.1 Plan premium ético sin ventajas injustas.
- RF-9.2 Boosts de visibilidad moderada.
- RF-9.3 Funciones IA:
  - traducción
  - corrección suave
  - sugerencias de rompehielo
  - resumen de perfil
- RF-9.4 Compra de elementos estéticos (stickers, temas).
- RF-9.5 Donaciones.

---

# 10. Panel Administrativo (Futuro)

- RF-10.1 Ver lista de usuarios.
- RF-10.2 Revisar reportes.
- RF-10.3 Estadísticas básicas.
- RF-10.4 Baneo y moderación.
