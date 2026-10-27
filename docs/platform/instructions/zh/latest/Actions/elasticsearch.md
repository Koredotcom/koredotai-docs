---
title: Elastic Search

permalink: platform/instructions/es/latest/Actions/elasticsearch

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite conectar fácilmente su instancia de Elastic Search para encontrar respuestas a sus consultas generales.

</container>

<container>

**Autorización**

Para conectarse a Elastic Search, Kore.ai utiliza autenticación básica. El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Por determinar

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

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

**¿Qué se puede lograr integrando Elastic Search con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Elastic Search con plantillas de diálogo preconstruidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Elastic Search     |Consulta el índice de Elastic Search y devuelve el resultado|

</container>
