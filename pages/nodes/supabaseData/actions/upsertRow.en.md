This action allows you to perform an "upsert" operation on a specific row in a table of your Supabase project.

When you use the "upsertRow" action, you need to specify the name of the table where the row exists or should be inserted, as well as the unique identifier or criteria for determining the row to be updated or inserted. Additionally, you provide the values for the columns of the row.

The "upsertRow" action combines the functionalities of the "update" and "insert" operations. If a row matching the specified criteria exists, it will be updated with the provided values. If a row doesn't exist, a new row will be inserted with the provided values.

This action is particularly useful when you want to update a row if it exists or insert a new row if it doesn't exist, all in a single API call.