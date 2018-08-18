def isPrime(test) :
	i = 2
	while i < test :
		if test % i < 1 :
			return False
		i += 1
	return True

print isPrime(5)
print isPrime(15)