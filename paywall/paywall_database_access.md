# Pulling the paywall database

```bash
$ sudo -i -u postgres # switches to postgres user
$ heroku pg:pull postgresql-symmetrical-43624 OUTPUT_FILE_NAME --app uplift-paywall;
$ psql OUTPUT_FILE_NAME # accesses file
$ \COPY users TO 'path/to/file.csv' WITH CSV DELIMITER ',' HEADER;
```

* `psql` from postgres user to launch psql prompt. 

## Paywall columns
* users = uplift users who have purchased subscriptions (including tests)
* subscriptions = ignore this; it shouldn't have any data stored in it
* apple_iaps = apple receipts (in-app purchases); can be used to verify subscription status if you want, but that would require even more setup
* android_iaps = android receipts. if you have someone's email address, you can look for a receipt in this table. the receipt will have the order number in it.
* apple_webhooks = webhook hits from the apple app store. this is what i use to count the number of apple purchases and to make sure that there's a corresponding ios subscription purchase. user's subscription_id corresponds with the webhook original_transaction_id value.
