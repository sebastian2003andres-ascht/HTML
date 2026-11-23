# The National Gallery — Sistema Web

Proyecto académico de desarrollo web con **Spring Boot 4**, **Thymeleaf**, **Spring Data JPA** y **PostgreSQL**. Simula el sitio web de The National Gallery de Londres con páginas públicas, autenticación por roles (cliente, empleado y administrador), bitácora de auditoría y una tienda en línea.

## Tecnologías

- Java 17+
- Spring Boot 4.2.0 (Spring MVC, Spring Data JPA, Thymeleaf)
- PostgreSQL
- Maven
- HTML5, CSS3 y JavaScript mínimo

## Páginas públicas

| Ruta | Descripción |
| --- | --- |
| `/` | Portada con obras destacadas, historia y tienda |
| `/historia` | Línea de tiempo del museo |
| `/obras` | Colección con búsqueda por título, artista y sala |
| `/obras/{id}` | Detalle de una obra |
| `/tienda` | Tienda con filtros por tipo de producto |
| `/tienda/{id}` | Detalle de un producto |
| `/registro` | Registro público (perfil cliente) |
| `/login` | Inicio de sesión |

## Roles y usuarios de prueba

| Rol | Correo | Contraseña |
| --- | --- | --- |
| Administrador | `admin@nationalgallery.com` | `admin1234` |
| Empleado | `empleado@nationalgallery.com` | `empleado1234` |
| Cliente | `cliente@nationalgallery.com` | `cliente1234` |

Las contraseñas del script SQL se cifran automáticamente con BCrypt la primera vez que arranca la aplicación.

## Base de datos

El script se encuentra en [`database/script_bd_national_gallery.sql`](database/script_bd_national_gallery.sql). Crea las tablas:

- `usuarios`
- `obras`
- `historia`
- `productos`
- `compras`
- `detalle_compra`
- `bitacora`

Para ejecutarlo:

```bash
psql -h localhost -U postgres -d nationalgallery -f database/script_bd_national_gallery.sql
```

La conexión se configura en `src/main/resources/application.properties`.

## Ejecución

```bash
# Desarrollo
./mvnw spring-boot:run

# Pruebas
./mvnw test

# Empaquetar el WAR
./mvnw -DskipTests package
```

El artefacto se genera en `target/nationalgallery.war`.

## Accesibilidad

Las páginas públicas fueron auditadas con **Google Lighthouse**:

- Accesibilidad: **100/100**
- Buenas prácticas: **100/100**
- SEO: **100/100**

Incluyen enlace para saltar al contenido, etiquetas `<label for>`, textos alternativos, contraste alto, navegación por teclado y respeto a `prefers-reduced-motion`.

## Estructura del proyecto

```
src/main/java/com/nationalgallery/nationalgallery/
├── controller/    # Login, registro, administración y páginas públicas
├── model/         # Entidades JPA
├── repository/    # Repositorios Spring Data
└── service/       # Bitácora y utilidades

src/main/resources/
├── static/css/    # Hoja de estilos compartida
├── static/img/    # Imágenes de obras, historia y productos
└── templates/     # Vistas Thymeleaf
```

## Autores

Dylan Aguilar y Andrés Chiluisa.

## Bocetos de la interfaz (vistas previas)

> Se conserva toda la documentación original del proyecto. Esta sección se agrega únicamente para mostrar los bocetos visualmente desde GitHub.

**[Ver la galería de los 11 bocetos](docs/README.md)** · **[Abrir/descargar el archivo editable de Draw.io](docs/Bocetos_National_Gallery_Redisenado.drawio)**

### 1. Inicio

<img src="docs/previews/boceto-01.png" alt="Boceto 1: Inicio" width="900" />

### 2. Historia

<img src="docs/previews/boceto-02.png" alt="Boceto 2: Historia" width="900" />

### 3. Obras

<img src="docs/previews/boceto-03.png" alt="Boceto 3: Obras" width="900" />

### 4. Tienda

<img src="docs/previews/boceto-04.png" alt="Boceto 4: Tienda" width="900" />

### 5. Iniciar sesión y Registro

<img src="docs/previews/boceto-05.png" alt="Boceto 5: Iniciar sesión y Registro" width="900" />

### 6. Cliente - Mi cuenta

<img src="docs/previews/boceto-06.png" alt="Boceto 6: Cliente - Mi cuenta" width="900" />

### 7. Empleado - Panel

<img src="docs/previews/boceto-07.png" alt="Boceto 7: Empleado - Panel" width="900" />

### 8. Administrador - Usuarios

<img src="docs/previews/boceto-08.png" alt="Boceto 8: Administrador - Usuarios" width="900" />

### 9. Administrador - Obras

<img src="docs/previews/boceto-09.png" alt="Boceto 9: Administrador - Obras" width="900" />

### 10. Administrador - Compras

<img src="docs/previews/boceto-10.png" alt="Boceto 10: Administrador - Compras" width="900" />

### 11. Administrador - Bitácora y aprobaciones

<img src="docs/previews/boceto-11.png" alt="Boceto 11: Administrador - Bitácora y aprobaciones" width="900" />

