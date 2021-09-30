# Thermostat: business logic

Week 6 Makers Academy week challenge
Building the logic needed to model a simple thermostat. Objective is to use Jasmine to Test-Drive Development of a thermostat and learning fundamentals of Javascript

## Program specification

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default but it can also be turned off
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Installation

```
git clone git@github.com:mandyvuong/Thermostat.git
```

## How to use

```
open index.html
```

## Testing

```
open SpecRunner.html
```

## Example applications

There are 3 different commits in this repo to showcase a slightly different approach on the global weather API integration, where the temperature is displayed for a city/cities:

Checking out commits using: `git checkout <commit-hash>`

Here are the commits for:

- Display London temperature: `29f5e81`
- User selects a predefined city: `3d9f895`
- User types in the city: `c5e2065`
