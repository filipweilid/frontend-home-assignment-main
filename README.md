# Corti Frontend Home Assignment

Take all the time that you need to complete the assignment. We expect to see all the user stories fulfilled. Although there is no strict maximum, we do not expect you to spend more than 3-4 hours on this.

## Task - Directory Browser

You have to build the application which displays a file system directory structure similar to the example wireframe provided. Items can only be one of two types - file or folder, which should be visually distinguishable.

**Folder is active**

![2](./example/2.png)

**File preview is active**

![2](./example/1.png)

### User story 1 - View tree

As a user I can see the files and folders rendered as a tree structure in the `sidebar`, where contents of the folder are **ordered alphabetically**.

### User story 2 - Expand/collapse

As a user I can click once on a folder in the `sidebar` to expand/collapse it's contents. The same click will also make the folder active. Expanding/collapsing a folder should not result in previously expanded/collapsed folders to change state.

### User story 3 - Activating a file/folder in sidebar

As a user I can click on a folder or file in the `sidebar` to make it active. Currently active file/folder should be displayed in the `main` area.

- Active folder should display it's contents in the `main` area.
- Active file should display it's name and type in the `main` area.

### User story 4 - Activating a file/folder in main area

As a user I can click on a file or folder in the `main` area to activate it. When activated, it should also expand the path to the folder in the `sidebar` tree.

### Non-functional requirements

- We prefer `typescript` but you can write your solution in `javascript` too.

- We do not require tests, but feel free to add it if you see the actual need.

- You can choose to use any third party libraries that you see the need for.

- We don't require the application to be beautifully styled, but we expect you to implement the layout as in the example.

- You only need to make it work on desktop screens, no mobile views required.

- You can use all modern css features (we will test on the newest chrome).

## How to work

We provide a `create-react-app` bootstraped project with `typescript` support (not mandatory to use). You should only need to write your implementation in the `src` directory, but feel free to add any supporting files, tools or configs outside the `src` if you see the need for it.

To run the frontend client:

```
npm start
```

There is an api server provided that will serve the data to your frontend application.

To run the api server locally:

```
npm run server:start
```

Api will be available from your client by requesting this url `/api/v1/tree` (proxy is configured in `package.json`)

```js
fetch('/api/v1/tree');
```

## How we review

- We value quality over feature-completeness. You don’t need to implement more than it’s asked for, instead imagine you were given these requirements by your product manager.

- It is fine to leave things aside provided you call them out in your project's README. The goal of this code sample is to help us understand how you approach a given problem and how you make decisions when writing the implementation. It does not need to be production ready code (all the edge cases or errors handled), but it needs to lay the initial foundation which can be extended further by you or your team. You should consider this code ready for a code review with your colleague.

- Don’t worry about having a super clean git history - some history is better than 1 squashed commit.

## How to submit

- We appreciate if you give us some feedback on this assignment in this README file below. Is the task too difficult/easy? Is it easy to understand what's asked for you to do? Is the scope of the task too big? Any feedback is welcome.

- Upload this project to a public or private github repository. If repo is private, do not forget to invite the list of people that are mentioned in the email you received Alternatively, send the project in a zip file and share by email.

- **IMPORTANT:** Don't forget to add a number of hours it took you to complete it!

## Your notes

It is a good task with a good scope, it was easy to understand what is asked to do. I spent ~3 hours to complete it.

I did make some changes, like removing create-react-app and using Vite instead because CRA is no longer recommended by the React team and is very outdated. There were also some older dependencies that I updated. A good idea would probably be to look over this assignment and update it to use the latest versions of everything. Before I change to Vite I was unable to run the project as it was using Node 18 but Node 16 works fine.

For styling I decided to use Tailwind because I like the consistency it provides and it is very easy to use.
