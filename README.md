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
│   │   ├── components/     # GuideTable, GuideDetail, StatusStepper
│   │   ├── hooks/          # useGuides, useUpdateStatus
│   │   └── services/       # endpoints: /guides
│   ├── products/           # Gestión y listado de productos
│   ├── tracking/           # Lógica de seguimiento (mapas o línea de tiempo)
│   └── users/              # Gestión de permisos (solo para Admin)
├── hooks/                  # Hooks globales (useAuth, useLocalStorage)
├── routes/                 # Configuración de React Router
│   ├── PrivateRoute.tsx    # Componente que valida sesión y ROL
│   └── AppRoutes.tsx       # Definición de rutas por rol
└── pages/                  # Vistas finales que ensamblan las features
    ├── admin/              # DashboardAdmin, UserManagementPage
    ├── worker/             # DashboardWorker, CreateGuidePage
    └── driver/             # DriverTaskPage, UpdateDeliveryPage
```

eges