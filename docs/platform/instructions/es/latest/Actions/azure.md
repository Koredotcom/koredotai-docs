---
title: Azure OpenAI

permalink: platform/instructions/es/latest/Actions/azure

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite conectar fácilmente su instancia de Azure OpenAI para encontrar respuestas a sus consultas generales.

</container>

<container>

**Autorización**

Para conectarse a Azure OpenAI, Kore.ai utiliza autenticación básica. El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración. [Más información](https://learn.microsoft.com/en-us/azure/ai-services/multi-service-resource?tabs=windows&pivots=azportal#get-the-keys-for-your-resource)

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


 </container>

 <container>

**¿Qué se puede lograr integrando Azure con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Azure con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|General Query     |Usa OpenAI para responder consultas genéricas de los usuarios|

</container>
