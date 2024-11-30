Stock Portfolio Assignment

Rajsi Traders is a small firm that has launched a platform where it will display a few stocks which is for working employees. In their platform, they have a few stocks mentioned which you can add to your portfolio and it will also generate the “Profit/Loss” scenario based on the market price and current stock price.

They have given this project to you to create the backend of the platform and help them generate the relevant prices.

What is the Stock portfolio Platform?

The user can see 6 most relevant stocks on the platform.

To move ahead, they need to add at least 4 stocks in their portfolio first.

While adding the stocks, the user also needs to mention the quantity of the stocks they wish to purchase.

Once added, it will generate the Market Price and Bought At price automatically.

Once you have added all the stocks, the user can see their “Stock Portfolio”

When the user clicks “View Returns” for each stock, they will be able to see the return for each stock they have added in their portfolio. Return = (marketPrice - boughtAt) * quantity

Now, the user will need to calculate the return percentage based on the returns they received which will be: returnPercentage = (returns / boughtAt) * 100

After calculating the Return Percentage, the user can now see the “Status” of their stock portfolio for each stock Profit or Loss

And at the end, the user can see their cumulative result of the portfolio

Total Returns

Total Growth

Let’s get started and create our Stock Portfolio for Rajsi Traders

Make sure before we begin designing our APIs, import the following:

Endpoint 1: Calculate the Returns of the Stocks added

Create an endpoint that takes three variables as query parameters and returns total Return Value of the stocks.

Write an Express code snippet.

Declare an endpoint calculate-returns using the get keyword.

Declare three variables boughtAt, marketPrice, and quantity to take the input.

Parse the boughtAt and marketPrice inputs as a float to calculate the return value.

Return the result as a string.

API Call: <http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>

Expected Output: 200

Endpoint 2: Calculate the Total Returns

Create an endpoint that takes four variables as query parameters and returns total return value of all the stocks.

Write an Express code snippet.

Declare an endpoint total-returns using the get keyword.

Declare four variables stock1, stock2, stock3, and stock4 to take the inputs.

Parse all the inputs as a float to calculate the total returns.

Return the result as a string.

API Call: <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>

Expected Output: 900

Endpoint 3: Calculate the Return Percentage

Create an endpoint that takes two variables as query parameters and returns total ReturnPercentage of the stocks.

Write an Express code snippet.

Declare an endpoint calculate-return-percentage using the get keyword.

Declare three variables boughtAt and returns to take the input.

Parse the boughtAt and returns as inputs as a float to calculate the return percentage.

Return the result as a string.

API Call: <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>

Expected Output: 50

Endpoint 4: Calculate the Total Return Percentage

Create an endpoint that takes four variables as query parameters and returns total return percentage of all the stocks.

Write an Express code snippet.

Declare an endpoint total-return-percentage using the get keyword.

Declare four variables stock1, stock2, stock3, and stock4 to take the inputs.

Parse all the inputs as a float to calculate the total return percentage.

Return the result as a string.

API Call: <http://localhost:3000/total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40>

Expected Output: 90

Endpoint 5: Identify the Status of Stocks based on their Return Value

Create an endpoint that takes returnPercentage as query parameter and returns the stock status.

Write an Express code snippet.

Declare an endpoint status using the get keyword.

Declare a variable returnPercentage to take the input.

Apply an if condition to identify if the final stock is in “Profit” or “Loss” based on the return percentage.

If returnPercentage is greater than 0 then its profit otherwise loss

API Call: <http://localhost:3000/status?returnPercentage=90>

Expected Output: profit