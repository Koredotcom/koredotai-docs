---
title: Google Map

permalink: platform/instructions/es/latest/Actions/googleMaps

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite integrarse con Google Map y mostrar detalles de ubicación.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Google Map, Kore.ai utiliza autenticación básica. El usuario puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.


 **Basic**

1. Siga los pasos a continuación para obtener los detalles requeridos de su Google Map.
    i.   Inicie sesión en su cuenta de Google Cloud (https://console.cloud.google.com/)

    ii.  Después de haber iniciado sesión correctamente, habilite la Geolocation API

    iii. Navegue a Google Maps Platform > página de Credenciales

    iv.  En la página de Credenciales, haga clic en Crear credenciales > API key

    v.    Proporcione un nombre y haga clic en Generar clave

2. Copie la clave generada y péguela en el campo API key de la plataforma Kore.ai XO y haga clic en Habilitar


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para **autorizar** la integración.

2. Haga clic en Seleccionar **autorización**.

3. Seleccione **Crear nuevo**.

4. Seleccione el tipo de mecanismo de autorización.

    i. Seleccione Basic Auth

   ii. Proporcione un nombre para el perfil de autorización

5. Guarde el **perfil de autorización**.

6. Seleccione el **perfil de autorización** creado para completar la integración.

7. Haga clic en **Habilitar**.

 </container>

 <container>

**¿Qué se puede lograr integrando Google Map con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Hubspot con plantillas de diálogo preconstruidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Get places by name   |Muestra las coordenadas y la dirección basándose en el nombre de un lugar  |
|Get locations by coordinate   |Obtiene información de ubicación basándose en las coordenadas|

</container>
