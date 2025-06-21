# Rules and Standards - Chifa Fusión

## Estándar de Código

### ESLint Configuration
```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "prefer-const": "error",
    "no-var": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling"],
      "newlines-between": "always"
    }]
  }
}
```

### Prettier Configuration
```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### Pre-commit Hooks (Husky)
- **lint-staged**: ESLint + Prettier en archivos modificados
- **commitizen**: Conventional commits obligatorios
- **type-check**: TypeScript compilation check
- **test**: Unit tests para archivos modificados

---

## Convenciones de Nomenclatura

### Archivos y Directorios
```
📁 components/           # PascalCase para componentes React
  ├── ui/               # Componentes base reutilizables
  ├── forms/            # Formularios específicos
  └── blocks/           # Bloques de Payload CMS

📁 hooks/               # camelCase para custom hooks
  ├── useAuth.ts
  └── useReservation.ts

📁 utils/               # camelCase para utilidades
  ├── formatPrice.ts
  └── validateEmail.ts

📁 types/               # PascalCase para tipos TypeScript
  ├── Dish.ts
  └── Reservation.ts

📁 styles/              # kebab-case para archivos CSS
  ├── globals.css
  └── components.css
```

### Variables y Funciones
```typescript
// ✅ Correcto
const userReservation = getUserReservation()
const DELIVERY_FEE = 3.50
const isMenuVisible = true

// ❌ Incorrecto  
const UserReservation = getUserReservation()
const delivery_fee = 3.50
const menu_visible = true
```

### Componentes React
```typescript
// ✅ Correcto - PascalCase + descriptivo
export const DishCard: React.FC<DishCardProps> = ({ dish, onAddToCart }) => {
  return (
    <article className="dish-card">
      {/* contenido */}
    </article>
  )
}

// ✅ Correcto - Props interface
interface DishCardProps {
  dish: Dish
  onAddToCart: (dishId: string) => void
  className?: string
}
```

### CSS Classes (BEM Methodology)
```css
/* ✅ Correcto */
.dish-card { }
.dish-card__image { }
.dish-card__title { }
.dish-card__price { }
.dish-card--featured { }
.dish-card--unavailable { }

/* ❌ Incorrecto */
.dishCard { }
.dish_card_image { }
.DishTitle { }
```

---

## Accesibilidad WCAG 2.2 AA

### Nivel AA Requirements

#### Color y Contraste
- **Ratio mínimo**: 4.5:1 para texto normal, 3:1 para texto grande (18pt+)
- **Herramienta obligatoria**: Contrast checker en cada PR
- **No dependencia del color**: Información nunca transmitida solo por color

#### Navegación por Teclado
```typescript
// ✅ Componente accesible
const AccessibleButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  disabled,
  ariaLabel 
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
      className="btn"
    >
      {children}
    </button>
  )
}
```

#### Estructura Semántica
```html
<!-- ✅ Correcto -->
<header role="banner">
  <nav aria-label="Navegación principal">
    <ul>
      <li><a href="/menu" aria-current="page">Menú</a></li>
      <li><a href="/reservas">Reservas</a></li>
    </ul>
  </nav>
</header>

<main role="main">
  <section aria-labelledby="featured-dishes">
    <h2 id="featured-dishes">Platos Destacados</h2>
    <!-- contenido -->
  </section>
</main>

<footer role="contentinfo">
  <!-- información de contacto -->
</footer>
```

#### Formularios Accesibles
```typescript
const ReservationForm: React.FC = () => {
  return (
    <form noValidate>
      <fieldset>
        <legend>Datos de la Reserva</legend>
        
        <label htmlFor="guest-name">
          Nombre completo *
          <input 
            id="guest-name"
            type="text"
            required
            aria-describedby="name-error"
            aria-invalid={hasError}
          />
        </label>
        
        {hasError && (
          <div id="name-error" role="alert" className="error">
            El nombre es obligatorio
          </div>
        )}
      </fieldset>
    </form>
  )
}
```

#### Checklist de Accesibilidad (Pre-deploy)
- [ ] **Keyboard navigation**: Todos los elementos interactivos accesibles con Tab
- [ ] **Screen reader**: Navegación clara con NVDA/JAWS
- [ ] **Focus visible**: Estados de focus claramente visibles
- [ ] **Alt texts**: Todas las imágenes con descripciones apropiadas
- [ ] **Headings hierarchy**: H1→H2→H3 sin saltos
- [ ] **Color independence**: Información comprensible sin color
- [ ] **Form labels**: Todos los inputs con labels asociados
- [ ] **Error handling**: Mensajes de error descriptivos y ubicados correctamente

---

## Checklist RGPD/Cookies

### Implementación de Consentimiento
```typescript
// Cookie consent component
const CookieConsent: React.FC = () => {
  const [consent, setConsent] = useState<CookiePreferences | null>(null)
  
  const handleAcceptAll = () => {
    const preferences: CookiePreferences = {
      necessary: true,      // Siempre true
      analytics: true,
      marketing: true,
      functional: true
    }
    saveCookiePreferences(preferences)
    initializeTracking(preferences)
  }

  const handleRejectAll = () => {
    const preferences: CookiePreferences = {
      necessary: true,      // Siempre true
      analytics: false,
      marketing: false,
      functional: false
    }
    saveCookiePreferences(preferences)
  }

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title">
      <h3 id="cookie-title">Gestión de Cookies</h3>
      <p>
        Utilizamos cookies para mejorar tu experiencia. 
        <Link href="/politica-cookies">Más información</Link>
      </p>
      
      <div className="cookie-actions">
        <button onClick={handleAcceptAll}>Aceptar todas</button>
        <button onClick={handleRejectAll}>Rechazar no esenciales</button>
        <button onClick={openCustomizeModal}>Personalizar</button>
      </div>
    </div>
  )
}
```

### Categorías de Cookies
1. **Estrictamente Necesarias** (sin consentimiento)
   - Sesión de usuario
   - Carrito de compra
   - Preferencias de idioma
   - Tokens CSRF

2. **Funcionales** (con consentimiento)
   - Recordar filtros del menú
   - Geolocalización para delivery
   - Preferencias de accesibilidad

3. **Analíticas** (con consentimiento)
   - Google Analytics 4
   - Hotjar heatmaps
   - Performance monitoring

4. **Marketing** (con consentimiento)
   - Meta Pixel
   - Google Ads
   - Remarketing tags

### Derechos del Usuario - Implementación
```typescript
// User rights implementation
class UserRightsService {
  // Derecho de acceso
  async exportUserData(userId: string): Promise<UserDataExport> {
    const userData = await this.getUserCompleteData(userId)
    return {
      personalData: userData.profile,
      orders: userData.orders,
      preferences: userData.preferences,
      consents: userData.consents,
      exportDate: new Date().toISOString()
    }
  }

  // Derecho de rectificación
  async updateUserData(userId: string, updates: Partial<UserProfile>): Promise<void> {
    await this.validateUpdates(updates)
    await this.updateUserProfile(userId, updates)
    await this.logDataModification(userId, updates)
  }

  // Derecho de supresión
  async deleteUserData(userId: string, reason: DeletionReason): Promise<void> {
    // Pseudonimizar datos en pedidos (requisito legal)
    await this.pseudonymizeOrderData(userId)
    
    // Eliminar datos personales
    await this.deletePersonalData(userId)
    
    // Log para auditoría
    await this.logDataDeletion(userId, reason)
  }

  // Derecho de oposición
  async optOutMarketing(userId: string): Promise<void> {
    await this.updateMarketingConsent(userId, false)
    await this.removeFromMarketingLists(userId)
  }
}
```

### Auditoría y Logging
```typescript
// RGPD audit trail
interface DataProcessingLog {
  timestamp: Date
  userId: string
  action: 'access' | 'update' | 'delete' | 'export'
  dataTypes: string[]
  legalBasis: string
  requestedBy: 'user' | 'admin' | 'system'
  ipAddress?: string
}

const logDataProcessing = async (log: DataProcessingLog): Promise<void> => {
  // Guardar en base de datos segura
  await auditDb.logs.create(log)
  
  // Notificar al DPO si es necesario
  if (log.action === 'delete' && log.requestedBy === 'user') {
    await notifyDPO(log)
  }
}
```

### Checklist Pre-Launch RGPD
- [ ] **Política de Privacidad**: Actualizada y específica del sitio
- [ ] **Aviso Legal**: Información corporativa completa
- [ ] **Política de Cookies**: Detallada por categorías
- [ ] **Consentimiento granular**: Opciones específicas por tipo
- [ ] **Double opt-in**: Email confirmation para newsletter
- [ ] **Data retention**: Políticas de conservación definidas
- [ ] **Breach procedures**: Procedimiento de notificación 72h
- [ ] **DPO contact**: Datos de contacto del delegado visible
- [ ] **User rights portal**: Interfaz para ejercer derechos
- [ ] **Audit logging**: Sistema de trazabilidad completo
- [ ] **Data mapping**: Inventario completo de tratamientos
- [ ] **Vendor agreements**: DPAs firmados con proveedores 