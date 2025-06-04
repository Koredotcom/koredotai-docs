---
title: ServiceNow


permalink: platform/instructions/en/latest/Actions/serviceNow_INS


---


<base target="_blank">








**Authorization**

To connect to a client's ServiceNow account, Kore.ai uses basic and OAuth2.0 authentication. The developer can pre-authorize the integration by providing their credentials during the configuration process or they can create an authorization profile to let the end user authorize the integration during the conversation.


 |Authorization Type                      | Basic | OAuth - System | OAuth - Custom |
 |----------------------------------------|-------|----------------|----------------|
 |Pre-authorize the Integration           |  Yes  |       No       |       Yes      |
 |Allow Users to Authorize the Integration|  Yes  |       No       |       Yes      |




**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**

1. Provide Subdomain, Username, and Password to authorize the integration.
 
2. Follow the steps below to get the required credentials from your Service Now developer instance.
 
    i.    To fetch the required details, navigate to https://developer.servicenow.com/dev.do#!/home.
     
   ii.    A page with the Request Instance button is displayed (if no instance is  created for you.)

   iii.   Click Request Instance.

    iv.   Copy the Instance URL from here to the User Subdomain field on the Kore.ai XO Platform.

     v.   Copy the Username and Password to their respective fields on the Kore.ai XO Platform.

     vi.  Click Enable.
![gif](/koredotai-docs/images/Home%20_%20Loom%20-%2019%20December%202022.gif)


**OAuth - Custom**
1. Select **Custom**.
2. Click **Select Authorization**.
3. Select **Create New**.
4. Select the type of authorization mechanism.

   i.  Select OAuth v2
   
   ii.  Navigate to your ServiceNow instance and log in -
   
      &nbsp;&nbsp; a. From the ServiceNow Instance Home Screen, Select “All” and navigate to System OAuth → Application Registry.
      
      &nbsp;&nbsp; b. Click on the New Button and navigate to the “What kind of OAuth Application” screen.
      
      &nbsp;&nbsp; c. Select the “Create an OAuth API endpoint for external clients” option and navigate to the app details screen.
      
      &nbsp;&nbsp; d. Select the “Create an OAuth API endpoint for external clients” option and navigate to the app details screen.
   
   iii.  Copy Client Id from your ServiceNow OAuth Application into Client Id to Kore.ai platform
   
   iv.  Copy Client Secret from ServiceNow OAuth Application into Client Secret to Kore.ai platform
   
   v.  Copy Authorization URL (https://{tenant}.service-now.com/oauth_auth.do)
   
   vi. Enable the **Subdomain (aka Tenanancy URL)** option and add the following as **Base URL** (https://{tenant}.service-now.com)
   
   vii. Copy Token URL (https://{tenant}.service-now.com/oauth_token.do)
   
   viii.  Leave the scope field empty
   
   ix. Copy Refresh Token URL (https://{tenant}.service-now.com/oauth_token.do)

6. Save **Authorization Profile**.
7. Select the created Authorization Profile to complete integration.
8. Click **Authorize**.
9. It will redirect you to the ServiceNow instance login page.
10. Provide your credentials to connect with your ServiceNow account.
11. Click **Allow**.


**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.

**Basic**
 
1. Select All Users to Authorize the Integration.
 
2. Click Select Authorization.
 
3. Select Create New.
 
4. Select the type of authorization mechanism. 
 
   i.  Select Basic Auth. 
 
   ii.  Provide a name for the authorization profile. 
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Enable.

**OAuth - Custom**
1. Select **Custom**.
2. Click **Select Authorization**.
3. Select **Create New**.
4. Select the type of authorization mechanism.

   i.  Select OAuth v2
   
   ii.  Navigate to your ServiceNow instance and log in -
   
      &nbsp;&nbsp; a. From the ServiceNow Instance Home Screen, Select “All” and navigate to System OAuth → Application Registry.
      
      &nbsp;&nbsp; b. Click on the New Button and navigate to the “What kind of OAuth Application” screen.
      
      &nbsp;&nbsp; c. Select the “Create an OAuth API endpoint for external clients” option and navigate to the app details screen.
      
      &nbsp;&nbsp; d. Select the “Create an OAuth API endpoint for external clients” option and navigate to the app details screen.
   
   iii.  Copy Client Id from your ServiceNow OAuth Application into Client Id to Kore.ai platform
   
   iv.  Copy Client Secret from ServiceNow OAuth Application into Client Secret to Kore.ai platform
   
   v.  Copy Authorization URL (https://{tenant}.service-now.com/oauth_auth.do)
   
   vi. Enable the **Subdomain (aka Tenanancy URL)** option and add the following as **Base URL** (https://{tenant}.service-now.com)
   
   vii. Copy Token URL (https://{tenant}.service-now.com/oauth_token.do)
   
   viii.  Leave the scope field empty
   
   ix. Copy Refresh Token URL (https://{tenant}.service-now.com/oauth_token.do)

6. Save **Authorization Profile**.
7. Select the created Authorization Profile to complete integration.
8. Click **Authorize**.
9. It will redirect you to the ServiceNow instance login page.
10. Provide your credentials to connect with your ServiceNow account.
11. Click **Allow**.
