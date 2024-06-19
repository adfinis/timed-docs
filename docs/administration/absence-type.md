# Absence Type

:::tip
With Absence, you can allow your employees to add those absence to thier working time.
:::

## Create New Absence
* go to [Django Admin Panel](/docs/administration/index.md#django-admin-panel).
* under `EMPLOYMENT` section, you can find `Absence Type`, which will take you to the list of absence type.
* in the top right, you can find `ADD ABSENCE TYPE` button.
![New Absence Form](/adminstration/absence-type/new-absence-form.png)

:::tip
* The name field is required
:::


## Absence Fill Worktime Field

Let's imagine that we are in Monday and there is an employee who worked for 3 hours.


The employee have 100% contract which is 8 working hours per day

And later he add an absence to the same day (Monday).

* If `Fill Wroktime` is `checked` of the inserted absence, Timed will insert only 8 hours to his day record
![Absence With Fill Worktime](/adminstration/absence-type/with.png)

* If `Fill Wroktime` is`not checked` of the inserted absence, Timed will insert 8 hours (his full working day) with 3 hours of extra working time
![Absence With Fill Worktime](/adminstration/absence-type/without.png)
