# Improvements

**Author:** You Wu
**Role:** Software Engineer
**Time taken:** 4 Hours

## Things that can be added to the codebase:
1. There are no README.md or docummentation provided in the server folder, which means no knowledge transfer between coder and reader/maintainer/newcomer. People who's new to this codebase might need to spend hours to figure out what exactly does this server do and what are the business knowledge behind it. This result in the increase of level of difficulty to maintain this codebase since the person who will eventually be maintaining or debugging it is most unlikely the person who wrote it. (readability++, maintainability++)

2. Use object oriented programming instead of functional programming. OOP offers advantages such as modular development for complex functionalities, code reusability, and intuitive representation of the real world data structures. There features align well with the demands of this e-commerce system and leading to more maintainable, scalable and expressive codebase. (maintainability++, testability++, readability++)

3. Setup pre push git hooks -> check code format, pass all unit test before it got pushed to the remote repo. This can detect errors before it got reviews, enforce consistent coding standards and keep your codebase maintainable and reliable. (testability++, maintainability++, readability++)

4. Will be better if some sample data were provided that are closed representation of the real data. By incorporating sample data into your codebase, you contribute to more efficient development processes, improved collaboration, and enhanced communication with stakeholders. (testability++, readability++)

5. Authentication and authorization were not implemented in this api server. see: https://www.infoguardsecurity.com/why-you-need-both-authorization-and-authentication/ (security)

6. Logging, monitoring and alerting mechanism were not setup in this codebase. These are the key factors of the maintainability of a software/server as it allows developers or operators to 1. monitor the preformance of the application, 2. identify potential risks or bugs quicker and more accurate, 3. eaily trace the errors and actions of the application. (maintainability++)

## Things that can be improved in the codebase:

1. Consider creating a data mocking factory instead of a fixed mork data for all test cases, one single mock data won't be able to cover all the edge case inputs. (testability++)

2. When implementing unit tests for specific components and functions, consider mock all external dependencies to isolate the unit under test and ensure repeatability. For example, when implementing test cases for a function that extract data from database and do transformation, the response of database calls should be mocked to ensure the test case doesn't depends on the connection between server and database. (testability++, maintainability++)

3. Each test case in api-tests have strong dependency on the test cases before it, failure of one test cases will impact the execution of the following ones (try run it twice). Unit tests should be independent of each other for the following reasons: 1. Isolation of failures, 2. ensure consistent testing result, 3. easy to refactor, debug and maintain, 4. isolation of external dependencies. (testability, maintainability)

4. Instead of implementing invalid request handling code at the beginning of all handlers, create a middleware function that validates the incomming data against the appropriate Types for all routes. (readability++, maintainability++)

5. Use a relational database instead of an in-memory collection of orders. (reliability, security, readability)

6. zod-http-schemas is a third party open source tool created by Skutopia, the lastest update of this tool was almost two years ago. When your applications heavily depends on a thrid party open source tool, there are multiple factors need to be considered. For example: security and vulnerabilities, maintenance and support, compatibility and dependencies.  (maintainability++, testability++)
