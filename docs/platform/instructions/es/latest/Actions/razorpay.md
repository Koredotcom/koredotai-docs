---
title: Razorpay

permalink: platform/instructions/es/latest/Actions/razorpay

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Razorpay con la plataforma Kore.ai XO para potenciar sus conversaciones y crear facturas, obtener tickets y realizar otras acciones.

La plataforma Kore.ai XO le permite integrarse con Razorpay usando Basic Auth, lo que le permite conectar su instancia de Razorpay fácilmente.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Razorpay, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Básica**

1. Proporcione el Key ID y el Key Secret para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Razorpay.

   a.  API Key

       i. Inicie sesión en su instancia de Razorpay. https://dashboard.razorpay.com/.

       ii. Haga clic en la pestaña de configuración.

       iii. Haga clic en API Keys.

       iv. Haga clic en Generate Key.

        v. Copie el Key ID en el campo Key ID de la plataforma Kore.ai XO.

       vi. Copie el Key Secret en el campo Key Secret de la plataforma Kore.ai XO.

       vii. Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Básica**

1. Seleccione Permitir a todos los usuarios autorizar la integración.
2. Haga clic en Seleccionar autorización.
3. Seleccione Crear nuevo.
4. Seleccione el tipo de mecanismo de autorización.

    i. Seleccione Basic Auth

   ii. Proporcione un nombre para el perfil de autorización.

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Habilitar.


</container>

<container>

**¿Qué se puede lograr integrando Razorpay con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en objetos de Razorpay con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Invoice     |Generar una nueva factura|
|Get Ticket by Id   |Recuperar un ticket por su ID único|
|List All Tickets |Mostrar una lista de todos los tickets|
|Update Ticket  |Modificar un ticket existente|
|Delete Ticket     |Eliminar un ticket|
|Search Ticket     |Encontrar un ticket usando criterios de búsqueda especificados|

</container>


