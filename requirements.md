As a technician, I need to be able to create a new Repair Order and save it.

The Repair Order should have

- a name that I can set
- a description that I can set
- Services that I can add to the Order

An order can have many services, and I should be able to add as many as I want.
A service should have:

- a name that I can set
- a concern that I can set
- a cause that I can set
- a correction that I can set
- Labors that I can add to the Service

A service can have many labors, and I should be able to add as many as I want:
A labor should have:

- a name that I can set
- a rate that I can set
- hours that I can set
- a labor's total cost is rate \* hours

Summary: When I create a new Order, I should be able to:

- set the name and description
- add as many services as I need
- add as many labor to each service as I need
- see the total cost of a labor (rate \* hours)
- see the total cost of a service (labor totals)
- see the total cost of the Order (service totals)
  Note:

1. do the challenge without using any external libraries like react-hook-form (only use React built-in features).
2. turn off ai / copilot suggestions in your IDE.
3. ui style is not important, focus on functionality.
