# BDA helpers for WebPPL

## Data analysis helpers

+ `observeData({data: data, link: Dist, display: true/false})`: e.g., `observeData({data: [1,2], link: Binomial({n:2, p:0.5}), display: true})` (display will print out the score to the console). Shorthand for `factor(Dist.score(data))` (but works with arrays as well as singleton data points)
+ `foreach(array, function)`: like `map`, but no return (useful for IncrementalMH)
+ `marginalize(Dist, label)`: go from a joint distribution to a marginal distribution

## Linking functions 

+ `DiscreteGaussian({mu: ..., sigma: ..., lower: ..., upper: ..., binWidth: ...})`: a discretized Gaussian disribution with lower and upper bound stipulated [default lower and upper set to 1 and 7]
+ `OrdinalGaussian({mu: ..., sigma: ..., thresholds: ...})`: an ordinalized Gaussian distribution (e.g., for ordinal regression). e.g. `OrdinalGaussian({mu: 1, sigma:2.5, thresholds: [1.5, 2.5, 3.5, 4.5, 5.5, 6.5]})`
+ `gaussianCDF({mu: ..., sigma: ..., x: ...})`: e.g. `gaussianCDF({mu: 3.5, sigma:1, x: 2})`

## Misc helpers

+ `exp(x)`: exponentiation e.g. `exp(1.37)`
+ `probability(x, Dist)`: shorthand for `exp(Dist.score(x))`

## List of .js functions 

Accessed via `bdaUtils.function`, e.g. `bdaUtils.isNumeric(x)`

+ `isNumeric(x)` where x may or may not be numeric
+ `parseFloat(x)` where x is a string
+ `fillArray(x, length)`
+ `erf(x)` where x is numeric
+ `closest(x, array)`: find the closest value to x in array of numbers


## Installation

You can install this pacakge using: 

```
npm install --prefix ~/.webppl mhtess/webppl-bda
```
