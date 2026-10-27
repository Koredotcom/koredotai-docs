---
title: Freshsales

permalink: platform/instructions/es/latest/Actions/freshsales


---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite conectar fácilmente su instancia de Freshsales para encontrar respuestas a sus consultas generales.

</container>

<container>

**Autorización**

Para conectarse a Freshsales, Kore.ai utiliza autenticación básica. El usuario puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación. [Más información.](https://developers.freshworks.com/crm/api/#introduction)


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el dominio y la API Key para autorizar la integración.

2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Freshsales.

   a. Dominio - Encontrará su dominio de Freshsales en la barra de direcciones de su navegador.

        i. Ejemplo: https://<domain>.freshwork.com.

       ii. Copie el dominio desde aquí al campo Subdominio de usuario en la plataforma Kore.ai XO.

   b.  API Key

       i.  Inicie sesión en la instancia de Freshsales.

       ii.  Haga clic en su foto de perfil y seleccione Configuración del perfil.

       iii. Haga clic en la pestaña API Settings.

       iv.  Puede encontrar su API key en el campo Your API key.

        v.  Copie la API Key en la plataforma Kore.ai XO como Token token=Your_Api_key.

 3. Haga clic en Habilitar.

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para autorizar la integración.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione API Key.

   ii.  Proporcione un nombre para el perfil de autorización.

   iii. Seleccione Subdominio como Sí, algunas tareas tendrán URLs de tenencia y el usuario necesitará proporcionarlas para autenticarse correctamente.

   iv. Agregue la URL base https://{tenant}.myfreshworks.com

   v. En Campos de autorización, haga clic en editar y seleccione Tipo de campo como encabezado, Clave de campo como "Authorization" y Valor de campo como "{{key}}".

   vi. Proporcione la URL de verificación de autenticación.

        Ejemplo: `https://{tenant}.myfreshworks.com/crm/sales/api/contacts/filters`

   vii. Haga clic en Guardar autenticación

 6.  Haga clic en Habilitar.



 </container>

 <container>

**¿Qué se puede lograr integrando Freshsales con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO admite todas las acciones comunes en Freshsales con plantillas de diálogo preconstruidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Create contact   |Automatiza la creación de un contacto.|
|Update contact  |Actualiza los detalles de la información de un contacto en particular.|
|Delete contact  |Elimina un contacto.|
|List all contacts|Obtiene una lista de todos los contactos.|
|ViewContactByNameOrEmail|Visualiza los detalles de un contacto por nombre o correo electrónico.|
|Create deal |Automatiza la creación de un negocio.|
|Update deal|Actualiza un negocio.|
|Delete deal|Elimina un negocio con dealId.|
|List all deals|Obtiene una lista de todos los negocios.|
|ViewDealByName|Visualiza los detalles de un negocio por nombre.|
</container>
