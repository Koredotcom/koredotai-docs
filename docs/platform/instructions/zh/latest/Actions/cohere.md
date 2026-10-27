---
title: Cohere

permalink: platform/instructions/es/latest/Actions/cohere

---

<base target="_blank">
<container>

**Descripción general**

Cohere es una potente plataforma de procesamiento de lenguaje natural (NLP) que proporciona a los desarrolladores acceso fácil a modelos de IA de última generación. Permite a los desarrolladores generar expresiones de entrenamiento y prueba, completar prompts y manejar conversaciones, permitiendo la creación de aplicaciones inteligentes e interactivas con capacidades avanzadas de lenguaje.

La plataforma Kore.ai XO le permite conectar fácilmente sus modelos de Cohere que pueden usarse en diferentes funcionalidades de IA Generativa en la plataforma.

</container>

<container>

**Autorización**

Cohere utiliza autenticación basada en API key para la autorización. Al conectarse a la API de Cohere, los desarrolladores deben incluir su API key como parte del proceso de autenticación. Esta clave sirve como un identificador único y permite a Cohere verificar la autenticidad y los permisos del usuario que realiza las solicitudes a la API. Al proporcionar de forma segura la API key durante la inicialización o las llamadas a la API, los desarrolladores pueden acceder y utilizar las capacidades de NLP de Cohere dentro de sus aplicaciones.


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Hay algunos requisitos previos antes de poder configurar la integración.

   a. Una suscripción de Azure

   b. Acceso otorgado a Azure OpenAI en la suscripción de Azure deseada

   c. Un recurso de Azure OpenAI con un modelo implementado.

2. Se requieren los siguientes detalles para habilitar la integración.

   a. ENDPOINT: Este valor se puede encontrar en la sección Keys & Endpoint al examinar su recurso desde el portal de Azure. Alternativamente, puede encontrar el valor en Azure OpenAI Studio > Playground > Code View. Un ejemplo de endpoint es: docs-test-001.openai.azure.com

   b. API-KEY: Este valor se puede encontrar en la sección Keys & Endpoint al examinar su recurso desde el portal de Azure. Puede usar KEY1 o KEY2.

   c. DEPLOYMENT-NAME: Este valor corresponderá al nombre personalizado que eligió para su implementación cuando implementó un modelo. Este valor se puede encontrar en Resource Management > Deployments en el portal de Azure o alternativamente en Management > Deployments en Azure OpenAI Studio.

   Nota: También puede consultar la documentación de Azure para [más detalles](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?pivots=rest-api).

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione las credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para autorizar la integración.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione API Key

   ii.  Proporcione un nombre para el perfil de autorización.

   iii.  Guarde el perfil de autorización.

 5.  Haga clic en Habilitar.

 </container>

 <container>

**¿Qué se puede lograr integrando Azure con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Azure con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|General Query     |Usa OpenAI para responder consultas genéricas de los usuarios|

</container>
