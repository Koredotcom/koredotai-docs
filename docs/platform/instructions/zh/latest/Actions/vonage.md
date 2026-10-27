---
title: Vonage

permalink: platform/instructions/es/latest/Actions/vonage

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Vonage con la plataforma Kore.ai XO para automatizar el envío y la verificación de un SMS dentro de una conversación. La plataforma Kore.ai XO le permite integrarse con Vonage utilizando Basic Auth, permitiéndole conectarse a su instancia de Vonage fácilmente.

La plataforma Kore.ai XO le permite integrarse con Vonage utilizando Basic Auth, permitiéndole conectar su Vonage fácilmente.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Vonage, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el Account SID y el Auth Token para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Vonage.

      i. Inicie sesión en su cuenta de Vonage.  https://ui.idp.vonage.com/ui/auth/login.

     ii. Navegue a la sección My dashboard.

    iii. Copie la API key y el API secret en la plataforma Kore.ai XO.

     iv. Haga clic en Enable.

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

**¿Qué se puede lograr integrando Vonage con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes sobre objetos de Vonage con plantillas de diálogo predefinidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Solicitar una verificación para enviar al usuario    |Enviar un PIN de verificación a un usuario incluyendo el canal y el número de teléfono/correo electrónico|
|Comprobar un código proporcionado contra una solicitud para ver si es válido  |Permitir que un código sea verificado contra una solicitud de verificación existente|
|Cancelar una verificación |Cancelar una solicitud de verificación si aún está activa|

</container>
