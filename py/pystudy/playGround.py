# !/usr/bin/python3
# coding=utf-8

records = [('foo', 1, 2), ('bar', 'hello'), ('foo', 3, 4)]


def play():
    # *trailing_qtrs, current_qtr = [10, 8, 7, 1, 9, 5, 10, 3]
    # print(trailing_qtrs)
    # for tag, *_ in records:
    #     print('tag=', tag, 'arg=', 'args=')
    # if tag == 'foo':
    #   do_foo(*args)
    # elif tag == 'bar':
    #     do_bar(*args)
    f = fibonacci(10)
    for i in range(10):
        print(next(f))
    pass


def fibonacci(n):
    a, b, counter = {'key': 0}, 1, 0
    while True:
        if (counter > n):
            return
        yield a
        a['key'], b = b, a['key'] + b
        counter += 1
    pass


def do_foo(x, y):
    print('foo', x, y)
    pass


def do_bar(s):
    print('bar', s)
    pass


if __name__ == '__main__':
    play();
