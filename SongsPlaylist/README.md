# React with Redux- Project 1

`npm install --save redux react-redux`

![Untitled](readmeimages/Untitled.png)

![Untitled](readmeimages/Untitled%201.png)

![Untitled](readmeimages/Untitled%202.png)

![Untitled](readmeimages/Untitled%203.png)

![Untitled](readmeimages/Untitled%204.png)

All the state management is handle by the reducers. 

To change the state the Action creator is use full

—> To change the song, we select the song. The action creator tells the reducer→ Selected song reducer, to update itself. And change its state. 

—> Song list reducer is having a static list of songs are saved. 

![Untitled](readmeimages/Untitled%205.png)

We are using the two components — `Provider and Connect` these two components are created by the React-Redux

We will be creating the instance of this component and pass the props to that, to configure them.

Redux store contains all of our reducers and all the state of our application, we are going to pass the store as a prop to the provider.   And provider is present at the top of any component. Even top of the App component.

Connect component or tag, can communicate with the provider, which is present at the very top of the hierarchy. 

It communicate`s` with the provider not through the prop system, but through the different system called as `context system` allows any parent component to communicate with any child component, even if there are other components present in between.

![Untitled](readmeimages/Untitled%206.png)

Action creators are also passed as a prop to the connect component. 

The connect component takes all that data, states, and action creators, and shows up inside of our component as a prop, here SongList component 

![Untitled](readmeimages/Untitled%207.png)

![Untitled](readmeimages/Untitled%208.png)

![Untitled](readmeimages/Untitled%209.png)

### Final project screenshots

![Untitled](readmeimages/Untitled%2010.png)

![Untitled](readmeimages/Untitled%2011.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
