# Recursion learning hour

These are exercises for a learning hour about [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)). They are available in
both [JavaScript](javascript/) and [Ruby](ruby/) versions.

The goal of each exercise is to make tests pass by implementing the appropriate
recursive function in [`javascript/lib`](javascript/lib/) or
[`ruby/lib`](ruby/lib/) respectively.

In each case ask yourself:

* In what way can I make the problem somehow “smaller”?
* What is the solution to the “smallest” possible version of the problem?
* If I am given the solution to a “smaller” version of the problem, how can I use it to solve the original problem?

If you’re having trouble understanding the problem itself then you may find it
helpful to implement an
[iterative](https://en.wikipedia.org/wiki/Iteration#Computing) solution first,
although this isn’t always easier.

## Getting started

For JavaScript:

```
$ cd javascript
$ yarn install
$ yarn jest test/sumUpTo.test.js # or whatever
```

For Ruby:

```
$ cd ruby
$ bundle install
$ bundle exec rspec spec/sum_up_to_spec.rb # or whatever
```

## Doing the exercises

The exercises are organised into three difficulty levels:

* [Introductory](#introductory)
  * [sum numbers from 1 to _n_](#sum-numbers-from-1-to-n)
  * [factorial](#factorial)
  * [sum array](#sum-array)
  * [reverse string](#reverse-string)
* [Intermediate](#intermediate)
  * [Fibonacci numbers](#fibonacci-numbers)
  * [anagrams](#anagrams)
* [Advanced](#advanced)
  * [Tower of Hanoi](#tower-of-hanoi)

---

### Introductory

---

#### sum numbers from 1 to _n_

* JavaScript: `yarn jest test/sumUpTo.test.js`
* Ruby: `bundle exec rspec spec/sum_up_to_spec.rb`

This exercise is about [summing](https://en.wikipedia.org/wiki/Summation) all
the numbers from 1 to _n_ for some number _n_. For example, the sum of all the
numbers from 1 to 5 is 1 + 2 + 3 + 4 + 5 = 15.

An iterative Ruby solution would have roughly this shape:

```ruby
def sum_up_to(number)
  result = … # some initial value

  while … # some condition involving the argument
    result = … # update result
  end

  result
end
```

Whereas a recursive solution would look more like:

```ruby
def sum_up_to(number)
  if … # some condition involving the argument
    … # some initial value
  else
    … sum_up_to(…) … # something involving a recursive call
  end
end
```

---

#### factorial

* JavaScript: `yarn jest test/factorial.test.js`
* Ruby: `bundle exec rspec spec/factorial_spec.rb`

This exercise is about finding the
[factorial](https://en.wikipedia.org/wiki/Factorial) of a number _n_ — that is,
all the numbers from 1 to _n_ multiplied together. For example, the factorial
of 5 is 1 × 2 × 3 × 4 × 5 = 120.

An iterative JavaScript solution would have roughly this shape:

```javascript
const factorial = number => {
  let result = …; // some initial value

  while (…) { // some condition involving the argument
    result = …; // update result
  }

  return result;
};
```

Whereas a recursive solution would look more like:

```javascript
const factorial = number => {
  if (…) { // some condition involving the argument
    return …; // some initial value
  } else {
    return … factorial(…) …; // something involving a recursive call
  }
};
```

---

#### sum array

* JavaScript: `yarn jest test/sumArray.test.js`
* Ruby: `bundle exec rspec spec/sum_array_spec.rb`

This exercise is about summing the numbers in an array. For example, the sum of
the numbers in the array `[1984, 451, 1138, 22]` is 1984 + 451 + 1138 + 22 =
3595.

Remember:

* In what way can I make the problem somehow “smaller”?
* What is the solution to the “smallest” possible version of the problem?
* If I am given the solution to a “smaller” version of the problem, how can I use it to solve the original problem?

---

#### reverse string

* JavaScript: `yarn jest test/reverseString.test.js`
* Ruby: `bundle exec rspec spec/reverse_string_spec.rb`

This exercise is about reversing a string. For example, `'hello'` reversed is
`'olleh'`.

Remember:

* In what way can I make the problem somehow “smaller”?
* What is the solution to the “smallest” possible version of the problem?
* If I am given the solution to a “smaller” version of the problem, how can I use it to solve the original problem?

---

### Intermediate

---

#### Fibonacci numbers

* JavaScript: `yarn jest test/fibonacci.test.js`
* Ruby: `bundle exec rspec spec/fibonacci_spec.rb`

This exercise is about calculating the [Fibonacci
numbers](https://en.wikipedia.org/wiki/Fibonacci_number). The first two numbers
in the Fibonacci sequence are 0 and 1, and each subsequent number is calculated
by adding the previous two. For example, the next numbers in the sequence are 1
(= 0 + 1), 2 (= 1 + 1), 3 (= 1 + 2) and 5 (= 2 + 3).

Bonus points: the simplest recursive implementation of this is quite slow for
large inputs. Why? Can you speed it up?

---

#### anagrams

* JavaScript: `yarn jest test/anagramsOf.test.js`
* Ruby: `bundle exec rspec spec/anagrams_of_spec.rb`

This exercise is about finding all the
[anagrams](https://en.wikipedia.org/wiki/Anagram) of a string. For example, all
the anagrams of `'cat'` are `'act'`, `'atc'`, `'cat'`, `'cta'`, `'tac'` and
`'tca'`.

Remember:

* In what way(s) can I make the problem somehow “smaller”?
* What is the solution to the “smallest” possible version of the problem?
* If I am given the solution(s) to “smaller” version(s) of the problem, how can I use that to solve the original problem?

---

### Advanced

---

#### Tower of Hanoi

* JavaScript: `yarn jest test/moveDisks.test.js`
* Ruby: `bundle exec rspec spec/move_disks_spec.rb`

This exercise is about solving a puzzle called the [Tower of
Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi).

The puzzle starts with a stack of differently-sized disks in ascending order
sitting on a base. There are two other empty bases and you are allowed to move
the top disk from one base to another as long you don’t put a large disk on top
of a smaller one. The challenge is to move the entire stack of disks from the
first to the last base in a series of valid moves.

An implementation of the puzzle is provided. Each base has an identifier (`a`,
`b` or `c`) and the tower object provides a `move` method which moves the top
disk from one base to another and returns the new state of the puzzle.

You can get a feel for this puzzle by trying to solve it manually first. Here’s
how you can “play” it on the JavaScript console, visualised with some slightly
naff ASCII art:

```javascript
$ yarn babel-node
> var Hanoi = require('./lib/hanoi')
undefined

> var tower = Hanoi.Tower.create(5) // or try 3 for an easier challenge
undefined

> tower
    **
   ****
  ******
 ********
**********
---------- ---------- ----------
a          b          c

> tower.move('a', 'c')

   ****
  ******
 ********
**********                **
---------- ---------- ----------
a          b          c

> tower.move('a', 'c').move('a', 'b').move('c', 'b')


  ******
 ********      **
**********    ****
---------- ---------- ----------
a          b          c
```

(If you want command history, [`brew install
rlwrap`](https://github.com/hanslub42/rlwrap) and then use `NODE_NO_READLINE=1
rlwrap --always-readline yarn babel-node` to start the console.)

And in Ruby:

```ruby
$ irb
>> require_relative 'lib/hanoi'
=> true

>> tower = Hanoi::Tower.create(5) # or try 3 for an easier challenge
=>
    **
   ****
  ******
 ********
**********
---------- ---------- ----------
:a         :b         :c

>> tower.move(:a, :c)
=>

   ****
  ******
 ********
**********                **
---------- ---------- ----------
:a         :b         :c

>> tower.move(:a, :c).move(:a, :b).move(:c, :b)
=>


  ******
 ********      **
**********    ****
---------- ---------- ----------
:a         :b         :c
```

Your goal is to write a function which automatically solve the puzzle in the
fewest possible moves. In practice this means implementing a function that can
move any number of disks from any base to any other base, assuming the third
base is available. The number of moves required increases exponentially with
the number of disks; for example, to move a stack of 10 disks requires over
1000 moves.

Remember:

* In what way can I make the problem somehow “smaller”?
* What is the solution to the “smallest” possible version of the problem?
* If I am given the solution to a “smaller” version of the problem, how can I use it to solve the original problem?
