---
title: Plaid

permalink: platform/instructions/en/latest/Actions/plaid_INS

---
<base target="_blank">

**Authorization**

To connect to a Plaid account, Kore.ai uses OAuth 2.0 authentication. The user can use pre-authorized credentials provided by the developer during the configuration process or configure the authorization profile to let the end user authorize during the conversation.
 
 |Authorization Type                      | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Pre-authorize the Integration           |       No       |       Yes      |
 |Allow Users to Authorize the Integration|       No       |       Yes      |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.
 
**OAuth - Custom**

You can create your authorization profile to obtain an access token and use it to complete the integration without using Kore.ai for authorization. However, you need to set up the Plaid Quickstart App on your local machine and host it with a publicly accessible URL.(You can use ngrok for local testing). Follow the instructions below for more details.
 
1. Select Custom.

2. Click Select Authorization.
    
3. Select Create New.
    
4. Select the type of authorization mechanism.

i. Select oAuth v2.
  	
ii. Name the Authorization profile under the label “Identity Provider Name” and navigate to https://dashboard.plaid.com/overview and log in.
	
iii. On the left menu, go to “developers” and “keys” and copy the ClientId from the page and paste it into the ClientId field to the Kore.ai platform.

iv. Similarly, Copy the Client secret according to the environment [Sandbox,Development,Production] and paste it into the Client Secret field to the Kore.ai platform.

v. On the left menu, navigate to “API” under the same “Developers” list and click “Configure” beside the “Allowed redirect URI’s” label.

vi. Copy the callback URL from the authorization profile and click “add new URI” and paste it into the text field on the Plaid platform and save the changes.

vii.Then navigate to https://plaid.com/docs/quickstart/#introduction. Follow the detailed Youtube video until you get the quickstart app running [frontend & backend] on your local machine.

viii. Go to the repository - https://github.com/NikithaPa-Kore/Plaid_Guide_Code and replace the ‘/quickstart/frontend/src/Components/Link/index.tsx’ file in your Quickstart app with the index.tsx file’s content from the repo. Additionally, ensure that the Callback URL on line 44 in the repo file matches the callback URL from the Auth Profile on the Kore Platform in your Quickstart App.

ix.Go to the repository again and replace the ‘/quickstart/node/index.js’ file’s content in your Quickstart App with the one from the repo.

x. Make sure to set your .env file with the appropriate clientId, Secret, env, products, country codes, and app port. Make sure to check if the port number matches, even in the replaced files. 

NOTE: The following variables must be set in the .env file- 
| VARIABLE | VALUE |
|----------|-------|
| PLAID_PRODUCTS | auth,transactions,identity,investments,liabilities |
|PLAID_REDIRECT_URI | *The Callback URL from the AUTH profile*    |


5.The Authorization URL in the auth profile must be set to the frontend host URL of the quickstart app which is publicly hosted (Through ngrok [for testing purposes]).

6. Then in the “Subdomain (aka Tenanancy URL) ” field, select YES and enter the base URL as “https://{tenant}.plaid.com”.

7. The “Token request URL” and the “Refresh Token URL” must be set to the backend host URL of the quickstart app with the following endpoint - /api/send_the_access_token_AUTH.

      EX: https://example.com/api/send_the_access_token_AUTH

8. In the “Authorization Field(s) ” label, edit the existing "Authorization" field by clicking on the edit icon and set the following- 
   
| VARIABLE | VALUE |
|------------|----------|
| Field Type | payload |
| Field Key  | access_token |
| Field Value | {{accessToken}} |

NOTE: Field Value = {{accessToken}}

9. Then proceed to “Add Authorization Fields” and set the following two fields.

| VARIABLE | VALUE |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-CLIENT-ID |
| Field Value | ENTER_YOUR_CLIENT_ID_HERE |

| VARIABLE | VALUE |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-SECRET |
| Field Value | ENTER_YOUR_CLIENT_SECRET_HERE |

10. Make sure to follow all the above steps in order to Authorize with Plaid Properly. Then save the Authorization Profile.

11. Select the created Authorization Profile to complete integration. Click Authorize. It will redirect you to the Plaid Quickstart login page.

12. Complete the login process by giving corresponding App permissions and you’ll be successfully authorized to Plaid.
 
-----------------------------------------------------------------------

**Allow Users to Authorize the Integration**
 
This method requires the end user to provide credentials during the conversation for authorization. Please note that a link will be sent to the end-user during the conversation to grant access to Kore.ai’s app to fetch the access token.
 
 **OAuth - Custom**
 
You can create your authorization profile to obtain an access token and use it to complete the integration without using Kore.ai for authorization. However, you need to set up the Plaid Quickstart App on your local machine and host it with a publicly accessible URL.(You can use ngrok for local testing). Follow the instructions below for more details.

1. Select Custom.

2. Click Select Authorization.
    
3. Select Create New.
    
4. Select the type of authorization mechanism.

i. Select oAuth v2.
  	
ii. Name the Authorization profile under the label “Identity Provider Name” and navigate to https://dashboard.plaid.com/overview and log in.
	
iii. On the left menu, go to “developers” and “keys” and copy the ClientId from the page and paste it into the ClientId field to the Kore.ai platform.

iv. Similarly, Copy the Client secret according to the environment [Sandbox,Development,Production] and paste it into the Client Secret field to the Kore.ai platform.

v. On the left menu, navigate to “API” under the same “Developers” list and click “Configure” beside the “Allowed redirect URI’s” label.

vi. Copy the callback URL from the authorization profile and click “add new URI” and paste it into the text field on the Plaid platform and save the changes.

vii.Then navigate to https://plaid.com/docs/quickstart/#introduction. Follow the detailed Youtube video until you get the quickstart app running [frontend & backend] on your local machine.

viii. Go to the repository - https://github.com/NikithaPa-Kore/Plaid_Guide_Code and replace the ‘/quickstart/frontend/src/Components/Link/index.tsx’ file in your Quickstart app with the index.tsx file’s content from the repo. Additionally, ensure that the Callback URL on line 44 in the repo file matches the callback URL from the Auth Profile on the Kore Platform in your Quickstart App.

ix.Go to the repository again and replace the ‘/quickstart/node/index.js’ file’s content in your Quickstart App with the one from the repo.

x. Make sure to set your .env file with the appropriate clientId, Secret, env, products, country codes, and app port. Make sure to check if the port number matches, even in the replaced files. 

NOTE: The following variables must be set in the .env file- 
| VARIABLE | VALUE |
|----------|-------|
| PLAID_PRODUCTS | auth,transactions,identity,investments,liabilities |
|PLAID_REDIRECT_URI | *The Callback URL from the AUTH profile*    |


5.The Authorization URL in the auth profile must be set to the frontend host URL of the quickstart app which is publicly hosted (Through ngrok [for testing purposes]).

6. Then in the “Subdomain (aka Tenanancy URL) ” field, select YES and enter the base URL as “https://{tenant}.plaid.com”.

7. The “Token request URL” and the “Refresh Token URL” must be set to the backend host URL of the quickstart app with the following endpoint - /api/send_the_access_token_AUTH.

      EX: https://example.com/api/send_the_access_token_AUTH

8. In the “Authorization Field(s) ” label, edit the existing "Authorization" field by clicking on the edit icon and set the following- 
   
| VARIABLE | VALUE |
|------------|----------|
| Field Type | payload |
| Field Key  | access_token |
| Field Value | {{accessToken}} |

NOTE: Field Value = {{accessToken}}

9. Then proceed to “Add Authorization Fields” and set the following two fields.

| VARIABLE | VALUE |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-CLIENT-ID |
| Field Value | ENTER_YOUR_CLIENT_ID_HERE |

| VARIABLE | VALUE |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-SECRET |
| Field Value | ENTER_YOUR_CLIENT_SECRET_HERE |

10. Make sure to follow all the above steps in order to Authorize with Plaid Properly. Then save the Authorization Profile.

11. Select the created Authorization Profile to complete integration. Click Authorize. It will redirect you to the Plaid Quickstart login page.

12. Complete the login process by giving corresponding App permissions and you’ll be successfully authorized to Plaid.

-----------------------------------------------------------------------
 
