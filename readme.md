## Travel Dashboard:



Using the database you set up in a previous assignment (look below) create a full application for it.

![Image](https://gyazo.com/77589958a591c1474aaf4836e7d39fe3.png)

## Complete the following user stories


__#1__

```
As a user
When I go to the root route '/'
Then I see a login/register form.
```

__#2__

```
As a user
When I login
Then I am redirected to '/trips'
```

__#3__

```
As a user
When I visit '/trips'
Then I see a form to create a new trip.
The form should have a drop down list to select a flight
```

__#4__

```
As a user
When I submit the trip creation form
Then I see the trip added to the list of upcoming trips.
```

__#5__

```
As a airline
When I visit '/airline/login'
Then I see a login form.
```

__#6__

```
As a airline
When I login
Then I am redirected to "/airline"
```

__#7__

```
As a airline
When I visit "/airline"
Then I see a list of all upcoming flights (for the airline I'm logged in as).
```

__#8__

```
As a airline
When I visit "/airline"
Then I should see a form to create a new flight.
```

### Other goals:
 - Style it up! Make it look pretty.
 - Implement full auth and encryption
