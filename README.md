# Chifa Fusión - Payload CMS + Next.js

Este es el repositorio para el sitio web de Chifa Fusión, construido con Payload CMS y Next.js.

## Pasos para el Setup

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```
   PAYLOAD_SECRET=...
   MONGODB_URI=mongodb://127.0.0.1/chifa-site
   ```

4. **Iniciar la base de datos**
   Asegúrate de tener Docker corriendo y ejecuta:
   ```bash
   docker-compose up -d
   ```

5. **Poblar la base de datos**
   Ejecuta el script de seed para poblar la base de datos con los datos iniciales:
   ```bash
   pnpm run seed
   ```
   _Nota: Si tienes problemas con `pnpm`, puedes ejecutar `npx ts-node src/seed.ts`_

6. **Iniciar el servidor de desarrollo**
   ```bash
   pnpm dev
   ```

El sitio estará disponible en `http://localhost:3000` y el panel de administración de Payload en `http://localhost:3000/admin`.

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Construye el proyecto para producción.
- `pnpm serve`: Inicia el servidor de producción.
- `pnpm seed`: Puebla la base de datos.
- `pnpm lint`: Revisa el código con ESLint.
- `pnpm lint:fix`: Revisa y corrige el código con ESLint. 