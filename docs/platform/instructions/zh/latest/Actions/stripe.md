---
title: Stripe

permalink: platform/instructions/es/latest/Actions/stripe

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Stripe con la plataforma Kore.ai XO para potenciar sus conversaciones y crear clientes/pagos y otras acciones.

La plataforma Kore.ai XO le permite integrarse con Stripe utilizando Basic Auth, permitiéndole conectar su instancia de Stripe fácilmente. Con esta integración, puede crear, listar y realizar más acciones dentro de Stripe.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Stripe, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione la API Key para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Stripe.

      i. Inicie sesión en su instancia de Stripe. https://dashboard.stripe.com/.

     ii. Haga clic en la pestaña Developers.

    iii. Haga clic en API Keys.

     iv. En la sección Standard Keys, junto a la fila Secret Key, haga clic en Reveal Key.

      v. Copie la API Key en el campo API Key de la plataforma Kore.ai XO.

     vi. Haga clic en Enable.


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

**¿Qué se puede lograr integrando Stripe con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes sobre objetos de Stripe con plantillas de diálogo predefinidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Customer     |Agregar un nuevo cliente al sistema|
|List All Customers   |Mostrar una lista de todos los clientes en el sistema|
|Create Invoice |Crear una nueva factura|
|List All Invoices  |Mostrar una lista de todas las facturas en el sistema|
|Create Payment Intent     |Crear una nueva intención de pago|

</container>
