# Data Structures Easy To Advanced Flashcards 🥷

All questions, notes etc. are from the [Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer](https://www.youtube.com/watch?v=RBSGKlAvoiM) video. Thanks to William Fiset.

## Abstract Data Types

1. ### What is a Data Structure?

   A **data structure (DS)** is a way of organising data so that it can be used effectively.

2. ### Why Data Structures?

   - They are essential ingredients in creating fast and powerful algorithms.
   - They help to manage and organise data.
   - They make code cleaner and easier to understand.

3. ### What is An Abstract Data Type?

   An **abstract data type (ADT)** is an abstraction of a data structure which provides only the interface to which a data structure must adhere to.

   The interface does not give any specific detail about how something should be implemented or in what programming language.

4. ### Abstraction (ADT) vs Implementation (DS)
   | Abstraction (ADT) | Implementation (DS)                                               |
   | ----------------- | ----------------------------------------------------------------- |
   | List              | Dynamic Array<br>Linked List                                      |
   | Queue             | Linked List based Queue<br>Array based Queue<br>Stack based Queue |
   | Map               | Tree Map<br>Hash Map / Hash Table                                 |
   | Vehicle           | Golf Cart<br>Bicycle<br>Smart Car                                 |

## Big-O Notation

5. ### What is Big-O Notation?

   Big-O Notation gives an upper bound of the complexity in the **worst** case, helping to quantify performance as the input size becomes **arbitratily large**.

6. ### Complexities ordered in from smallest to largest

   The size of the input - **n**

   - Constant Time: **O(1)**
   - Logarithmic Time: **O(log(n))**
   - Linear Time: **O(n)**
   - Linearithmic / Log Linear Time: **O(n log(n))**
   - Quadratic Time: **O(n^2)**
   - Cubic Time: **O(n^3)**
   - Exponential Time: **O(a^n)** => a>1
   - Factorial Time: **O(n!)**

7. ### Constant Time

   O(1)

8. ### Logarithmic Time

   O(log(n))

9. ### Linear Time

   O(n)

10. ### Linearithmic / Log Linear Time

    O(n log(n))

11. ### Quadratic Time

    O(n^2)

12. ### Cubic Time

    O(n^3)

13. ### Exponential Time

    O(a^n), a>1

14. ### Factorial Time

    O(n!)

15. ### Finding all subsets of a set

    O(2^n)

16. ### Finding all permutations of a string

    O(n!)

17. ### Sorting using merge sort

    O(n log(n))

18. ### Iterating over all the cells in a matrix of size n by m

    O(nm)

19. ### Constant Time Examples

    ```js
    const a = 1;
    const b = 2;
    const c = a + 5 * b; // O(1) => Constant Time
    ```

    ```js
    let i = 0;
    while (i < 11) {
      i += 1;
    } // O(1) => Constant Time
    ```

20. ### Logarithmic Time Examples

    ```js
    // Example - Binary Search
    function binarySearch(array, value) {
      let low = 0;
      let high = array.length - 1;

      while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === value) {
          return mid;
        } else if (array[mid] < value) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      return -1; // Value not found
    }

    binarySearch([1, 2, 5, 7, 13, 15, 16, 18, 19, 24], 18); // 7 => O(log^2(n)) => O(log(n))
    ```

21. ### Linear Time Examples

    ```js
    let i = 0;
    while (i < n) {
      i += 1;
    } // O(n) => Linear Time
    // f(n) = n
    // O(f(n)) = O(n)
    ```

    ```js
    let j = 0;
    while (j < n) {
      j += 3;
    } // O(n) => Linear Time
    // f(n) = n/3
    // O(f(n)) = O(n)
    ```

22. ### Linearithmic / Log Linear Time Examples

    ```js
    // Example - Merge Sort
    function merge(left, right) {
      let sorted = [];

      while (left.length && right.length) {
        if (left[0] < right[0]) {
          sorted.push(left.shift());
        } else {
          sorted.push(right.shift());
        }
      }

      return sorted.concat(left.slice().concat(right.slice()));
    }

    function mergeSort(array) {
      const mid = array.length / 2;

      if (array.length < 2) {
        return array;
      }

      const left = mergeSort(array.slice(0, mid));
      const right = mergeSort(array.slice(mid));

      return merge(left, right);
    }

    const unsortedArr = [31, 27, 28, 42, 13];
    mergeSort(unsortedArr); // [ 13, 27, 28, 31, 42 ] => O(n log(n))
    ```

23. ### Quadratic Time Examples

    ```js
    // Example 1 => Obvious since n work done n times is n*n (O(n^2))
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        // f(n) = n*n = n^2 => O(f(n)) = O(n^2) => Quadratic Time
      }
    }
    ```

    ```js
    // Example 2
    for (let k = 0; k < n; k += 1) {
      for (let l = k; l < n; l += 1) {
        // replaced 0 with k
        // k goes from [0, n) the amount of looping done is directly determined by what k is.
        // if k=0, we do n work, if k=1, we do n-1 work, if k=2, we do n-2 work etc.
        // n(n+1)/2 => O(n(n+1)/2) => O(n^2/2 + n/2) => O(n^2) => Quadratic Time
      }
    }
    ```

24. ### Exponential Time Examples

    ```js
    // Example - Fibonacci
    function fibo(num) {
      if (num <= 1) return 1;

      return fibo(num - 1) + fibo(num - 2);
    }

    fibo(6); // 13 => O(2^n)
    ```

25. ### Factorial Time Examples

    ```js
    // Example
    function factorial(n) {
      let num = n;

      if (n === 0) return 1;

      for (let i = 0; i < n; i++) {
        num = n * factorial(n - 1);
      }

      return num;
    }

    factorial(4); // 24 => O(n!)
    ```

## Dynamic and Static Arrays

26. ### What is a Static Array?

    A static array is a fixed length container containing n elements **indexable** from the range [0, n-1].

    - What is meant by **indexable**?
    - This means that each slot/index in the array can be referenced with a number.

27. ### When and where is a Static Array used?

    1. Storing and accessing sequential data
    2. Temporarily storing objects
    3. Used by IO routines as buffers
    4. Lookup tables and inverse lookup tables
    5. Can be used to return multiple values from a function
    6. Used in dynamic programming to cache answers to subproblems

28. ### Complexity Static vs Dynamic Array

    |           | Static Array | Dynamic Array |
    | --------- | ------------ | ------------- |
    | Access    | O(1)         | O(1)          |
    | Search    | O(n)         | O(n)          |
    | Insertion | N/A          | O(n)          |
    | Appending | N/A          | O(1)          |
    | Deletion  | N/A          | O(n)          |

29. ### Static Array and example

    ```js
    const a = [44, 12, 32, 48, 234, 2, 99]
                0   1   2   3   4   5   6
    ```

    Static arrays have their size or length determined when the array is created and/or allocated.
    Elements in `a` are referenced by their index. There is no other way to access elements in an array. Array indexing is zero-based, meaning the first element is found in position zero.

30. ### Dynamic Array and example

    Dynamic array is a random access, variable-size list data structure that allows elements to be added or removed.
    The dynamic array can **grow** and **shrink** in size.

    ```js
    let a = [34, 4];
    a.push(-7); // [ 34, 4, -7 ]
    a.push(34); // [ 34, 4, -7, 34 ]
    a.splice(1, 1); // [ 34, -7, 34 ]
    ```

## Linked Lists

31. ### What is a Linked List?

    A linked list is a sequential list of nodes that hold data which point to other nodes also containing data.

32. ### Where are linked lists used?

    - Used in many List, Queue & Stack implementations,
    - Great for creating circular lists,
    - Can easily model real world objects such as trains,
    - Used in separate chaining, which is present certain Hash Table implementations to deal with hashing collisions,
    - Often used in the implementation of adjacency lists for graphs.

33. ### Linked Lists - Terminology

    **Head:** The first node in a Linked List
    **Tail:** The last node in a Linked List
    **Pointer:** Reference to another node
    **Node:** An object containing data and pointer(s)

34. ### Singly vs Doubly Linked Lists

    **Singly linked** lists only hold a reference to the next node. In the implementation you always maintain a reference to the **head** to the linked lists and a reference to the **tail** node for quick additions/removals.

    With a **doubly linked** list each node holds a reference to the next and previous node. In the implementation you always maintain a reference to the **head** and the **tail** of the doubly linked list to do quick additions/removals from both ends of your list.

35. ### Singly & Doubly Linked Lists Pros and Cons

    |               | Pros                                           | Cons                                   |
    | ------------- | ---------------------------------------------- | -------------------------------------- |
    | Singly Linked | Uses less memory<br><br>Simpler implementation | Cannot easily access previous elements |
    | Doubly Linked | Can be traversed                               | Takes 2x memory                        |

36. ### Singly & Doubly Linked Lists Complexity

    |                  | Singly Linked | Doubly Linked |
    | ---------------- | ------------- | ------------- |
    | Search           | O(n)          | O(n)          |
    | Insert at head   | O(1)          | O(1)          |
    | Insert at tail   | O(1)          | O(1)          |
    | Remove at head   | O(1)          | O(1)          |
    | Remove at tail   | O(n)          | O(1)          |
    | Remove in middle | O(1)          | O(1)          |

37. ### Linked List - **SEARCH**

    ```js
    search(value) {
      let currentNode = this.head;

      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }

      return null;
    }
    ```

38. ### Linked List - **INSERT AT HEAD**

    ```js
    // add to beginning of list / head
    prepend(value) {
      // if list is empty
      if (!this.head) {
        this.head = this.tail = new Node(value);
      }
      // if linkedlist has >= one node
      else {
        let oldHead = this.head;
        this.head = new Node(value);
        oldHead.prev = this.head;
        this.head.next = oldHead;
      }
    }
    ```

39. ### Linked List - **INSERT AT TAIL**

    ```js
    // add to the end of the list / tail
    append(value) {
      // if list is empty
      if (!this.tail) {
        this.head = this.tail = new Node(value);
      }
      // if linkedlist has >= one node
      else {
        let oldTail = this.tail;
        this.tail = new Node(value);
        oldTail.next = this.tail;
        this.tail.prev = oldTail;
      }
    }
    ```

40. ### Linked List - **REMOVE AT HEAD**

    ```js
    deleteHead() {
    // if list is empty (no head)
      if (!this.head) {
        return null;
      }
      // if linkedlist has >= 1 node
      else {
        let removedHead = this.head;
        // if list has only 1 node left
        if (this.head === this.tail) {
          this.head = this.tail = null;
        }
        //if list has >1 node
        else {
          this.head = this.head.next;
          this.head.prev = null;
        }
        return removedHead.value;
      }
    }
    ```

41. ### Linked List - **REMOVE AT TAIL**
    ```js
    deleteTail() {
      // if list is empty (no tail)
      if (!this.tail) {
        return null;
      }
      // if linkedlist has >= one node
      else {
        let removedTail = this.tail;
        // if list has only 1 node left
        if (this.head === this.tail) {
          this.tail = this.head = null;
        }
        //if list has >1 node
        else {
          this.tail = this.tail.prev;
          this.tail.next = null;
        }
        return removedTail.value;
      }
    }
    ```

## Stack

42. ### What is a Stack?

    A stack is a one-ended linear data structure which models a real world stack by having two primary operations, namely **push** and **pop**.

43. ### When and where is a Stack used?

    - Used by undo mechanisms in text editors,
    - Used in compiler syntax checking for matching brackets and braces,
    - Can be used to model a pile of books or plates,
    - Used behind the scenes to support recursion by keeping track of previous function calls,
    - Can be used to do a Depth First Search (DFS) on a graph.

44. ### Complexity of Stack

    | Pushing | O(1) |
    | Popping | O(1) |
    | Peeking | O(1) |
    | Searching | O(n) |
    | Size | O(1) |

45. ### Stack Functions - Push

    Add an element (or several elements) to the top of the stack.

    ```js
    push(item) {
      return this.items.push(item);
    }
    ```

46. ### Stack Functions - Pop

    Remove the top element of the stack and return the removed element.

    ```js
    pop() {
      return this.items.pop();
    }
    ```

47. ### Stack Functions - Peek

    Return the top element of the stack without modifying the stack itself.

    ```js
    peek() {
      return this.items[this.length - 1];
    }
    ```

48. ### Stack Functions - Is Empty

    Return **true** if the stack does not contain any elements, **false** if the stack's size is greater than 0.

    ```js
    isEmpty() {
      return this.items.length === 0;
    }
    ```

49. ### Stack Functions - Clear

    Remove all elements from the stack.

    ```js
    clear() {
      this.items = [];
    }
    ```

50. ### Stack Functions - Size

    Return the number of elements in the stack (similar to the length property of an array).

    ```js
    size() {
      return this.items.length;
    }
    ```

51. ### How to Convert Decimal Numbers to Binary using Stack (JS)

    To convert a decimal number into a binary representation, we can divide the number by 2 (since binary is a base 2 number system) until the division result is 0.

    ```js
    function decimalToBinary(num) {
      const remStack = [];
      let number = num;
      let rem;
      let binaryString = "";
      while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
      }
      while (remStack.length !== 0) {
        binaryString += remStack.pop().toString();
      }
      return binaryString;
    }
    console.log(decimalToBinary(41)); // 101001
    ```
