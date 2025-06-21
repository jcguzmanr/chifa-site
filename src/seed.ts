import type { Payload } from 'payload'
import path from 'path'
import { getPayload } from 'payload'
import config from './payload.config'

// Datos de prueba proporcionados
const testData = {
  platos: [
    {
      id: 'CH001',
      nombre: 'Arroz Chaufa de Pollo',
      nombre_chino: '鸡肉炒饭',
      categoria: 'Platos Principales',
      subcategoria: 'Arroces',
      descripcion_corta: 'Arroz frito al wok con pollo, huevo y verduras al estilo chino-peruano',
      descripcion_detallada:
        'El plato más emblemático del chifa peruano. Arroz frito a alta temperatura en wok con trozos de pollo tierno, huevo revuelto, cebolla china y frejol chino. Sazonado con sillao (salsa de soya) que le da su característico color dorado y sabor umami. Una perfecta fusión entre la técnica china del salteado y los gustos peruanos.',
      ingredientes_principales: ['arroz blanco', 'pollo', 'huevo', 'cebolla china', 'frejol chino'],
      ingredientes_completos: [
        'arroz cocido',
        'pechuga de pollo',
        'huevos',
        'cebolla china',
        'frejol chino',
        'sillao',
        'aceite de ajonjolí',
        'kion',
        'ajo',
        'sal',
      ],
      alergenos: ['huevo', 'soja', 'sésamo'],
      foto: 'https://ejemplo.com/arroz-chaufa-pollo.jpg',
      precio: 18.0,
      precio_grande: 25.0,
      disponibilidad: true,
      tiempo_preparacion: 12,
      indicadores: {
        picor: 0,
        dulzor: 1,
        vegetariano: false,
        vegano: false,
        sin_gluten: true,
        mas_pedido: true,
        recomendado_casa: true,
        nuevo: false,
        especial: false,
      },
      informacion_nutricional: {
        porciones: '1 persona',
        calorias_aproximadas: 420,
        nivel_sal: 'medio',
      },
      variantes: ['pollo', 'chancho', 'carne', 'mixto', 'vegetariano', 'especial'],
      acompañamientos_sugeridos: ['wantán frito', 'sopa wantán'],
      maridaje_bebidas: ['Inca Kola', 'té chino', 'chicha morada'],
    },
    {
      id: 'CH002',
      nombre: 'Tallarín Saltado',
      nombre_chino: '炒面',
      categoria: 'Platos Principales',
      subcategoria: 'Fideos',
      descripcion_corta: 'Fideos chinos salteados con verduras frescas y carne al wok',
      descripcion_detallada:
        'La versión peruana del famoso chow mein chino. Fideos largos salteados a fuego alto en wok con verduras crujientes como cebolla china, col china y pimiento, acompañados de carne tierna. El secreto está en el salteado rápido que mantiene las verduras crujientes y los fideos con la textura perfecta. Sazonado con salsa de ostión y sillao.',
      ingredientes_principales: [
        'fideos chinos',
        'carne de res',
        'cebolla china',
        'col china',
        'pimiento',
      ],
      ingredientes_completos: [
        'fideos chinos',
        'lomo de res',
        'cebolla china',
        'col china',
        'pimiento rojo',
        'brócoli',
        'sillao',
        'salsa de ostión',
        'aceite de sésamo',
        'ajo',
        'kion',
      ],
      alergenos: ['gluten', 'soja', 'sésamo'],
      foto: 'https://ejemplo.com/tallarin-saltado.jpg',
      precio: 19.0,
      precio_grande: 26.0,
      disponibilidad: true,
      tiempo_preparacion: 15,
      indicadores: {
        picor: 0,
        dulzor: 1,
        vegetariano: false,
        vegano: false,
        sin_gluten: false,
        mas_pedido: true,
        recomendado_casa: false,
        nuevo: false,
        especial: false,
      },
      informacion_nutricional: {
        porciones: '1 persona',
        calorias_aproximadas: 380,
        nivel_sal: 'medio',
      },
      variantes: ['pollo', 'chancho', 'carne', 'mariscos', 'vegetariano'],
      acompañamientos_sugeridos: ['wantán frito', 'nabo encurtido'],
      maridaje_bebidas: ['té jasmin', 'cerveza', 'agua'],
    },
    {
      id: 'CH003',
      nombre: 'Aeropuerto',
      nombre_chino: '机场炒饭面',
      categoria: 'Platos Principales',
      subcategoria: 'Combinados',
      descripcion_corta: 'Generosa combinación de arroz chaufa y tallarín saltado en un solo plato',
      descripcion_detallada:
        'El plato perfecto para los indecisos. Una generosa porción que combina lo mejor de dos mundos: arroz chaufa dorado y tallarín saltado con verduras, servidos en el mismo plato. Popularizado en los años 90, recibe su nombre porque las porciones son tan abundantes como las que se sirven en los aeropuertos. Ideal para compartir o para quienes tienen mucha hambre.',
      ingredientes_principales: ['arroz chaufa', 'tallarín saltado', 'pollo', 'verduras mixtas'],
      ingredientes_completos: [
        'arroz cocido',
        'fideos chinos',
        'pollo',
        'huevo',
        'cebolla china',
        'col china',
        'pimiento',
        'frejol chino',
        'sillao',
        'salsa de ostión',
      ],
      alergenos: ['huevo', 'gluten', 'soja', 'sésamo'],
      foto: 'https://ejemplo.com/aeropuerto.jpg',
      precio: 22.0,
      precio_grande: 32.0,
      disponibilidad: true,
      tiempo_preparacion: 18,
      indicadores: {
        picor: 0,
        dulzor: 1,
        vegetariano: false,
        vegano: false,
        sin_gluten: false,
        mas_pedido: true,
        recomendado_casa: false,
        nuevo: false,
        especial: true,
      },
      informacion_nutricional: {
        porciones: '1-2 personas',
        calorias_aproximadas: 650,
        nivel_sal: 'medio-alto',
      },
      variantes: ['pollo', 'chancho', 'carne', 'mixto', 'especial'],
      acompañamientos_sugeridos: ['sopa wantán', 'enrollado primavera'],
      maridaje_bebidas: ['Inca Kola', 'chicha morada', 'cerveza'],
    },
    {
      id: 'CH004',
      nombre: 'Sopa Wantán',
      nombre_chino: '云吞汤',
      categoria: 'Entrantes y Sopas',
      subcategoria: 'Sopas',
      descripcion_corta: 'Caldo aromático con dumplings rellenos de carne picada',
      descripcion_detallada:
        'Un reconfortante caldo de pollo transparente y aromático, perfumado con jengibre fresco, que alberga delicados wantanes rellenos de una mezcla de carne de cerdo y pollo finamente picada. Los wantanes, envueltos en masa fina como papel, se cocinan hasta quedar tiernos. Se sirve caliente con cebolla china picada y un toque de aceite de sésamo que realza todos los sabores.',
      ingredientes_principales: ['wantanes', 'caldo de pollo', 'carne picada', 'cebolla china'],
      ingredientes_completos: [
        'masa wantán',
        'carne de cerdo',
        'pollo picado',
        'caldo de pollo',
        'jengibre',
        'cebolla china',
        'aceite de sésamo',
        'sal',
        'pimienta',
      ],
      alergenos: ['gluten', 'huevo', 'sésamo'],
      foto: 'https://ejemplo.com/sopa-wantan.jpg',
      precio: 15.0,
      precio_grande: null,
      disponibilidad: true,
      tiempo_preparacion: 10,
      indicadores: {
        picor: 0,
        dulzor: 0,
        vegetariano: false,
        vegano: false,
        sin_gluten: false,
        mas_pedido: true,
        recomendado_casa: false,
        nuevo: false,
        especial: false,
      },
      informacion_nutricional: {
        porciones: '1 persona',
        calorias_aproximadas: 180,
        nivel_sal: 'medio',
      },
      variantes: ['pollo', 'cerdo', 'especial', 'vegetariana'],
      acompañamientos_sugeridos: ['arroz blanco', 'nabo encurtido'],
      maridaje_bebidas: ['té chino', 'agua', 'Inca Kola'],
    },
    {
      id: 'CH005',
      nombre: 'Wantán Frito',
      nombre_chino: '炸云吞',
      categoria: 'Entrantes y Sopas',
      subcategoria: 'Entrantes',
      descripcion_corta: 'Crujientes dumplings dorados rellenos de carne, servidos con salsa agridulce',
      descripcion_detallada:
        'Irresistibles bocaditos crujientes que explotan de sabor en cada mordida. Los wantanes se fríen hasta conseguir una cáscara dorada y crujiente que contrasta con el jugoso relleno de carne sazonada. Se sirven calientes acompañados de la clásica salsa de tamarindo agridulce, perfecta para dipear. Un entrante que despierta el apetito y prepara el paladar para los platos principales.',
      ingredientes_principales: ['masa wantán', 'relleno de carne', 'aceite para freír'],
      ingredientes_completos: [
        'masa wantán',
        'carne de cerdo',
        'pollo picado',
        'cebolla china',
        'jengibre',
        'aceite vegetal',
        'salsa de tamarindo',
      ],
      alergenos: ['gluten', 'huevo'],
      foto: 'https://ejemplo.com/wantan-frito.jpg',
      precio: 12.0,
      precio_grande: 18.0,
      disponibilidad: true,
      tiempo_preparacion: 8,
      indicadores: {
        picor: 0,
        dulzor: 2,
        vegetariano: false,
        vegano: false,
        sin_gluten: false,
        mas_pedido: true,
        recomendado_casa: true,
        nuevo: false,
        especial: false,
      },
      informacion_nutricional: {
        porciones: '6-8 unidades',
        calorias_aproximadas: 280,
        nivel_sal: 'medio',
      },
      variantes: ['cerdo', 'pollo', 'mixto', 'queso'],
      acompañamientos_sugeridos: ['salsa tamarindo', 'salsa picante china'],
      maridaje_bebidas: ['té jasmin', 'cerveza', 'chicha morada'],
    },
    {
      id: 'CH006',
      nombre: 'Pollo Chijaukay',
      nombre_chino: '芝麻鸡',
      categoria: 'Platos Principales',
      subcategoria: 'Pollo',
      descripcion_corta: 'Pollo frito bañado en salsa agridulce oscura con sésamo',
      descripcion_detallada:
        'Uno de los platos más queridos del chifa peruano. Trozos de pollo tierno, empanizados y fritos hasta lograr una textura crujiente por fuera y jugosa por dentro, bañados en una exquisita salsa agridulce de color caoba que combina sillao, azúcar y especias chinas. Se sirve espolvoreado con semillas de sésamo blanco que aportan un toque de nuez y textura. El equilibrio perfecto entre dulce y salado.',
      ingredientes_principales: ['pollo', 'salsa agridulce', 'sésamo', 'maicena'],
      ingredientes_completos: [
        'pechuga de pollo',
        'maicena',
        'huevo',
        'salsa de soya',
        'azúcar',
        'vinagre',
        'kion',
        'ajo',
        'semillas de sésamo',
        'aceite vegetal',
      ],
      alergenos: ['huevo', 'soja', 'sésamo', 'gluten'],
      foto: 'https://ejemplo.com/pollo-chijaukay.jpg',
      precio: 20.0,
      precio_grande: null,
      disponibilidad: true,
      tiempo_preparacion: 20,
      indicadores: {
        picor: 0,
        dulzor: 4,
        vegetariano: false,
        vegano: false,
        sin_gluten: false,
        mas_pedido: true,
        recomendado_casa: true,
        nuevo: false,
        especial: false,
      },
      informacion_nutricional: {
        porciones: '1 persona',
        calorias_aproximadas: 450,
        nivel_sal: 'medio-alto',
      },
      variantes: ['tradicional', 'dos sabores', 'con piña'],
      acompañamientos_sugeridos: ['arroz chaufa', 'arroz blanco', 'verduras salteadas'],
      maridaje_bebidas: ['té chino', 'Inca Kola', 'agua'],
    },
    {
      id: 'CH007',
      nombre: 'Pollo Tipakay',
      nombre_chino: '菠萝鸡',
      categoria: 'Platos Principales',
      subcategoria: 'Pollo',
      descripcion_corta: 'Pollo apanado con salsa agridulce y trozos de piña fresca',
      descripcion_detallada:
        'Una deliciosa variante tropical del pollo agridulce chino. Trozos de pollo perfectamente apanados y fritos, bañados en una vibrante salsa agridulce de color rojizo que combina tomate, azúcar y especias orientales. Se sirve con trozos de piña fresca que aportan acidez natural y frescura, creando un contraste perfecto con la textura crujiente del pollo. Un plato que transporta a sabores exóticos.',
      ingredientes_principales: ['pollo apanado', 'piña fresca', 'salsa agridulce', 'pimiento'],
      ingredientes_completos: [
        'pechuga de pollo',
        'harina',
        'huevo',
        'piña',
        'salsa de tomate',
        'azúcar',
        'vinagre',
        'pimiento rojo',
        'cebolla',
        'aceite vegetal',
      ],
      alergenos: ['huevo', 'gluten'],
      foto: 'https://ejemplo.com/pollo-tipakay.jpg',
      precio: 21.0,
      precio_grande: null,
      disponibilidad: true,
      tiempo_preparacion: 18,
      indicadores: {
        picor: 0,
        dulzor: 4,
        vegetariano: false,
        vegano: false,
        sin_gluten: false,
        mas_pedido: false,
        recomendado_casa: false,
        nuevo: false,
        especial: false,
      },
      informacion_nutricional: {
        porciones: '1 persona',
        calorias_aproximadas: 420,
        nivel_sal: 'medio',
      },
      variantes: ['tradicional', 'extra piña', 'sin pimiento'],
      acompañamientos_sugeridos: ['arroz chaufa', 'arroz blanco'],
      maridaje_bebidas: ['jugo de piña', 'Inca Kola', 'té verde'],
    },
    {
      id: 'CH008',
      nombre: 'Kam Lu Wantán',
      nombre_chino: '甘露云吞',
      categoria: 'Platos Principales',
      subcategoria: 'Especiales',
      descripcion_corta: 'Wantanes fritos en salsa agridulce con cerdo, langostinos y verduras',
      descripcion_detallada:
        'Un plato especial que eleva los humildes wantanes a una experiencia gourmet. Wantanes dorados y crujientes se combinan con trozos de cerdo char siu, langostinos frescos, trozos de piña y verduras variadas, todo bañado en una exquisita salsa agridulce translúcida. La salsa, de consistencia perfecta, logra el equilibrio ideal entre dulce y ácido, mientras que la variedad de texturas convierte cada bocado en una sorpresa.',
      ingredientes_principales: [
        'wantán frito',
        'cerdo char siu',
        'langostinos',
        'piña',
        'salsa agridulce',
      ],
      ingredientes_completos: [
        'wantanes',
        'cerdo asado',
        'langostinos',
        'piña',
        'pimiento',
        'cebolla',
        'huevo de codorniz',
        'salsa de tamarindo',
        'azúcar',
        'vinagre',
      ],
      alergenos: ['gluten', 'huevo', 'mariscos'],
      foto: 'https://ejemplo.com/kam-lu-wantan.jpg',
      precio: 24.0,
      precio_grande: null,
      disponibilidad: true,
      tiempo_preparacion: 22,
      indicadores: {
        picor: 0,
        dulzor: 4,
        vegetariano: false,
        vegano: false,
        sin_gluten: false,
        mas_pedido: false,
        recomendado_casa: true,
        nuevo: false,
        especial: true,
      },
      informacion_nutricional: {
        porciones: '1 persona',
        calorias_aproximadas: 520,
        nivel_sal: 'medio-alto',
      },
      variantes: ['tradicional', 'especial', 'sin mariscos'],
      acompañamientos_sugeridos: ['arroz blanco', 'arroz chaufa'],
      maridaje_bebidas: ['té oolong', 'cerveza', 'agua'],
    },
  ],
}

const seed = async (): Promise<void> => {
  const payload = await getPayload({
    config,
  })

  payload.logger.info('Iniciando proceso de seeding...')

  // 1. Limpiar datos existentes
  payload.logger.info('--- Limpiando colecciones ---')
  await payload.delete({
    collection: 'platos',
    where: {},
  })
  await payload.delete({
    collection: 'categories',
    where: {},
  })
  payload.logger.info('Colecciones limpiadas.')

  // 2. Crear usuario si no existe
  payload.logger.info('--- Creando usuario de desarrollo ---')
  const users = await payload.find({ collection: 'users', where: { email: { equals: 'dev@payloadcms.com' } } });
  if (users.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'dev@payloadcms.com',
        password: 'password',
      },
    })
    payload.logger.info('Usuario de desarrollo creado.')
  } else {
    payload.logger.info('Usuario de desarrollo ya existe.')
  }


  // 3. Crear categorías
  payload.logger.info('--- Creando categorías ---')
  const categoryNames = [...new Set(testData.platos.map(p => p.categoria))]
  const categoryMap = new Map<string, string>()

  for (const name of categoryNames) {
    const category = await payload.create({
      collection: 'categories',
      data: {
        name,
        slug: name.toLowerCase().replace(/ /g, '-'),
      },
    })
    categoryMap.set(name, category.id)
    payload.logger.info(`Categoría '${name}' creada.`)
  }
  payload.logger.info('Categorías creadas.')

  // 4. Crear platos
  payload.logger.info('--- Creando platos ---')
  for (const plato of testData.platos) {
    await payload.create({
      collection: 'platos',
      data: {
        id_plato: plato.id,
        nombre: plato.nombre,
        nombre_chino: plato.nombre_chino,
        categoria: categoryMap.get(plato.categoria),
        subcategoria: plato.subcategoria,
        descripcion_corta: plato.descripcion_corta,
        descripcion_detallada: plato.descripcion_detallada,
        precio: plato.precio,
        precio_grande: plato.precio_grande,
        disponibilidad: plato.disponibilidad,
        tiempo_preparacion: plato.tiempo_preparacion,
        ingredientes_principales: plato.ingredientes_principales.map(i => ({ ingrediente: i })),
        ingredientes_completos: plato.ingredientes_completos.map(i => ({ ingrediente: i })),
        alergenos: plato.alergenos.map(a => ({ alergeno: a })),
        indicadores: {
          picor: plato.indicadores.picor,
          dulzor: plato.indicadores.dulzor,
          vegetariano: plato.indicadores.vegetariano,
          vegano: plato.indicadores.vegano,
          sin_gluten: plato.indicadores.sin_gluten,
          mas_pedido: plato.indicadores.mas_pedido,
          recomendado_casa: plato.indicadores.recomendado_casa,
          nuevo: plato.indicadores.nuevo,
          especial: plato.indicadores.especial,
        },
        informacion_nutricional: {
          porciones: plato.informacion_nutricional.porciones,
          calorias_aproximadas: plato.informacion_nutricional.calorias_aproximadas,
          nivel_sal: plato.informacion_nutricional.nivel_sal,
        },
        variantes: plato.variantes.map(v => ({ variante: v })),
        acompañamientos_sugeridos: plato.acompañamientos_sugeridos.map(a => ({
          acompanamiento: a,
        })),
        maridaje_bebidas: plato.maridaje_bebidas.map(b => ({ bebida: b })),
        // El campo 'foto' es opcional y no se incluye aquí
      },
    })
    payload.logger.info(`Plato '${plato.nombre}' creado.`)
  }
  payload.logger.info('Platos creados.')

  payload.logger.info('Proceso de seeding completado con éxito! ✅')
  process.exit(0)
}

seed() 