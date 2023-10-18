# Iris Demo - Documentación

## Descripción del Proyecto

Iris Demo es una aplicación web que permite el acceso, monitoreo y automatización de los aireadores en lagunas. Cada laguna tiene aireadores que mantienen su temperatura a un nivel específico. La aplicación se encarga de monitorear las lagunas y los sensores asociados, así como de alertar a los usuarios en caso de problemas o recomendaciones. La aplicación también proporciona información en tiempo real y gráficos para facilitar la gestión de las lagunas.

## Funcionalidades Clave

- Monitoreo en tiempo real de las lagunas y sus sensores (OD y ORP).
- Ajuste automático del voltaje de los aireadores en función del consumo de energía de la laguna.
- Alertas y notificaciones para los usuarios responsables de cada laguna.
- Visualización de cada laguna y sus aireadores.
- Visualización en tiempo real del voltaje utilizado por cada aireador.
- Integración de nuevas lagunas y aireadores de forma automática.
- Simulador web para pruebas y configuración ficticia del entorno.

## Instalación y Configuración

### Pasos de Instalación

1. Clona este repositorio desde GitHub.

```shell
git clone https://github.com/tu-usuario/iris-demo.git
```

2. Accede al directorio del proyecto.

```shell
cd iris-demo/client
```

3. Instala las dependencias necesarias.

```shell
npm install
```

4. Inicia la aplicación en modo de desarrollo.

```shell
npm run dev
```

## Uso

### Acceso a la Aplicación

Una vez que la aplicación esté en funcionamiento, puedes acceder a ella a través de tu navegador web visitando la dirección URL correspondiente.

### Monitoreo de Lagunas y Aireadores

- Para ver la lista de lagunas y sus detalles, accede a la sección "Monitoreo de Lagunas".
- Haz clic en una laguna para ver los detalles y los aireadores asociados.

### Ajuste Automático del Voltaje

- La aplicación ajustará automáticamente el voltaje de los aireadores según el consumo energético de la laguna.
- Recibirás alertas si se detecta un consumo excesivo de energía.

### Integración de Nuevas Lagunas y Aireadores

- La aplicación detectará automáticamente nuevas lagunas y aireadores que se integren al entorno.

### Simulador Web

- Utiliza el simulador web para agregar, modificar y eliminar lagunas y aireadores de forma ficticia con fines de prueba.

## Gráficos en Tiempo Real (Próximamente)

Estamos trabajando en la incorporación de gráficos en tiempo real para una mejor visualización de los datos más importantes.

## Contribución

Si deseas contribuir al desarrollo de Iris Demo, sigue estos pasos:

1. Haz un fork del repositorio en GitHub.
2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`
3. Realiza tus cambios y commitea: `git commit -m "Mi contribución"`
4. Haz un push a tu rama: `git push origin mi-contribucion`
5. Crea un pull request en GitHub.

## Contacto

Si tienes preguntas o necesitas ayuda, puedes contactar al equipo de desarrollo en Inacap Santiago Centro - FabLab.
