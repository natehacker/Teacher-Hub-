# GA teacher's hub

The aim of our project is to develop a hub/portal for instructors to maintain class records--including enrolled students and their assignements--in one place.

## Entity relationships

The app will enables instructors to create, read, update, and delete classes, students, and assignments they've added after registering.

![ERD](/readmeAssets/teacherHub_erd.png)

In hindsight, the entity relationship in the backend somewhat severely impacts the order of operations within the app and limits our ability to execute stretch goals later on without completely rebuilding it.

Assignments each belong to one student, each student belongs to one class, and each class belongs to one teacher. This is somewhat limiting in practice. Some examples:

1. Teachers can't assign material until they've "enrolled" all students manually. Since each assignment needs an associated student id.

2. There can't be more than one teacher per class. So multiple teachers and assistants currently wouldn't have the same access to CRUD class, student, or assignment data.

3. Students rely on teachers to enroll and update their assignments instead of having the ability to create an account, enroll in a class listed by a teacher, and submit their own github/deployed links.

This was disappointing to realize but a good learning experience regarding the impact of entity relationships in relation to the scope/goals of the project. And this app still serves as a decent proof of concept. 


## Tentative component heirarchy

The app was built with React.js leveraging protected routes and conditional rendering based on user authentication. Our initial component heirarchy diagram is below:

![CHD](/readmeAssets/teacherHubCHD.png)

## Application screenshots

A general idea/medium res wireframe for the look and feel of different app pages and features.

### Registration
![sign-in](/readmeAssets/final/GA_register.png)

### Class portal (new account)
![class portal](/readmeAssets/final/GA_PortalNoClasses.png)

### Add a class
![add a class](/readmeAssets/final/GA_addClass.png)
![class added](/readmeAssets/final/GA_PortalInit.png)

### Adding a student
![add a student](/readmeAssets/final/GA_addStudent.png)
![added a student](/readmeAssets/final/GA_addedStudent.png)

### Adding and updating an assignment
![add an assignment](/readmeAssets/final/GA_addAssignment.png)
![added an assignment](/readmeAssets/final/GA_addedAssignment.png)
![updating an assignment](/readmeAssets/final/GA_updateAssignment.png)
![updated an assignment](/readmeAssets/final/GA_afterUpdate.png)



## Styleguide

Since the branding of our project revolves around GAs brand its best to avoid arbitrary departures from the look and feel of General Assembly's own website. Below are recommendation on colors and typography to ensure group is on the same page and will develop a cohesive project.

### Colors

- ![#212222](https://placehold.co/15x15/212222/212222.png) `212222` , `RGB: 33, 34, 34`
- ![#c3c3c1](https://placehold.co/15x15/c3c3c1/c3c3c1.png) `c3c3c1` , `RGB: 195, 195, 193`
- ![#f3f3f4](https://placehold.co/15x15/f3f3f4/f3f3f4.png) `f3f3f4` , `RGB: 243, 243, 244`
- ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) `ffffff` , `RGB: 255, 255, 255`
- ![#a01d21](https://placehold.co/15x15/a01d21/a01d21.png) `a01d21` , `RGB: 160, 29, 33`
- ![#ef4845](https://placehold.co/15x15/ef4845/ef4845.png) `ef4845` , `RGB: 239, 72, 69`
- ![#bca430](https://placehold.co/15x15/bca430/bca430.png) `bca430` , `RGB: 188, 164, 48`
- ![#feda00](https://placehold.co/15x15/feda00/feda00.png) `feda00` , `RGB: 254, 218, 0`
- ![#017992](https://placehold.co/15x15/017992/017992.png) `017992` , `RGB: 1, 121, 146`

### Type

GA's sans-serif is `Circular` which isn't free but their font-stack includes `Helvetica` and `Arial` as fallbacks.

Similarly, their serif font is `News 706` which also isn't free but their font-stack for this includes `Georgia` as a fallback.

## Stretch goals

Our MVP goal wass to create a hub for instructors with the secondary stretch goal of enabling student access with lesser CRUD permissions. Unfortunately, we weren't able to meet this goal in the time alotted and the relative risk of restructure our backend relationships after making so much progress.