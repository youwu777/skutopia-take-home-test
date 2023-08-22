# Improvements

**Author:** You Wu
**Role:** Software Engineer
**Time taken:** 3 Hours

1. There are no README.md or docummentation provided in the server folder, which means no knowledge transfer between coder and reader/maintainer/newcomer. People who's new to this codebase might need to spend hours to figure out what exactly does this server do and what are the business knowledge behind it. This result in the increase of level of difficulty to maintain this codebase since the person who will eventually be maintaining or debugging it is most unlikely the person who wrote it. 

2. OOP vs Functional Programming

3. Consider creating a data mocking factory instead of a fixed mork data for all test cases

4. Instead of implementing invalid request handling code at the beginning of all handlers, create a middleware function that validates the incomming data against the appropriate Types for all routes. 

5. Setup pre push git hooks -> check code format, pass all unit test before

6. Will be better if some sample data were provided that are closed representation of the real data

7. Not sure the in memory collection of orders is intented

8. zod-http-schemas?

9. authentication and authorization

10. Logging and monitoring

