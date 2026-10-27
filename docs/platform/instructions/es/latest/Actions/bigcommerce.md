---
title: BigCommerce Shop

permalink: platform/instructions/es/latest/Actions/bigcommerce

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite conectar fácilmente su instancia de BigCommerce Shop para encontrar información sobre clientes, productos y pedidos.

</container>

<container>

**Autorización**

El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso a la API.

**Custom Auth o Private App**

 1. Navegue a la configuración en su tienda de BigCommerce.
 2. Cree una cuenta API a nivel de tienda en su tienda de BigCommerce.
 3. Genere las credenciales de API y los tokens de acceso a la API necesarios.
 4. Configure la cuenta con los siguientes alcances para realizar las acciones proporcionadas por la plataforma Kore.ai XO.

     i.  Orders -> READ-ONLY

     ii.  Products -> READ-ONLY

     iii. Checkouts -> MODIFY

     iv. Carts -> MODIFY

 5. Proporcione el "Api access token" y el "Store hash" proporcionados por BigCommerce en la sección Preautorizar la integración de Kore.ai.

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

**¿Qué se puede lograr integrando BigCommerce Shop con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en BigCommerce que están listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Get order details     |Recupera los detalles de un pedido usando el ID de pedido especificado|
|Get product details     |Recupera los detalles de un producto específico usando el ID del producto.|
|Get card details    |Recupera los detalles de un carrito usando el ID de carrito especificado.|
|Delete a cart      |Elimina un carrito usando el ID de carrito especificado.|
|Add billing address  |Agrega una nueva dirección de facturación para el proceso de pago usando el ID de carrito especificado.|
|Update billing address |Actualiza la dirección de facturación de un carrito usando el ID de carrito y el ID de facturación especificados.|

</container>
