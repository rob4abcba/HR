def minimumSwaps(arr):
    print("arr = ",arr)
    temp = [-1] * (len(arr) + 1)
    print("temp = ",temp)
    for index, val in enumerate(arr):
        # enumerate returns index as well as value
        print("enumerate(arr) = ",enumerate(arr))
        print("index = ", index, "val = ", val)
        # create an index list where values are indexes of first list and its indexes are old lists values
        temp[val] = index
        print("temp["+str(val)+"] = ",temp[val])
        print("temp = ",temp)
        # index += 1
    swaps = 0
    # print("swaps = ",swaps)
    for i in range(len(arr)):
        print("range(len(arr) = ",range(len(arr)))
        print("i = ",i)
        print("arr["+str(i)+"] = ",arr[i])
        if arr[i] != i+1:
            print("We want arr["+str(i)+"] = ",i+1)
            swaps += 1
            print("swaps = ",swaps)
            t = arr[i]
            print("t = arr[i] = arr["+str(i)+"] = ",arr[i])
            arr[i] = i+1
            print("arr["+str(i)+"] = i+1 = ",i+1)
            # print("arr = ",arr)
            arr[temp[i+1]] = t
            print("arr[temp[i+1]] = arr[temp["+str(i+1)+"]] = t = ",t)
            print("arr = ",arr)
            temp[t] = temp[i+1]
            print("temp[t] = temp["+str(t)+"] = temp[i+1] = temp["+str(i+1)+"] =", temp[i+1])
            print("temp = ",temp)
    return swaps
# print("minimumSwaps([4,3,1,2]) = ", minimumSwaps([4,3,1,2]))
print("minimumSwaps([4,3,5,2,1]) = ", minimumSwaps([4,3,5,2,1]))
