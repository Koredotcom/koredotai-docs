---
title: SurveyMonkey

permalink: platform/instructions/en/latest/Actions/surveyMonkey_INS

---

<base target="_blank">




**Authorization**
 
To connect to SurveyMonkey, Kore.ai uses OAuth authentication. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile. [Learn More](https://api.surveymonkey.com/v3/docs?shell#SurveyMonkey-Api)
 
 |Authorization Type                      |  OAuth - System | OAuth - Custom |
 |----------------------------------------|-----------------|----------------|
 |Pre-authorize the Integration           |      No         |     Yes        |
 |Allow Users to Authorize the Integration|      No         |     Yes        |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**OAuth - Custom**
 You can create your authorization profile to obtain an access token and use it to complete integration.

 1. Select **Custom**.
 
 2. Click **Select Authorization**.
 
 3. Select **Create New**.
 
 4. Select the type of authorization mechanism.
    
    i. Select OAuth v2
    
    ii. Navigate to **[https://developer.surveymonkey.com](https://developer.surveymonkey.com)** and log in.

    iii. Anyone with a SurveyMonkey account can register an app. Before the 90-day period ends, you must deploy your app as either Public or Private and upgrade your account as needed.
 [refer](https://api.surveymonkey.com/v3/docs?shell#public-apps).
    
    iv. Enable the below scopes. [refer](https://api.surveymonkey.com/v3/docs?shell#scopes).

        surveys_read collectors_read collectors_write responses_write
    
    v. Copy the Client ID and Client Secret to the Kore.ai platform from [here](https://developer.surveymonkey.com/apps).
 
    vi. Copy Authorization URL:

        https://api.surveymonkey.com/oauth/authorize?response_type=code&state=uniquestring
     
    vii. Copy Token URL:
    
        https://api.surveymonkey.com/oauth/token
     
    viii. Add the below scopes:

        surveys_read collectors_read collectors_write responses_write
     
    ix. Copy Refresh Token URL:
    
        https://api.surveymonkey.com/oauth/token

 6. Save **Authorization Profile**.
 
 7. Select the created Authorization Profile to complete integration.
 
 8. Click **Authorize**.
 
 9. It will redirect you to the SurveyMonkey login page. 
 
 10. Provide your credentials to connect with your SurveyMonkey account.
   
 11. Click **Enable**.
    

 
**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization.
 
 **OAuth - Custom**
 
 You can create your authorization profile to obtain an access token and use it to complete integration.
 
 1. Select **Custom**.
 
 2. Click **Select Authorization**.
 
 3. Select **Create New**.
 
 4. Select the type of authorization mechanism.
    
    i. Select OAuth v2
    
    ii. Navigate to **[https://developer.surveymonkey.com](https://developer.surveymonkey.com)** and log in.

    iii. Anyone with a SurveyMonkey account can register an app. Before the 90-day period ends, you must deploy your app as either Public or Private and upgrade your account as needed.
 [refer](https://api.surveymonkey.com/v3/docs?shell#public-apps).
    
    iv. Enable the below scopes. [refer](https://api.surveymonkey.com/v3/docs?shell#scopes).

        surveys_read collectors_read collectors_write responses_write
    
    v. Copy the Client ID and Client Secret to the Kore.ai platform from [here](https://developer.surveymonkey.com/apps).
 
    vi. Copy Authorization URL:

        https://api.surveymonkey.com/oauth/authorize?response_type=code&state=uniquestring
     
    vii. Copy Token URL:
    
        https://api.surveymonkey.com/oauth/token
     
    viii. Add the below scopes:

        surveys_read collectors_read collectors_write responses_write
     
    ix. Copy Refresh Token URL:
    
        https://api.surveymonkey.com/oauth/token

 6. Save **Authorization Profile**.
 
 7. Select the created Authorization Profile to complete integration.
 
 8. Click **Enable**.
