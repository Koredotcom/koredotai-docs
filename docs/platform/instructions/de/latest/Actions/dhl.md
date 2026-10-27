---
title: DHL

permalink: platform/instructions/es/latest/Actions/dhl

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite conectar fácilmente su instancia de DHL para rastrear su pedido y encontrar las ubicaciones de DHL.

</container>

<container>

**Autorización**

Para conectarse a DHL, Kore.ai utiliza autenticación básica. El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.

 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**
 1. Cree una cuenta en el Portal de Desarrolladores de DHL en https://developer.dhl.com/.
 2. Cree una aplicación proporcionando el nombre de la aplicación y la descripción.
 3. Configure la aplicación con los siguientes alcances para realizar las acciones proporcionadas por la plataforma Kore.ai XO.

     i.  Shipment Tracking Unified y

     ii.  Location Finder Unified

 4. Proporcione la "API key" proporcionada por DHL en Kore.ai para preautorizar la integración.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para autorizar la integración.
2. Haga clic en Seleccionar autorización.
3. Seleccione Crear nuevo.
4. Seleccione el tipo de mecanismo de autorización.

     i.  Seleccione API Key. Agregue "DHL-API-Key" en el encabezado.

     ii.  Proporcione un nombre para el perfil de autorización.

     iii.  Guarde el perfil de autorización.
5. Haga clic en Habilitar.


 </container>

 <container>

**¿Qué se puede lograr integrando DHL con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en DHL con plantillas de diálogo preconstruidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Get Tracking Info     |Obtiene el estado de seguimiento de un paquete|
|Get DHL Location    |Recupera varias ubicaciones de DHL|

</container>
