---
title: Zoho CRM

permalink: platform/instructions/en/latest/Actions/zoho_INS

---

<base target="_blank">




**Authorization**
 
To connect to Zoho CRM, Kore.ai uses OAuth authentication. The end-user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. [Learn More](https://www.zoho.com/crm/developer/docs/api/v5/).
 
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       No       |       Yes      |
 |Allow Users to Authorize the Integration|       No       |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
 
**OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Zoho app for authorization.
 
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select OAuth v2
 
   ii.  Navigate to **api-console.zoho.com** and log in 
 
   iii.  Navigate to Apps → select the app → Click on Auth
 
   iv.  Copy Client Id from Zoho into Client Id to Kore.ai platform
 
    v.  Copy Client secret from Zoho into Client Secret to Kore.ai platform
 
   vi.  Copy Authorization URL (https://accounts.zoho.com/oauth/v2/auth)
   
      You must use your domain-specific Zoho Accounts URL as mentioned to generate access token. The following are the various domains and their corresponding accounts URLs.

     - For US: https://accounts.zoho.com
     - For AU: https://accounts.zoho.com.au
     - For EU: https://accounts.zoho.eu
     - For IN: https://accounts.zoho.in
     - For CN: https://accounts.zoho.com.cn
     - For JP: https://accounts.zoho.jp
     - For CA(Canada): https://accounts.zohocloud.ca
 
   vii. Copy Token URL (https://accounts.zoho.in/oauth/v2/token)
   
      You must use your domain-specific Zoho Accounts URL as mentioned to generate refresh token. Please refer to **vi**
 
    viii.  Add below scopes 
 
         1. ZohoCRM.modules.leads.ALL
 
    ix. Copy Refresh Token URL (https://accounts.zoho.in/oauth/v2/token)
   
      You must use your domain-specific Zoho Accounts URL as mentioned to refresh your access token. Please refer to **vi**
 
6. Save **Authorization Profile**.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click **Authorize**.
 
9. It will redirect you to the Zoho login page **accounts.zoho.com**. 
 
10. Provide your credentials to connect with your Zoho account. 
   Please note that you are allowing your custom app to fetch the access token to complete the authorization and not using Kore.ai’s Zoho app for the same.
 
11. Click **Enable**.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration without using Kore.ai's Zoho app for authorization.
 
1. Select **Custom**.
 
2. Click **Select Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism. 
 
    i.  Select OAuth v2
 
   ii.  Navigate to **api-console.zoho.com** and log in 
 
   iii.  Navigate to Apps → select the app → Click on Auth
 
   iv.  Copy Client Id from Zoho into Client Id to Kore.ai platform
 
    v.  Copy Client secret from Zoho into Client Secret to Kore.ai platform
 
    vi.  Copy Authorization URL (https://accounts.zoho.com/oauth/v2/auth)
   
      You must use your domain-specific Zoho Accounts URL as mentioned to generate access token. The following are the various domains and their corresponding accounts URLs.

     - For US: https://accounts.zoho.com
     - For AU: https://accounts.zoho.com.au
     - For EU: https://accounts.zoho.eu
     - For IN: https://accounts.zoho.in
     - For CN: https://accounts.zoho.com.cn
     - For JP: https://accounts.zoho.jp
     - For CA(Canada): https://accounts.zohocloud.ca
 
   vii. Copy Token URL (https://accounts.zoho.in/oauth/v2/token)
   
      You must use your domain-specific Zoho Accounts URL as mentioned to generate refresh token. Please refer to **vi**
 
    viii.  Add below scopes 
 
         1. ZohoCRM.modules.leads.ALL
 
    ix. Copy Refresh Token URL (https://accounts.zoho.in/oauth/v2/token)
   
      You must use your domain-specific Zoho Accounts URL as mentioned to refresh your access token. Please refer to **vi**
 
6. Save **Authorization Profile**.
 
7. Select the created Authorization Profile to complete integration.
 
8. Click **Enable**.
