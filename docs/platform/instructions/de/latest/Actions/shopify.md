---
title: Shopify Shop

permalink: platform/instructions/es/latest/Actions/shopify

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite conectar fácilmente su instancia de Shopify Shop para encontrar información sobre clientes, productos y pedidos.

</container>

<container>

**Autorización**

El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso API.

**Aplicación personalizada o privada**

 1. Navegue a la página de administración de Shopify.
 2. Cree una aplicación personalizada para una tienda en la página de administración de Shopify.
 3. Autentique la aplicación personalizada instalando la aplicación.
 4. Genere las credenciales de API y los tokens de acceso API necesarios. Consulte este enlace para más información sobre aplicaciones personalizadas (https://help.shopify.com/en/manual/apps/app-types/custom-apps)
 5. Configure la aplicación con los siguientes alcances para realizar las acciones proporcionadas por la plataforma Kore.ai XO.

     i.  read_orders

     ii.  read_products y

     iii.  read_customers

 6. Proporcione el "Admin Api access token" y el "Domain" proporcionados por Shopify en la preautorización de integración de Kore.ai.

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione All Users to Authorize the Integration.

2. Haga clic en Select Authorization.

3. Seleccione Create New.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione API Key

   ii.  Proporcione un nombre para el perfil de autorización.

   iii.  Guarde el perfil de autorización.

 5.  Haga clic en Enable.

 </container>

 <container>

**¿Qué se puede lograr integrando Shopify Shop con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Shopify con plantillas de diálogo predefinidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Obtener detalles del cliente por correo electrónico     |Recupera los detalles de un cliente según su ID de correo electrónico.|
|Obtener pedidos por ID de cliente     |Recupera la lista de todos los pedidos de un cliente según el ID de cliente especificado.|
|Obtener detalles del pedido     |Recupera los detalles de un pedido utilizando el ID de pedido especificado|
|Obtener variantes del producto      |Recupera la lista de todas las variantes de un producto según el ID de producto especificado.|
|Obtener productos por nombre      |Recupera la lista de productos con el título especificado.|
|Obtener detalles del producto     |Recupera los detalles de un producto específico utilizando el ID de producto.|
|Obtener productos por colección     |Recupera todos los productos bajo una colección específica. |
|Obtener todas las colecciones     |Obtiene todas las colecciones disponibles de Shopify.|

</container>
