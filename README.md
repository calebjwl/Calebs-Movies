# BusPatrol-Challenge
Run `npm start` to start application.

## Potential Improvements & Additional Features

While its certainly no excuse, I completed the challenge in between some pre-existing obligations throughout the week and as a result, was unable to complete a few items that I wanted to. However, I thought it'd be helpful to list out my train of thought for those items if I had more time to do them in a way that was still 100% clean and best practice. I would rather deliver a more limited functionality that's refined and I'm 100% confident in instead of attempting to deliver a half-broken result with too much ambition. That being said, here are the areas where I wish I could have done more:

1. **Tests**

I unfortunately was unable to develop tests for the application in the time that I had. As I mentioned in in my technical interview, I admittedly have not had a lot of experience writing tests in a professional environment besides a unit on TDD during my coding bootcamp education. I most likely would have used Jest for testing, and despite my somewhat limited knowledge on the subject these are the test cases I would have tested against, at least to start:

- Title, Rating, Runtime, and Year sort functions are returning the exact correct order of movies (individual tests for each sort)
- For sorts where multiple items have the same property value (i.e. rating, year), make sure original order is preserved
- Reverse sort function correctly returns currently displayed list exactly reversed
- Clicking on sort buttons multiple times doesn't return different results
- Clicking from one sort button to the others are returning the correct result
  - 1 test for each potential combo of clicking, ex: click Title then Rating, Title then Runtime, etc...
- Clicking on a sort button after a list has been reversed, different combos of reversing and clicking different sort options before/after


2. **Ascending/Descending Indicator**

I would have liked shown the user an indication as to whether the sorted list they were seeing was in ascending or descending order. I like how IMDB handles this by dynamically updating the title and the icon next to each filter text:

![imdb sort](https://user-images.githubusercontent.com/21270115/185995650-021370b2-3713-43bb-9cc9-d2c8fea5aa35.gif)

While I was able to implement some of the dynamic title functionality, the icon and 'ascending/descending' text would have required more time for intentional state management to be accurately developed.

3. **SCSS**

Since I used BEM naming methodology for the HTML, it would have been nice for readibility of the stylesheets to add SCSS to the project. Further, while there aren't a ton of repeated uses of specific colors/rules, I do like the cleanliness of SCSS's syntax for variables. Might have been nice to have spacing variables as well for margins and paddings.

4. **General Styling/Aesthetic** 

I aimed for a simple and no-frills clean interface for this, but there's always room for small detail improvements even in the simplest interfaces. 

## Conclusion
With that being said, I believe I have completed this challenge to the best of my ability at my current skill level and what I'm confident in. I'd be happy to receive any constructive criticism regardless of the outcome of the job!

Thank you BusPatrol team for the consideration! Hope to hear from you soon.
