# !/usr/local/bin/lua

print("hello world")

print(type("hello world"))

print(type(a))

if 0 then
    -- body
else
    -- body
end

html =  [[
    ddddd,
    ddd
]]
print(html)

function function_name( ... )
    -- body
end

-- local x = 1

-- a,b= 10,11
while(1)
do
    print(...)
end

for i,v in ipairs(table_name) do
    print(i,v)
end

for i=1,10 do
    print(i)
end

if condition then
    -- body
end

function add( ... )
    -- body
end
add(d,d,d,d,)
select(index, ...)
print("..add().."..ddd.."d")

a==b
a ~=b

a and b
a or b 
a not b 

#b 

Shape = {area = 0}

function Shape:new  ( 0,side )
    o= o or {}
    setmetatable(o, self)
    self.__index = self
    side = side or 0
    self.area = side*side    -- body
end