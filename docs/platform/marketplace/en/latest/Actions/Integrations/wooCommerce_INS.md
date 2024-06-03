---
title: WooCommerce

permalink: platform/instructions/en/latest/Actions/wooCommerce_INS

---






**Authorization**
 
To connect to a WooCommerce account, Kore.ai uses Basic Auth. The developer can use pre-authorized credentials during the configuration process or let the end user authorize during the conversation by creating an authorization profile.
 
 
 |Authorization Type                      | Basic |
 |----------------------------------------|-------|
 |Pre-authorize the Integration           |  Yes  |
 |Allow Users to Authorize the Integration|  Yes  |


**Pre-authorize the Integration**
 
 To make the integration process smoother for customers, you can pre-authorize it by providing the necessary authorization credentials to obtain the access token.

**Basic**
 
1. Provide Domain, Consumer Key and Consumer secret to authorize the integration.
   
2. Follow the steps below to get the required credentials from your WooCommerce store.
 
   a. Domain - You will find your WooCommerce domain in your browser's address bar.
   
        i. Example: https://<your-domain>.com

       ii. Copy the URL from here to the User Domain field on the Kore.ai XO Platform.
  
   b.  Consumer Key , Consumer secret
 
        i.  Login to the wordpress account.
      
       ii.  Click on woocommerce.
   
       iii. Click on Settings.
   
        iv. Click on advanced then select rest API.
  
         v. Click on add key, provide description and click generate API key.

        vi. Copy the Consumer key and Consumer secret into Kore.ai XO Platform.

       vii. Click Enable
   
4. Login to your wordpress account click on plugins then select add new plugins.

5. Search for "JWT Authentication for WP REST API" plugin and click install now and activate.

6. Go to tools and click plugin file editor, in the search bar select the plugin.

7. Edit the plugin as shown in the documentation "https://wordpress.org/plugins/jwt-authentitcation-for-wp-rest-api/".

8. In plugin files open the file "class-jwt-auth-public.php" and add
    ```
    'firstname'=>$user->first_name,
    'lastname'=>$user->last_name,
    'role'=>$user->roles
    ```
   in user object which is present in token object and also add 
    ```
    'id'=>$user->data->ID,
    'firstname'=>$user->first_name,
    'lastname'=>$user->last_name,
    'role'=>$user->roles
    ```
   in data object and update the file.

10. To get the tracking details for order status template install "YITH WooCommerce Order & Shipment Tracking" plugin.

 
**Allow Users to Authorize the Integration**

This method requires the end user to provide credentials during the conversation for authorization.
 
**Basic**
 
1. Select All Users to Authorize the Integration.
   
2. Click Select Authorization.
   
3. Select Create New.

4. Select the type of authorization mechanism. 
 
   i. Select Basic Auth
 
   ii. Provide a name for the Authorization Profile
 
5. Save Authorization Profile.
 
6. Select the created Authorization Profile to complete integration.
 
7. Click Enable.

8. Login to your wordpress account click on plugins then select add new plugins.

9. Search for "JWT Authentication for WP REST API" plugin and click install now and activate.

10. Go to tools and click plugin file editor, in the search bar select the plugin.

11. Edit the plugin as shown in the documentation "https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/".

12. In plugin files open the file "class-jwt-auth-public.php" and add
     ```
     'firstname'=>$user->first_name,
     'lastname'=>$user->last_name,
     'role'=>$user->roles
     ```
    in user object which is present in token object and also add 
     ```
     'id'=>$user->data->ID,
     'firstname'=>$user->first_name,
     'lastname'=>$user->last_name,
     'role'=>$user->roles
     ```
    in data object and update the file.

13. To get the tracking details for order status template install "YITH WooCommerce Order & Shipment Tracking" 
    plugin.

 