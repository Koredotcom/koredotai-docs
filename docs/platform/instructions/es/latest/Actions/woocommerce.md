---
title: WooCommerce

permalink: platform/instructions/es/latest/Actions/wooCommerce

---

<base target="_blank">
<container>

**Descripción general**

Conecte su tienda WooCommerce con la plataforma Kore.ai XO para potenciar sus conversaciones y crear/actualizar pedidos y otras acciones.

La plataforma Kore.ai XO le permite integrarse con WooCommerce utilizando Basic Auth, permitiéndole conectar su tienda WooCommerce fácilmente. Con esta integración, puede crear, actualizar y realizar más acciones dentro de WooCommerce.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de WooCommerce, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el dominio, la Consumer Key y el Consumer Secret para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su tienda WooCommerce.

   a. Dominio - Encontrará su dominio de WooCommerce en la barra de direcciones de su navegador. Ejemplo: https://{{your-domain}}.com. Copie la URL desde aquí al campo User Domain en la plataforma Kore.ai XO.

   b.  Consumer Key, Consumer Secret

        i.  Inicie sesión en la cuenta de WordPress.

       ii.  Haga clic en WooCommerce.

       iii. Haga clic en Settings.

        iv. Haga clic en Advanced y luego seleccione REST API.

         v. Haga clic en Add Key, proporcione una descripción y haga clic en Generate API Key.

        vi. Copie la Consumer Key y el Consumer Secret en la plataforma Kore.ai XO.

       vii. Haga clic en Enable.



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

**¿Qué se puede lograr integrando WooCommerce con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes sobre objetos de WooCommerce con plantillas de diálogo predefinidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Recuperar un pedido    |Recuperar un pedido por clave de pedido o ID de cliente.|
|Listar todos los pedidos     |Obtener una lista de pedidos dentro de un rango de tiempo especificado.|
|Actualizar un pedido |Actualizar los detalles de un pedido incluyendo su estado, artículos y dirección de entrega.|
|Eliminar un pedido  |Eliminar un pedido en particular.|
</container>
