# BDA helpers for WebPPL

## List of functions

+ `exp(x)`: exponentiation e.g. `exp(1.37)`
+ `probability(x, Dist)`: shorthand for `exp(Dist.score(x))`
+ `foreach(array, function)`: like `map`, but no return (useful for IncrementalMH)
+ `observeData(params)`: `params = {data: data, link: Dist, display: boolean}` e.g., `observeData({data: [1,2], link: Binomial({n:2, p:0.5}), display: true})` (display will print out the score to the console). Shorthand for `factor(Dist.score(data))` (but works with arrays as well as singleton data points)
+ `marginalize(Dist, label)`: go from a joint distribution to a marginal distribution
+ `gaussianCDF(params)`: e.g. `gaussianCDF({mu: 3.5, sigma:1, x: 2})`
+ `DiscreteGaussian(params)`: a discretized Gaussian disribution. An example using all of the params (only `mu` and `sigma` are necessary) [default lower and upper set to 1 and 7]
+ `OrdinalGaussian(params)`: an ordinalized Gaussian distribution (e.g., for ordinal regression). e.g. `OrdinalGaussian({mu: 1, sigma:2.5, thresholds: [1.5, 2.5, 3.5, 4.5, 5.5, 6.5]})`

## List of .js functions 

Accessed via `bdaUtils.function`, e.g. `bdaUtils.isNumeric(x)`

+ `isNumeric(x)` where x may or may not be numeric
+ `parseFloat(x)` where x is a string
+ `fillArray(x, length)`
+ `erf(x)` where x is numeric
+ `closest(x, array)`: find the closest value to x in array of numbers