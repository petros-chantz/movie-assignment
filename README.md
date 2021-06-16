# Movie assignment

![movies-assignment](https://user-images.githubusercontent.com/71289091/122177914-5ad85a80-ce86-11eb-82f2-d90c28cc594c.JPG)

A movie search app utilizing [OMDb API](http://www.omdbapi.com/)

[live demo](https://movie-petros.netlify.app/) - [UI draft wireframe idea](https://www.figma.com/file/tXFh6N4OOsu0WNM2NlTH9D/Movie-Assignment?node-id=0%3A1)

### Technologies Used

React.js - Styled-Components - Fetch API - Netlify (Hosting)

### How to use 

- On the search bar type a complete or more than 2-3 characters long string (ex. harry) or set of strings (ex. The Good, the Bad and the Ugly)
- Do not search for movies with numbers or special characters such as (ex. 8 1/2) - will be explained in a following section 

### Time completed 

- Main app finished within the 3-4 hours requirement
- Hosting and writing further info about the assignment (such as README.md & fixing Netlify bugs) within 1-2 hours 

### Objectives of Project (as requested)
- Build a web application that uses the OMDB API without using external libraries like Axios 
- App should have a search bar at the top of the page from where the user can search for a movie
- Movie results should be displayed as movie in a way that showcases the title, the cover image, and links to the details about the movie
- Every movie box should be able to be collapsed or expanded to showcase the movie details (ex. year of release, plot etc)
- Demonstrate freedom to develop the UI/UX of the app without using external UI libraries 

### Finished features
- Mobile first app 
- UI/UX experience in a basic yet functional level 
- Creation of search bar and fetching data from OMDB API on Form Submit 
- Storing of API key in an .env file for safety
- Showcasing top 10 movies found with the given input name 
- Movie box presents users with poster, title and details button for each movie
- For movies that don't have a poster a black background is used to create the feeling of a "Not found" poster

### Incomplete features due to time constraints
- Validation of input 
    - Partially implementation of a "Not found" page on terms that don't exist such as for example "xaas" (bug due to fetched data.Response being sometimes an object and other times a string) and needed more time to investigate if nested ternary conditions are possible such as:
    `{isloading ? (
        <InitialScreen />
      ) : (
        termExists ? <Results/> : <NotFound/>
      )}`
      
    - Incomplete implementation of finding out if term submitted is a string or a number with an `if(typeof term === "string")`
    
    - Current fetched data do not allow the term to be less or equal to 2 characters (ex. searching for ca ) - did not have the time to investigate if that is a search bar validation issue or an OMDB API issue due to data being more than 2-3 characters long. 
    
    - Missing validation of external characters such as " % " or " * " for example 
    
- Details button 
    - Opening up of more details for each movie was not possible due to time constraints (you can find more details about how it would have looked like in the UI draft wireframe link above)

### Possible improvements for the future
- UI/UX could have been far more adventurous and stylistic
- Implement a link tag to the logo of the page to go back to the initial screen as now users don't have the possibility to go back. 
- Use React provider or context to pass props from parent to children different components because now there are some components that prop drilling is happening

### Developing Decisions
From the start of this assignment I knew that the time constraints will be my biggest enemy. Thus, I chose to focus on giving this app a basic rather not too adventurous look and style (in terms of the UI/UX experience) and focus all my attention on getting the logic/functionality of the app right. Within this app I chose to use React.js as I'm currently most comfortable (and fast) with it and used a create-react-app boilerplate to initialize the project. For the same reasons of speed, comfort and prerequisite knowledge I used styled-components. 

For fetching the data from OMDB I used a Fetch function and I made sure to hide the api key in an .env file for safety but also as a better practice. I have had experience in the past with fetching data on form submit thus I knew what I had to do from that side of the logic part. I tried as explained before to create the input validations for the different possible submitted terms but I was running out of time to fully implement them. 

For displaying the movie items I passed the fetched object into the MovieList component and iterated over with a map function to extract the info to each new movie item.

Lastly, I hosted the app in Netlify as I currently have an opened account there and know how it works. 

### Overall Reflection on Assignment
Overall I have to say that I'm more than satisfied with the end result given the time constraint and the requirements even if it's missing some features. Moreover my decision from the start to focus on delivering a complete and functional app was something that I personally found to be a huge personal improvement point. As in past challenges I have been hung-up on creating elaborate styles for assignments only to figure out in the middle that I'm running out of time and I have no time to think about functionally. I believe I lost a lot of time with a bug that I had on fetching data from the OMDB API which I could have used on working on the validation features of the app. Something I want to improve in the future is to write down beforehand a working tree of all the components that I'm going to build. As this makes it clearer in my head which props go where. 

Thank you very much for letting me have a go on this challenge. I enjoyed it very much as it showed me some valuable lessons on my skills and where my current weaknesses are.  
### Hope you enjoy what I have created!

