---
title: Jotform

permalink: platform/instructions/es/latest/Actions/jotform

---

<base target="_blank">
<container>

**Descripción general**

Conecte su cuenta de Jotform con la plataforma Kore.ai XO para automatizar la recopilación y gestión de datos de encuestas. Utilice OAuth para recuperar de forma segura las respuestas de formularios y optimizar las interacciones con los usuarios dentro de las conversaciones.

</container>

<container>

**Autorización**

Para conectarse a Jotform, Kore.ai utiliza autenticación básica. El usuario puede utilizar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación. [Más información.](https://api.jotform.com/docs/#gettingstarted)

 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Básica**

1. Proporcione la API Key para autorizar la integración.
2. Siga los pasos a continuación para obtener los detalles requeridos de su instancia de Jotform.

   a. Para obtener los detalles requeridos, navegue a [https://www.jotform.com/myaccount/api](https://www.jotform.com/myaccount/api)

           i. Haga clic en Create new secret key.

           ii. Copie la API Key.

           iii. Pegue la API key en el campo API key de la plataforma Kore.ai XO.

 3. Haga clic en Habilitar.

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Básica**

1. Seleccione Permitir a los usuarios autorizar la integración.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione API Key

   ii.  Proporcione un nombre para el perfil de autorización.

   iii. Edite el "Authorization Filed" de api_key a apiKey para "Field Key".

   iv. Use https://api.jotform.com/form/[your-form-id-here] como "Authorization Check URL" y reemplace [your-form-id-here] con el ID de formulario correspondiente.

   v.  Guarde el perfil de autorización.

 6.  Haga clic en Habilitar.

</container>
