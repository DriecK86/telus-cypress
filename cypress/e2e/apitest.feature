Feature: API
  Feature Description: Happy path API testing

  Scenario:This should render status 200 with response body for GET request
    Given url 'https://api.coindesk.com/v1/bpi/currentprice.json'
    When I send a 'GET' request
    Then it should have status of '200' and it should have 'Bitcoin'
