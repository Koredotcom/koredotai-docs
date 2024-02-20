---
title: BambooHR

permalink: platform/instructions/en/latest/Actions/bamboohr_INS

---

<base target="_blank">




**Authorization**
 
To connect to a Bamboo HR account, Kore.ai uses basic authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or their own authorization profile during the configuration process to let the end user authorize during the conversation. Learn More.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.


 **Basic**
 
1. Provide Subdomain and API Key to authorize the integration.
 
2. Follow the steps below to get the required details from your BambooHR instance. To fetch the required details, navigate to [https://company.bamboohr.com/](https://company.bamboohr.com/)
 
    i.   Replace the **company** in the above URL with your company domain. You will find your domain in your browser's address bar. The text just before  bamboohr.com is your domain.

    ii.    If the domain you have entered is correct, you will be navigated to a page to provide your email and password to log in to the developer account. 
      
    iii.    After you have logged in successfully, navigate to the profile section and click on API Keys.
      
    iv.    Click Add New Key
       
    v.    Provide a name and click on Generate Key
      
    vi.    Copy generated key and paste it into Kore.ai XO Platform API key field.
      
    vii.    Click Enable.
 
 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to **Authorize** the Integration.
 
2. Click Select **Authorization**.
 
3. Select **Create New**.
 
4. Select the type of authorization mechanism.
 
    i. Select Basic Auth
 
   ii. Provide a name for the authorization profile
 
5. Save **Authorization Profile**.
 
6. Select the created **Authorization Profile** to complete integration.
 
7. Click **Enable**.
 

 




