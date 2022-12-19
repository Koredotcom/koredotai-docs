---
title: Service Now

permalink: platform/instructions/en/latest/serviceNow

---

<container>

**Overview**

Connect Service Now to manage tickets, requests and perform various other actions.

The Kore.ai XO Platform allows you to integrate with Service Now, enabling you to easily connect your Service Now instance. This integration allows you to perform actions on tickets (incidents) and requests, including creating, updating, and closing them. It ensures that you have the ability to manage these items effectively.

</container>

<container>

**Authorization**
 
To connect to a client's Service Now account, Kore.ai uses basic authentication. The user has the option to use pre-authorized credentials provided by the developer during the configuration process, or can use their own authorization profile during the configuration process to let the end user authorize during the conversation. Learn More.
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


    **Pre-authorize the Integration**
 
        To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access           token.

       **Basic**
 
          1. Provide Subdomain, Username, and Password to authorize the integration. Follow the below steps to get the required credentials from your Service Now                developer instance
          2. To fetch the required details, navigate to
          3. A page with the Request Instance button would appear (if there is no instance created for you)
          4. Click on “Request Instance”
          5. Copy instance URL to Subdomain field in Kore.ai XO Platform
          6. Copy the Username and Password to their respective fields into the Kore.ai XO Platform
          7. Click “Enable”
 
 
    **Allow Users to Authorize the Integration**
 
         This method requires the end user to provide credentials during the conversation for authorization.
 
       **Basic**
 
          1. Select “All Users to Authorize the Integration”
          2. Click “Select Authorization”
          3. Select “Create New”
          4. Select the type of authorization mechanism 
          5. Save Authorization Profile
          6. Select the created Authorization Profile to complete integration
          7. Click “Enable”

**Actions**
 
 The Kore.ai XO Platform provides support for all common actions on Service Now  Requests & Tickets objects with pre-built dialog templates that are ready to use.     Click “Explore Templates”. Learn More.
 
    **Templates Supported**
  
        | Action           | Description            |
        |------------------|------------------------|
        |Create Incident   |------------------------|
        |Update Incident   |------------------------|
        |Find Incident     |------------------------|
        |Delete Incident   |------------------------|
        |List All Incidents|------------------------|
        |Create Request    |------------------------|
        |Update Request    |------------------------|
        |Find Request      |------------------------|
        |Delete Request    |------------------------|
        |Find All Requests |------------------------|

</container>

