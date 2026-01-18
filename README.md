# Chets Nuts Foods 

Sistema web creado con la finalidad de optimizar la gestión de guias de remisión de empresas, siempre y cuando cuentes con su propia flota de vehiculos.

## Arquitectura del Sistema de Gestión de Guías de Remisión

Esta aplicación utiliza una arquitectura **Basada en Características (Features)**. El objetivo es mantener la lógica de negocio (Administrador, Trabajador, Chofer) desacoplada y facilitar la reutilización de componentes entre roles.

### Estructura de Directorios

```text
src/
├── api/                    # Configuración de Axios/Fetch y clientes API
├── components/             # Componentes comunes (Layout, Navbar, Sidebar, UI)
│   ├── layout/
│   │   ├── RoleBasedSidebar.tsx  # Menú que cambia según el rol
│   │   └── AppLayout.tsx
│   └── ui/                 # Botones, Inputs, Modales (Shared)
├── config/                 # Roles, permisos y constantes
│   └── roles.ts            # Definición de tipos: 'ADMIN' | 'WORKER' | 'DRIVER'
├── features/               # El núcleo del negocio (Lógica compartida)
│   ├── auth/               # Login y gestión de cuenta (Perfil del Trabajador)
│   ├── guides/             # CRUD de Guías, detalles y estados de transporte
│   │   ├── components/
│   │   │   ├── TransporteGre.tsx           # 
│   │   │   ├── SeguimientoGre.tsx          # 
│   │   │   ├── TableGre.tsx                # 
│   │   │   ├── DetallesGre.tsx             # 
│   │   │   ├── FormCreateGre.tsx           # 
│   │   │   ├── FormUpdateGre.tsx           # 
│   │   │   └── FormDeleteGre.tsx           # 
│   │   ├── hooks/
│   │   │   ├── useGre.ts                    #
│   │   │   └── useEstadoTransporte.ts       #    
│   │   └── services/      
│   │       ├── estadoTransporte.service.ts  # 
│   │       └── gres.service.ts              # 
│   ├── products/
│   │   ├── components/     
│   │   │   ├── EstadoTransporte-gre.tsx
│   │   │   ├── Table-gre.tsx
│   │   │   └── Detalles-gre.tsx
│   │   ├── hooks/          
│   │   └── services/       
│   ├── tracking/           # Lógica de seguimiento (mapas o línea de tiempo)
│   └── users/              # Gestión de permisos (solo para Admin)
├── hooks/                  # Hooks globales (useAuth, useLocalStorage)
├── routes/                 # Configuración de React Router
c   ├── PrivateRoute.tsx    # Componente que valida sesión y ROL
│   └── AppRoutes.tsx       # Definición de rutas por rol
└── pages/                  # Vistas finales que ensamblan las features
    ├── administrador/      # DashboardAdmin, UserManagementPage
    │   ├── estadisticas.tsx      # Graficos, Resumen y Ventas
    │   ├── lista-gre.tsx         # Listar guías de remisión, ver detalles.
    │   ├── trabajadores.tsx      # Registrar nuevo trabajador, inhabilitar y crear cuenta de acceso.
    │   ├── productos.tsx         # Gestionar stock y CRUD producto. 
    │   └── seguimiento.tsx       # Seguimiento del transporte
    ├── trabajador/         # DashboardWorker, CreateGuidePage
    │   ├── usuario.tsx           # Actualizar información de usuario
    │   ├── lista-gre.tsx         # Listar guías de remisión, ver detalles, modificar y dar de baja
    │   ├── crear-gre.tsx         # Registrar nueva guía de remisión
    │   └── seguimiento.tsx       # Seguimiento del transporte 
    └── chofer/             # DriverTaskPage, UpdateDeliveryPage
        ├── usuario.tsx           # Actualizar información de usuario
        ├── transporte.tsx        # Actualizar el estado de transporte
        └── gre.tsx               # Visualizar detalles de la guia de remisión asociado a su transporte
```