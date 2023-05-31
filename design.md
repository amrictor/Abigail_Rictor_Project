# Design Thoughts

Given the project's intended scope, and my own time constraints and availability during the alotted time period, I have implemented a narrow subset of the features I would incorporate into a final design based on this API. In the implementation as exists, the requested models are available in paginated lists on their respective pages. The data is organized to draw the eye to categorical and identifying information first, and for more speciific information to be easily spotted and processed when looking for it, using iconography and color theory.

The project's architecture is reasonably lightweight but does rely on Tanstack Query, which I prefer for side effects and state management because of its cognitive simplicity regarding caching and data optimization.