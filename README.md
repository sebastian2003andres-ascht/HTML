# The National Gallery — Sistema Web

Proyecto académico de desarrollo web con **Java, Spring Boot, Thymeleaf, Spring Data JPA y PostgreSQL**. Este repositorio incluye el código fuente de la aplicación y los bocetos de su interfaz.

## Bocetos de la interfaz

Los 11 bocetos están disponibles como imágenes para verlos directamente en GitHub y como archivo editable de Draw.io.

**[Ver los 11 bocetos con sus vistas previas](docs/README.md)** · **[Abrir el archivo editable de Draw.io](docs/Bocetos_National_Gallery_Redisenado.drawio)**


### 1. Inicio

![Inicio](docs/previews/boceto-01.png)


### 2. Historia

![Historia](docs/previews/boceto-02.png)


### 3. Obras

![Obras](docs/previews/boceto-03.png)


### 4. Tienda

![Tienda](docs/previews/boceto-04.png)


### 5. Iniciar sesión y Registro

![Iniciar sesión y Registro](docs/previews/boceto-05.png)


### 6. Cliente - Mi cuenta

![Cliente - Mi cuenta](docs/previews/boceto-06.png)


### 7. Empleado - Gestionar obras

![Empleado - Gestionar obras](docs/previews/boceto-07.png)


### 8. Empleado - Compras de clientes

![Empleado - Compras de clientes](docs/previews/boceto-08.png)


### 9. Admin - Usuarios

![Admin - Usuarios](docs/previews/boceto-09.png)


### 10. Admin - Bitácora

![Admin - Bitácora](docs/previews/boceto-10.png)


### 11. Admin - Aprobar registros

![Admin - Aprobar registros](docs/previews/boceto-11.png)


---

## Tecnologías

- Java 17+
- Spring Boot
- Thymeleaf
- Spring Data JPA
- PostgreSQL
- Maven

## Estructura del proyecto

- `src/`: código Java, vistas y recursos web.
- `database/`: script SQL de la base de datos.
- `docs/`: bocetos editables y vistas previas.
- `pom.xml`: configuración y dependencias Maven.

## Ejecución

```bash
./mvnw spring-boot:run
```

Consulta `src/main/resources/application.properties` para verificar la configuración de conexión a la base de datos.

## Archivo de bocetos

El archivo `docs/Bocetos_National_Gallery_Redisenado.drawio` puede abrirse y editarse en [diagrams.net](https://app.diagrams.net/).
