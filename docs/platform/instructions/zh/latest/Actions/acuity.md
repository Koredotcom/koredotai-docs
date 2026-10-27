---
title: Acuity

permalink: platform/instructions/es/latest/Actions/acuity

---

<base target="_blank">
<container>

**Descripción general**

Conecte su cuenta de Acuity Scheduling con la plataforma Kore.ai XO para optimizar la programación de citas y la automatización. La plataforma se integra con Acuity mediante Basic Auth, lo que le permite preautorizar la conexión o permitir que los usuarios finales se autentiquen durante las conversaciones.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Acuity, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final se autorice durante la conversación creando un perfil de autorización.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione la API key y el API secret para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas desde su panel de Acuity.

      i. Inicie sesión en su cuenta de Acuity en Acuity Scheduling.  https://acuityscheduling.com/

     ii. Navegue a la sección "Go To Scheduling", busque la pestaña "Integrations" y vaya a la sección "API".

    iii. Copie la API key y el User ID de la sección "API" en la plataforma Kore.ai XO.

     iv. Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione las credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para autorizar la integración.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i. Seleccione Basic Auth

   ii. Proporcione un nombre para el perfil de autorización

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Habilitar.

</container>
