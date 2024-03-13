# Filters

The filter component is used in `Analysis` and `Statistic` page, and you can filter the fetched results via:

## Task
![Task Filter](/filters/filter_task.png)

you can filter the results via `Customer`, `Project`, `Task`.


## Responsibility
![Task Filter](/filters/responsibility.png)

you can filter the results via `User`, the creator of the report,

or the `Reviewer`, the responsible person of the project or task.


## Finance
![Task Filter](/filters/finance.png)



## Time Range
![Task Filter](/filters/time_range.png)

You can define the time range of the task. so you can fetch the task that is `from` a date or `to` date, or something in between.



## State
![Task Filter](/filters/state.png)

The state of the task, whether it's your task or not.

note: In all cases, there is state `All`, even if it's not selected, this is the default value of the all states

#### Review:
when creating the report, there is a field that can be set `need review`, it will display 
for the responsible person of the `Project`, `Task`.

by deinig this filter, it will show all reports that have `need review` field, and not reviewed yet
