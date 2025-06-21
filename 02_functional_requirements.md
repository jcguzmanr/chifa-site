# Functional Requirements - MVP Chifa Fusión

## User Stories Prioritizadas

### Epic 1: Experiencia de Reserva
**Como** cliente potencial  
**Quiero** reservar mesa online con disponibilidad en tiempo real  
**Para** asegurar mi experiencia gastronómica sin llamadas telefónicas

#### Criterios de Aceptación
- [ ] Calendario visual con slots disponibles por día/hora
- [ ] Formulario con validación (nombre, teléfono, email, PAX, comentarios)
- [ ] Confirmación automática vía email + SMS opcional
- [ ] Integración con Google Calendar del restaurante
- [ ] Política de cancelación clara (24h antes)

#### Definition of Done
- [ ] Tests unitarios >85% coverage
- [ ] Responsive design validado en 3 dispositivos
- [ ] Accesibilidad WCAG 2.2 AA certificada
- [ ] Performance score >90 (PageSpeed Insights)
- [ ] RGPD compliance: consentimiento explícito datos personales

---

### Epic 2: Pedido Online / Delivery
**Como** cliente registrado  
**Quiero** realizar pedidos online con tracking en tiempo real  
**Para** disfrutar Chifa Fusión desde casa con experiencia premium

#### Criterios de Aceptación
- [ ] Catálogo filtrable (vegetariano, picante, sin gluten, precios)
- [ ] Carrito persistente con modificaciones de platos
- [ ] Estimación de tiempo de entrega dinámica por ubicación
- [ ] Múltiples métodos de pago (tarjeta, PayPal, Bizum)
- [ ] Notificaciones push del estado del pedido

#### Definition of Done
- [ ] Integración pasarela PCI DSS compliant
- [ ] Cálculo automático delivery fee por zona
- [ ] Email transaccional con invoice PDF
- [ ] Sistema de rating post-entrega
- [ ] Logs auditables para soporte al cliente

---

### Epic 3: Catálogo Digital Dinámico
**Como** visitante del sitio  
**Quiero** explorar la carta con información detallada de cada plato  
**Para** tomar decisiones informadas sobre mi experiencia culinaria

#### Criterios de Aceptación
- [ ] Galería de imágenes HD por plato (min. 3 ángulos)
- [ ] Descripción detallada: ingredientes, técnica, maridaje sugerido
- [ ] Iconografía clara: alérgenos, nivel de picante, origen del plato
- [ ] Disponibilidad en tiempo real (agotado/disponible)
- [ ] Precios dinámicos según temporada de ingredientes

#### Definition of Done
- [ ] CDN configurado para optimización de imágenes
- [ ] Schema markup para rich snippets en Google
- [ ] Lazy loading implementado
- [ ] Traducción ES/EN/CA mediante i18n
- [ ] Sincronización automática con sistema POS

## Restricciones Legales y Compliance

### RGPD (Reglamento General de Protección de Datos)

#### Datos Personales Recopilados
- **Identificación**: Nombre, apellidos, email, teléfono
- **Preferencias**: Historial de pedidos, alergias, comentarios
- **Técnicos**: IP, cookies, tiempo de sesión

#### Derechos del Usuario
- [ ] **Acceso**: Descarga de datos personales en formato JSON
- [ ] **Rectificación**: Edición inline de perfil de usuario
- [ ] **Supresión**: Eliminación completa con confirmación 2FA
- [ ] **Portabilidad**: Exportación compatible con competidores
- [ ] **Oposición**: Opt-out de marketing con un clic

### LSSI-CE (Ley de Servicios de la Sociedad de la Información)

#### Información Legal Obligatoria
- [ ] Identificación completa de la empresa (razón social, NIF, domicilio)
- [ ] Registro Mercantil y datos registrales
- [ ] Política de Privacidad accesible desde cualquier página
- [ ] Condiciones de Uso específicas para e-commerce
- [ ] Información sobre cookies con gestión granular

#### Cookies y Consentimiento
- [ ] **Estrictamente necesarias**: Sesión, carrito, preferencias idioma
- [ ] **Analíticas**: Google Analytics 4 con IP anonimizada
- [ ] **Marketing**: Meta Pixel, Google Ads con consentimiento explícito
- [ ] **Funcionales**: Geolocalización para delivery, recordar filtros

### Normativa Alimentaria
- [ ] Declaración de alérgenos según Reglamento UE 1169/2011
- [ ] Información nutricional por 100g (platos principales)
- [ ] Certificados de proveedores (halal, bio, km0) cuando aplique
- [ ] Trazabilidad de ingredientes críticos (mariscos, frutos secos)

## Restricciones Técnicas del MVP

### Performance Requirements
- **Time to Interactive**: <3 segundos (conexión 3G)
- **First Contentful Paint**: <1.5 segundos
- **Largest Contentful Paint**: <2.5 segundos
- **Cumulative Layout Shift**: <0.1

### Browser Support
- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+, Samsung Internet 14+
- **Progressive Enhancement**: Funcionalidad básica sin JavaScript

### Escalabilidad
- **Usuarios concurrentes**: 500 (peak hours viernes/sábado)
- **Almacenamiento**: 50GB inicial (imágenes + backup)
- **CDN**: Distribución europea con edge locations en ES/FR/IT 