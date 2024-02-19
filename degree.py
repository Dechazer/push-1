def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Example usage
degrees_celsius = 25
degrees_fahrenheit = celsius_to_fahrenheit(degrees_celsius)
print(f"{degrees_celsius} degrees Celsius is {degrees_fahrenheit} degrees Fahrenheit")

degrees_fahrenheit_back = fahrenheit_to_celsius(degrees_fahrenheit)
print(f"{degrees_fahrenheit} degrees Fahrenheit is {degrees_fahrenheit_back} degrees Celsius")
