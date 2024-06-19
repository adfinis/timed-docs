# Tasks

:::tip
A `task` is a project-owned entity. Therefore, the [project](/docs/administration/projects.md) must exist prior to task creation.

check here to [Create a Project](/docs/administration/projects.md#create-new-project)
:::

## Create new Task

There are two locations that you can create a task with it

* From Django admin panel
* From the [Projects](/docs/projects.md) Page in the Timed software


### Create a task from Django Admin
* In the project section inside [Django Admin Panel](/docs/administration/index.md#django-admin-panel), you can see `projects`
* Either you are creating new project or you are in editing project form, there is `TASKS` section
![Project Task Form](/adminstration/tasks/tasks-form.png){data-zoomable}

### Create a task from Timed side
:::tip
having the access to Timed app only, does not allow you to create new tasks in [Projects](/docs/projects.md) page, you should have `is manager` [role](/docs/administration/projects.md#assign-a-role-to-the-user-for-the-project) in the project.
:::

* Go to [Projects](/docs/projects.md) page
* you will get a list of customers that you have `is manager` role in one of this customer projects.
![Project Customers](/adminstration/tasks/timed-project-tasks.png){data-zoomable}
* after selecting a customer, you can see the list of the selected customer projects
![Project Tasks](/adminstration/tasks/timed-project-tasks.png){data-zoomable}
* After selecting the project, you can see the list of the tasks that belongs to the selected project
![Project Tasks List](/adminstration/tasks/project-tasks-list.png){data-zoomable}
* or you can create new task by clicking `ADD TASK` button, and you will see the following form. (The `Name` field is required)
![Project New Task Form](/adminstration/tasks/add-task-form.png){data-zoomable}

