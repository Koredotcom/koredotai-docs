---
title: Twilio

permalink: platform/instructions/es/latest/Actions/twilio

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Twilio con la plataforma Kore.ai XO para potenciar sus conversaciones y enviar SMS, iniciar verificaciones y realizar otras acciones.

La plataforma Kore.ai XO le permite integrarse con Twilio utilizando Basic Auth, permitiéndole conectar su instancia de Twilio fácilmente.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Twilio, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el Account SID y el Auth Token para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Twilio.


      i. Inicie sesión en su instancia de Twilio.  https://console.twilio.com.

     ii. Navegue a la sección Account Info.

    iii. Copie el Account SID en el campo Account SID de la plataforma Kore.ai XO.

     iv. Copie el Auth Token en el campo Auth Token de la plataforma Kore.ai XO.

      v. Haga clic en Enable.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione All Users to Authorize the Integration.
2. Haga clic en Select Authorization.
3. Seleccione Create New.
4. Seleccione el tipo de mecanismo de autorización.

   i. Seleccione Basic Auth

   ii. Proporcione un nombre para el perfil de autorización

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Enable.

</container>

<container>

**¿Qué se puede lograr integrando Twilio con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes sobre objetos de Twilio con plantillas de diálogo predefinidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Enviar SMS     |Enviar un mensaje de texto a un número de teléfono|
|Iniciar verificación  |Iniciar el proceso de verificación|
|Comprobación de verificación |Comprobar el estado de un proceso de verificación|

</container>
